const { subcategoryService } = require("../services");

let post_subcategory = async (req, res) => {
    try {
        let body = req.body;

        let subcategory = await subcategoryService.post_subcategory(body)
        res.status(201).json({
            message: "subcategory create successfully",
            subcategory
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let get_subcategory = async (req, res) => {
    try {
        let subcategory = await subcategoryService.get_subcategory();

        res.status(200).json({
            message: "get subcategory successfully",
            subcategory
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let delete_subcategory = async (req, res) => {
    try {
        let { id } = req.params;
        let subcategory = await subcategoryService.findByIdAndDelete(id)
        res.status(200).json({
            message: "delete successfully",
            subcategory
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let update_subcategory = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let subcategory = await subcategoryService.findByIdAndUpdate(id, body);

        let newBody = {
            id,
            ...body
        }

        res.status(200).json({
            message: "update successfully",
            newBody,
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

module.exports = { post_subcategory, get_subcategory, delete_subcategory ,update_subcategory}