import User from '../schemas/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config.js'

const login = async(req,res)=>{
    const {id, password} =req.body
    console.log(id,password)
    try{
        const user=await User.findOne({id}).select('+password')
        if(!user){
            return res.Status(404).send(`${id}가 존재하지 않습니다.`)

        }
        const passwordMatch= await bcrypt.compare(password, user.password)

        if(passwordMatch){
            const token=jwt.sign({userId:user._id},config.jwtSecret,{
                expiresIn:'3d'
            })
            res.cookie('token',token,{
                maxAge:config.cookieMaxAge,
                httpOnly:true,
                secure:config.env ==='production'
            })
            res.send('로그인 되었습니다.')
        }else{
            res.Status(401).send('비밀번호가 일치하지 않습니다.')
        }
    }catch(error){
        console.log(error)
        res.Status(500).send('로그인 실패. 다시 시도하세요.')
    }
}

export default {login}