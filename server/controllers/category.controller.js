import Category from "../schemas/Category.js";

const getCategory = async (req, res) => {
    try {
        const category = await Category.find({}, { _id: 0 })
        res.json(category)
    } catch (error) {
        console.log(error)
        res.status(500).send('카테고리 검색 실패')
    }
}

const getSubCategory = async (req, res) => {
    const { sub } = req.params
    try {
        const subcategory = await Category.findOne({}, { _id: 0 }).select(`${sub}`)
        res.json(subcategory);
    } catch (error) {
        console.log(error)
        res.status(500).send('카테고리를 불러오지 못했습니다.')
    }
}

const getToHome = async (res, req) => {
    try {
        const bestProduct = await Product.find({}).sort({ purchase: 1 }).limit(6)
        const newProduct = await Product.find({}).sort({ createdAt: -1 }).limit(6)
        res.json(bestProduct, newProduct)
    } catch {
        console.log(error)
        res.status(500).send('상품을 불러오지 못했습니다.')
    }
}

const getsubId = async (req, res, next, ele) => {
    try {
        const sub = await Category.find({ ele })
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

export default { getCategory, getsubId, getSubCategory, getToHome }