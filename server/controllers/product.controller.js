import Product from "../schemas/Product.js";
import multer from 'multer';


const upload = multer({ dest: 'uploads/'});

const fileUpload = upload.fields([
    { name: 'main_image', maxCount: 1 },
    { name: 'detail_image', maxCount: 1 }
]) 

const regist = async (req, res) => {
    console.log('req.body=', req.body)
    const { pro_name, price, stock, main_category, sub_category, description } = req.body
    console.log(req.files)
    const main_image = req.files['main_image'][0].filename
    console.log(main_image)
    const detail_image = req.files['detail_image'][0].filename
    // const { main_image, detail_image} = req.files
    try {
        const newProduct = await new Product ({
            pro_name, price, stock, main_category, sub_category, description, main_image, detail_image
        }).save()
        res.json(newProduct)
    } catch (error) {
        console.log(error)
        res.status(500).send('죄송합니다. 다시 입력해 주십시오.')
    }
}


const getProduct = (req, res) => {
    res.json(req.body)
}

export default { regist, fileUpload , getProduct}