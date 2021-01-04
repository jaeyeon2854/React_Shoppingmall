import User from "../models/User.js";
import isLength from 'validator/lib/isLength.js'

const signup = async (req, res) => {
    const { name, number,id, password,password2,tel } = req.body
    try {
        if(!isLength(password,{min:8, max:15})){
            return res.status(422).send('비밀번호는 8-15자리로 입력해주세요.')
        }
        const newUser = await new User ({
            name,
            number,
            id,
            password,
            password2,
            tel
        }).save()
        console.log(newUser)
        res.json(newUser)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('죄송합니다. 다시 입력해 주십시오.')
    }
}

const hello = (req, res) => {
    res.send('Hello from users contriller')
}

export default  { signup, hello }