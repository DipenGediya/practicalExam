const { categoryService } = require("../services");

let post_category = async (req, res) => {
    try {
        let body = req.body;
        let category = await categoryService.post_category(body);
        res.status(201).json({
            message: "category created",
            category
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let get_category = async (req, res) => {
    try {
        let category = await categoryService.get_category()
        res.status(200).json({
            message: "get all category",
            category
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let delete_category = async (req, res) => {
    try {
        let { id } = req.params
        let category = await categoryService.findByIdAndDelete(id);
        res.status(200).json({
            message: "delete category success",
            category
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let update_category = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let category = await categoryService.findByIdAndUpdate(id, body);
        let newBody = {
            id,
            ...body
        }
        res.status(200).json({
            message: "update successfully",
            newBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

module.exports = { post_category, get_category, delete_category, update_category }