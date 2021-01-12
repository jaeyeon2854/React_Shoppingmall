import Product from "../schemas/Product.js";
import multer from 'multer';

const upload = multer({ dest: 'uploads/' })

const imageUpload = upload.fields([
    { name: 'main_image' },
    { name: 'detail_image' }
  ])

const regist = async (req, res) => {
    try {
        const { pro_name, price, stock, main_category, sub_category, description } = req.body
        const main_img = req.files['main_image'][0]
        const detail_img = req.files['detail_image']
        const main_imgUrl = main_img.filename
        const detail_imgUrls = []
        detail_img.forEach(file => {
            detail_imgUrls.push(file.filename)
        })
        const newProduct = await new Product({
            pro_name, price, stock, main_category, sub_category, description, main_imgUrl, detail_imgUrls
        }).save()
        console.log(newProduct)
        res.json(newProduct)
    } catch (error) {
        console.log(error)
        res.status(500).send('제품 정보 등록에 실패하였습니다. 다시 진행해 주십시오.')
    }
}

export default { imageUpload, regist }