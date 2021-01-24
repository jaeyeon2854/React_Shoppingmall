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

const Ordered = async (req, res) => {
    const { db } = req.body
    try {
        const ordered = await req.body.findOne({}, { _id: 0}).select(`${db}`)
        console.log("sub= ",ordered);
        res.json(ordered);
    } catch (error) {
        res.status(500).send('카테고리를 불러오지 못했습니다.')
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





export default { addorder, showorder, Ordered }