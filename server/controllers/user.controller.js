import Cart from "../schemas/Cart.js";
import User from "../schemas/User.js";
import isLength from 'validator/lib/isLength.js';
import bcrypt from 'bcryptjs';

const signup = async (req, res) => {
    
    const { name, number1, number2, id, password,  tel } = req.body
    
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
        await new Cart({ userId: newUser._id }).save()
        console.log(newUser)
        res.json(newUser)

    } catch (error) {
        console.log(error)
        res.status(500).send('죄송합니다. 다시 입력해 주십시오.')
    }
}

export default { signup }