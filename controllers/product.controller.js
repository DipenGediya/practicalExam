const { productService } = require("../services");
const uploadImage = require("../services/cloudinary.service");

let post_product = async (req, res) => {
    try {
        let body = req.body;
        let { path, originalname } = req.file;
        let cloud = await uploadImage(path, originalname)
        let newBody = {
            ...body,
            image: cloud.url
        }
        let product = await productService.post_product(newBody)
        res.status(201).json({
            message: "product created successfully",
            product
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let get_product = async (req, res) => {
    try {
        let product = await productService.get_product()
        res.status(200).json({
            message: "product get successfully",
            product
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let delete_product = async (req, res) => {
    try {
        let { id } = req.params;

        let product = await productService.findByIdAndDelete(id)
        res.status(200).json({
            message: "delete successfully",
            product
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let update_product = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let { path, originalname } = req.file

        let cloud = await uploadImage(path, originalname)

        let newBody = {
            ...body,
            image: cloud.url
        }
        let secondBody = {
            id,
            ...newBody
        }
        let product = await productService.findByIdAndUpdate(id, newBody);
        res.status(200).json({
            message: "update successfully",
            secondBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
module.exports = { post_product, get_product, delete_product, update_product }