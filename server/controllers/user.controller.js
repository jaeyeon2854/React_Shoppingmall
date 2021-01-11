import User from "../models/User.js";
import isLength from 'validator/lib/isLength.js';
import bcrypt from 'bcryptjs';
import multer from "multer";

const upload = multer({ dest: 'uploads/' }) //multer 홈페이지 참고 // uploads가 어디인지 dest에 저장함.

const profileUpload = upload.fields([ //.single 한개, .fileds 여러개
    { name: 'avatar', maxCount: 1 },
])

const signup = async (req, res) => {
    console.log(req.body)
    console.log('req.body.name=', req.body.name)
    const { name, number1, number2, id, password, password2, tel } = req.body
    try {
        if (!isLength(password, { min: 8, max: 15 })) {
            return res.status(422).json({ message: '비밀번호는 8-15자리로 입력해주세요.' })
        }
        // if (!isLength(name, { min: 3, max: 10 })) {
        //     return res.status(422).send('이름은 3-10자로 입력해주세요.')
        // } else if (!isLength(password, { min: 8, max: 15 })){
        //     return res.status(422).json({message: '비밀번호는 8-15자리로 입력해주세요.'})
        // }
        // const user = await User.findOne({id})
        // if (user) {
        //     return res.status(422).send(`${id}가 이미 사용중입니다.`)
        // }
        const hash = await bcrypt.hash(password, 10)
        const newUser = await new User({
            name,
            number1,
            number2,
            id,
            password: hash,
            password2,
            tel
        }).save()
        console.log(newUser)
        res.json(newUser)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: '죄송합니다. 다시 입력해 주십시오.' })
    }
}


const update = async (req, res) => {
    try {
        const { name } = req.body
        const avatar = req.files['avatar'][0]
        const user = req.profile
        user.avatarUrl = avatar.filename
        const updateUser = await user.save()
        res.json(updateUser)
    } catch (error) {
        console.log(error);
        res.status(500).send('프로파일 업데이트 실패')
    }
}

const getProfile = (req, res) => {
    res.json(req.profile)
}

const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).send('사용자를 찾을 수 없습니다')
        }
        req.profile = user
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send('사용자 아이디 검색 실패')
    }
}

export default { signup, profileUpload, update, getProfile, userById}