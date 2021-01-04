import Product from "../schemas/Product.js";

const regist = async (req, res) => {
    console.log('req.body=', req.body)
    const { pro_name, price, stock, main_category, sub_category, description, main_image, detail_image } = req.body.product
    try {
        const newProduct = await new Product ({
            pro_name, price, stock, main_category, sub_category, description, main_image, detail_image
        }).save()
        console.log(newProduct)
        res.json(newProduct)
    } catch (error) {
        console.log(error)
        res.status(500).send('죄송합니다. 다시 입력해 주십시오.')
    }
}

export default  { regist }