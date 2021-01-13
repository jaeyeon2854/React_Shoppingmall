import Cart from "../schemas/Cart.js";

const addcart = async (req, res) => {
    console.log(req.body)
    const { count, productId } = req.body
    try {
        const newProduct = { count, product: productId }
        await Cart.findOneAndUpdate(
            { _id: cart._id },
            { $addToSet: { products: newProduct } }
        )
        res.json(newCart)
    } catch (error) {
        console.log(error)
        res.status(500).send('죄송합니다. 다시 입력해 주십시오.')
    }
}

const showcart = async (req, res) => {
    // const {userId} = req.body
    console.log(req.cart)
    try {
        const cart = await Cart.findOne({ user: userId }).populate({
            path: 'products.product',
            model: 'Product'
        })
        res.status(200).json(cart.products)


    } catch (error) {
        console.log(error)
        res.status(500).send('쇼핑카트를 불러오지 못했습니다.')
    }
}

const deletecart = async (req, res) => {
    console.log(req.body)
    const { cartId } = req.body
    try {
        await Cart.remove({ _id: cartId })
        res.send("삭제완료")
        // res.json()
    } catch (error) {
        console.log(error)
        res.status(500).send('해당 카트를 삭제하지 못했습니다.')

    }
}
const userById = async (req, res, next, id) => {
    try {
        const cart = await Cart.findOne({ userId: id })
        if (!cart) {
            res.status(404).send("사용자를 찾을 수 없습니다.")
        }
        req.cart = cart
        next()
    } catch (error) {
        res.status(500).send("사용자 아이디 검색 실패")
    }
}


export default { addcart, showcart, deletecart, userById }