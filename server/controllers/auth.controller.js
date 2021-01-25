import User from '../schemas/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config.js'

const login = async (req, res) => {
    const { id, password } = req.body

    console.log(req.body)
    try {
        const user = await User.findOne({role:"user",id:id}).select('password name')

        console.log('u=', user)
        if (!user) {
            return res.status(404).send(`${user.id}가 존재하지 않습니다.`)
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (passwordMatch) {
            const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
                expiresIn: '3d'
            })
            res.cookie('token', token, {
                maxAge: config.cookieMaxAge,
                httpOnly: true,
                secure: config.env === 'production'
            })
            res.json({ userId: user._id, role: user.role, name: user.name })

        } else {
            res.status(401).send('비밀번호가 일치하지 않습니다.')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('로그인 실패. 다시 시도하세요.')
    }
}

const admin = (req, res) => {
    try {
        res.json(admin)
    } catch (error) {
        res.status(500).send('다시 시도하세요.')
    }
}

const adminId = async (req, res, next, admin) => {
    try {
        const admin = await User.findOne({ role: "admin" }).select('id password role name')
        console.log('a=',admin)
        if (!admin) {
            res.status(404).send(`${id}가 존재하지 않습니다.`)
        }
        const adminpasswordMatch = await bcrypt.compare(password, admin.password)

        if (adminpasswordMatch) {
            const token = jwt.sign({ adminId: admin.id }, config.jwtSecret, {
                expiresIn: '3d'
            })
            res.cookie('token', token, {
                maxAge: config.cookieMaxAge,
                httpOnly: true,
                secure: config.env === 'production'
            })
            res.json({ adminId: admin.id, role: admin.role, name: admin.name })
        }else {
            res.status(401).send('비밀번호가 일치하지 않습니다.')
        }
        req.admin = admin
        next()
    } catch (error) {
        res.status(500).send('로그인 실패. 다시 시도하세요.')
    }
}

const logout = (req, res) => {
    res.clearCookie('token')
    res.send('로그아웃 되었습니다.')
}


export default { login, logout, admin, adminId }