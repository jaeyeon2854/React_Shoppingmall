import Order from "../schemas/Order.js";

const addorder = async (req, res) => {
    const { userId, products, receiverInfo, total } = req.body
    try {
        const newOrder = await new Order({
            userId, products, receiverInfo, total
        }).save()
        res.status(200).send('Order DB에 저장 완료')
    } catch (error) {
        console.log(error)
        res.status(500).send('Order DB에 저장 실패')
    }
}

const showorder = async (req, res) => {
    try {
        const order = await Order.findOne({ userId: req.id }).populate({
            path: 'products.productId',
            model: 'Product'
        })
        res.status(200).json(order.products)
    } catch (error) {
        console.log(error)
        res.status(500).send('쇼핑카트를 불러오지 못했습니다.')
    }
}





export default { addorder, showorder }