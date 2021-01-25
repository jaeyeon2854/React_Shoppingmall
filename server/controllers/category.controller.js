import Category from "../schemas/Category.js";

const getCategory = async (req, res) => {
    try {
        const category = await Category.find({}, { _id: 0 })
        // console.log("main= ", category);
        res.json(category)
    } catch (error) {
        console.log(error)
        res.status(500).send('카테고리 검색 실패')
    }
}

const getSubCategory = async (req, res) => {
     console.log("req.params=?(getsubcategory)", req.params);
    const { sub } = req.params
    try {
        const subcategory = await Category.findOne({}, { _id: 0}).select(`${sub}`)
        res.json(subcategory);
        console.log("sub= ",subcategory);
    } catch (error) {
        res.status(500).send('카테고리를 불러오지 못했습니다.')
    }
}

const getToHome = async (res, req) => {
    try {
        const bestProduct = await Product.find({}).sort({ purchase: 1 }).limit(6)
        const newProduct = await Product.find({}).sort({ createdAt: -1 }).limit(6)
        // console.log("best=", bestProduct)
        // console.log("new=", newProduct)
        res.json(bestProduct, newProduct)
    } catch {
        res.status(500).send('상품을 불러오지 못했습니다.')
    }
}

const getsubId = async (req, res, next, ele) => {
    try {
        const sub = await Category.find({ele})
        if (!sub) {
            res.status(404).send('카테고리가 존재하지 않습니다.')
        } req.category = sub
        req.subcategory = sub
        next()
    }
    catch (error) {
        console.log(error);
        res.status(500).send('카테고리를 불러오지 못했습니다.')
    }
    next()
}

// const userById = async (req, res, next, id) => {
//     try {
//         const user = await User.findById(id)
//         if (!user) {
//             res.status(404).send('사용자를 찾을 수 없습니다')
//         }
//         req.account = user
//         next()
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('사용자 아이디 검색 실패')
//     }
// }



export default { getCategory, getsubId, getSubCategory, getToHome }