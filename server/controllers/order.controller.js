import mongoose from 'mongoose';
import Order from "../schemas/Order.js";
import User from "../schemas/User.js";
import Product from "../schemas/Product.js";

const addorder = async (req, res) => {
    const { userId, products, receiverInfo, total } = req.body
    try {
        const newOrder = await new Order({ userId, products, receiverInfo, total }).save()
        res.status(200).send('Order DB에 저장 완료')
    } catch (error) {
        console.log(error)
        res.status(500).send('Order DB에 저장 실패')
    }
}

const Ordered = async (req, res) => {
    const { db } = req.body
    try {
        const ordered = await req.body.findOne({}, { _id: 0 }).select(`${db}`)
        res.json(ordered);
    } catch (error) {
        res.status(500).send('카테고리를 불러오지 못했습니다.')
    }
}

const showorder = async (req, res) => {
    try {
        const order = await Order.find({ userId: req.userId }).sort({ _id: -1 }).limit(1).populate({
            path: 'products.productId',
            model: 'Product'
        })
        res.status(200).json(order[0])
    } catch (error) {
        console.log(error)
        res.status(500).send('쇼핑카트를 불러오지 못했습니다.')
    }
}

const orderById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).send('사용자를 찾을 수 없습니다')
        }
        req.userId = user
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send('사용자 아이디 검색 실패')
    }
}

const recommendPro = async (req, res) => {
    const productId = req.query.products
    try {
        const recommend = await Order.aggregate([
            {
                $match: {
                    'products.productId': mongoose.Types.ObjectId(productId)
                }
            },
            { "$unwind": "$products" },
            {
                $group: {
                    _id: "$products.productId",
                    count: { $sum: 1 }
                }
            }
        ])
        console.log('recommend=', recommend)
        const filteredRecommend = recommend.filter((el) => String(el._id) !== String(productId))
        console.log('filtering=', filteredRecommend)
        filteredRecommend.sort(function (a, b) {
            if (a.count > b.count) {
                return -1;
            }
            if (a.count < b.count) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
        console.log('sort=',filteredRecommend)
        const finalrecommend= filteredRecommend.slice(0, 4)
        const array = finalrecommend.map(async (el) => {
            const aa = await Product.findById(el._id)
            return aa
        })
        const bb  = await Promise.all(array)
        res.json(bb)
    } catch (error) {
        console.log('error in order ', error)
    }
}

export default { addorder, showorder, orderById, Ordered, recommendPro }