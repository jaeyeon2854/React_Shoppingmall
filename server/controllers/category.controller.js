import Category from "../schemas/Category.js";

const getCategory = async (req, res) => {
    console.log("dsadd=")
    try {
        const category = await Category.find({}, {_id: 0})
        res.json(category)
    } catch (error) {
        console.log(error)
        res.status(500).send('카테고리 검색 실패')
    }
}

const getSubCategory=(req,res)=>{
    
}

const getsubId=(req,res,next,sub)=>{
    // const subcategory = await category.find({})
    console.log('sub=',sub)

    next()
}


export default { getCategory , getsubId, getSubCategory}