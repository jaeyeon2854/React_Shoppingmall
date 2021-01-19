import Cart from "../schemas/Cart.js";
import User from "../schemas/User.js";
import isLength from 'validator/lib/isLength.js';
import bcrypt from 'bcryptjs';
import multer from "multer";

const uploadimg = multer({ dest: 'uploads/' });

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.id })
        res.json(user)
    } catch (error) {
        res.status(500).send('사용자 정보를 불러올 수 없습니다.')
    }
}

const imgUpload = uploadimg.fields([
    { name: 'avatar', maxCount: 1 }
])

const username = (req, res) => {
    res.json(req.account)
    console.log(req.account)
}

const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).send('사용자를 찾을 수 없습니다')
        }
        req.account = user
        req.id = id
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send('사용자 아이디 검색 실패')
    }
}


const signup = async (req, res) => {

    const { name, number1, number2, id, password, tel } = req.body

    console.log(req.body)
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
        await new Cart({ userId: newUser._id, role }).save()
        console.log(newUser)
        res.json(newUser)

    } catch (error) {
        console.log(error)
        res.status(500).send('죄송합니다. 다시 입력해 주십시오.')
    }
}

const update = async (req, res) => {
    console.log("req", req.body)
    try {
        if (req.body.avatar == '') {
            const user = req.account
            user.avatarUrl = req.body.avatar
            const updateUser = await user.save()
            res.json(updateUser)
        } else {
            const avatar = req.files['avatar'][0]
            const user = req.account
            user.avatarUrl = avatar.filename
            const updateUser = await user.save()
            res.json(updateUser)
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('이미지 업데이트 실패')
    }
}

export default { getUser, signup, username, imgUpload, userById, update }