import User from "../schemas/User.js";
import isLength from 'validator/lib/isLength.js'
import bcrypt from 'bcryptjs'
import multer from "multer";

const uploadimg = multer({ dest: 'uploads/' });

const imgUpload = uploadimg.fields([
    { name: 'main_image', maxCount: 1 }
])

const username = (req, res) => {
    res.json(req.account)
    console.log(req.account)
}

const userById = async (req, res, next, id) => {  //순서가 정해져있음.
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).send('사용자를 찾을 수 없습니다')
        }
        req.account = user
        next()   //함수 , 넥스트를 만나면 아래로 안내려가고 바로 리턴을 한다. 그리고 끝나는게 아니라 다음 미들웨어가 있으면 다음 미들웨어로 넘긴다.
    } catch (error) {
        console.log(error);
        res.status(500).send('사용자 아이디 검색 실패')
    }
}


const signup = async (req, res) => {
    console.log(req.body)
    const { name, number1, number2, id, password, tel } = req.body
    try {
        if (!isLength(password, { min: 8, max: 15 })) {
            return res.status(422).send('비밀번호는 8-15자리로 입력해주세요.')
        }
        const user = await User.findOne({ id })
        if (user) {
            return res.status(422).send(`${id}가 이미 사용중입니다.`)
        }

        const hash = await bcrypt.hash(password, 10)

        const newUser = await new User({
            name,
            number1,
            number2,
            id,
            password: hash,
            tel,
        }).save()
        console.log(newUser)
        res.json(newUser)

    } catch (error) {
        console.log(error)
        res.status(500).send('죄송합니다. 다시 입력해 주십시오.')
    }
}


const update = async (req, res) => {
    try {
        const avatar = req.files['avatar'][0]
        user.avatarUrl = avatar.filename
        const updateUser = await avatar.save()
        res.json(updateUser)
    } catch (error) {
        console.log(error);
        res.status(500).send('이미지 업데이트 실패')
    }
}

export default { signup, username, imgUpload, userById, update }