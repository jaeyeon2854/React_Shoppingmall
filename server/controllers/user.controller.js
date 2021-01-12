import User from "../schemas/User.js";
import isLength from 'validator/lib/isLength.js';
import bcrypt from 'bcryptjs';

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

const hello = (req, res) => {
    res.send('Hello from users contriller')
}

export default { signup, hello }