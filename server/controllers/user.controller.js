import User from "../models/User.js";

const signup = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const newUser = await new User ({
            name,
            email,
            password
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