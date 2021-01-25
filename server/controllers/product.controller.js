import Product from "../schemas/Product.js";
import multer from 'multer';

const upload = multer({ dest: 'uploads/' })

const imageUpload = upload.fields([
    { name: 'main_image' },
    { name: 'detail_image' }
])

const regist = async (req, res) => {
    console.log("req.body=", req.body)
    try {
        const { pro_name, price, stock, main_category, sub_category, description, colors, sizes } = req.body
        const main_img = req.files['main_image'][0]
        const detail_img = req.files['detail_image']
        const main_imgUrl = main_img.filename
        const detail_imgUrls = []
        detail_img.forEach(file => {
            detail_imgUrls.push(file.filename)
        })
        const newProduct = await new Product({
            pro_name, price, stock, main_category, sub_category, description, main_imgUrl, detail_imgUrls, colors, sizes
        }).save()
        res.json(newProduct)
    } catch (error) {
        console.log(error)
        res.status(500).send('제품 정보 등록에 실패하였습니다. 다시 진행해 주십시오.')
    }
}

const getToHome = async (req, res) => {
    try {
        const bestProduct = await Product.find({}).sort({ purchase: -1 }).limit(6)
        const newProduct = await Product.find({}).sort({ createdAt: -1 }).limit(6)
        // console.log("best=", bestProduct)
        // console.log("new=", newProduct)
        res.json({ bestProduct, newProduct })
    } catch {
        res.status(500).send('상품을 불러오지 못했습니다.')
    }
}

const getAll = async (req, res) => {
    try {
        const productslist = await Product.find({}).sort({ createdAt: -1 })
        res.json(productslist)
    } catch (error) {
        res.status(500).send('상품을 불러오지 못했습니다.')
    }
}

const getlist = (req, res) => {
    console.log('get list')
    try {
        res.json(req.productslist)
    } catch (error) {
        res.status(500).send('상품을 불러오지 못했습니다.')
    }
}

const subname = async (req, res) => {
    try {
        console.log("last subname::: LET ME SEE")
        res.json(req.findsubname)
    } catch (error) {
        res.status(500).send('상품을 불러오지 못했습니다.')
    }
}

const categoryId = async (req, res, next, category) => {
    const { search } = req.body
    console.log("server search=", search)
    try {
        const productslist = await Product.find({ main_category: category })
        // if (!productslist) {
        //     res.status(404).send('상품을 찾을 수 없습니다.')
        // }
        req.productslist = productslist
        console.log("nononono", req.productslist)
        next()
    } catch (error) {
        res.status(500).send('상품을 불러오지 못했습니다.')
    }
}

const subcategoryId = async (req, res, next, subname) => {
    try {
        console.log("Please===>>>", subname)
        const findSubname = await Product.find({ sub_category: subname })
        console.log("findSubname111=", findSubname)

        if (!findSubname) {
            const findSubname = {
                _id: 'nothing',
                pro_name: '상품준비중',
                price: 0,
                main_imgUrl:''
            }
            console.log("findSubname2222=", findSubname)
            res.send(findSubname)
        }
        res.send(findSubname)
    } catch (error) {
        res.send('상품을 불러오지 못했습니다.')
    }
}

const plusPurchase = async (req, res) => {
    const { products } = req.body
    try {
        for (let i = 0; i < products.length; i++) {
            const count = products[i].count
            const product = await Product.findOne(
                { _id: products[i].productId._id }
            )
            const purchase = product.purchase
            await Product.updateOne(
                { _id: products[i].productId._id },
                { $set: { purchase: count + purchase } }
            )
        }
        res.send("구매수 늘리기 성공")
    } catch (error) {
        res.status(500).send('구매숫자를 늘리지 못함')
    }
}

export default { imageUpload, regist, getToHome, getAll, categoryId, getlist, subcategoryId, subname, plusPurchase }
