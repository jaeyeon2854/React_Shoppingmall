import Cart from "../schemas/Cart.js";
import Product from '../schemas/Product.js'

const cart = async (req, res) => {
    const { userId, productObjectId, color, size, count } = req.body
    // console.log('req.body=', req.body)
    // const {userId, productObjectId, }
    // const { user, pro_name, price, main_image } = req.body
    // color, size, count, productObjectId(productlist에서 props), userId(로컬)
    try {
        const product = await Product.find({ _id: productObjectId })
        if (product) {
            // console.log(product)
            const { pro_name, price, main_image } = product[0]
            const products = { productObjectId, color, size, count, pro_name, price, main_image }
            // console.log(products)
            const newCart = await new Cart({
                userId, products
            }).save()
            console.log(newCart)
            res.json(newCart)

        }
        // const newCart = await new Cart({
        //     user, pro_name, price, stock, main_category, sub_category, main_image
        // }).save()
        // const asdf = await Cart.find({ user })
        // console.log(newCart)
        // res.json(newCart)
    } catch (error) {
        console.log(error)
        res.status(500).send('죄송합니다. 다시 입력해 주십시오.')
    }

    //     try {
    //         const user = await 
    //     User.findById(id)
    //     if (!user) {
    //       console.log(error)
    //       res.status(404).send('사용자를 찾을 수 없습니다')
    //     }
    //     req.profile = user
    //     next()
    //   } catch (error) {
    //     console.log(error)
    //     res.status(500).send('사용자 아이디 실패')
    //   }
}

export default { cart }