const { addCartService } = require("../services")

let post_cart = async (req, res) => {
    try {
        let body = req.body
        let cart = await addCartService.post_cart(body)
        res.status(201).json({
            message: "successfully add to cart",
            cart
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let get_cart = async (req, res) => {
    try {
        let cart = await addCartService.get_cart()
        res.status(201).json({
            message: "successfully add to cart",
            cart
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let delete_cart = async (req, res) => {
    try {
        let { id } = req.params
        let cart = await addCartService.findByIdAndDelete(id)
        res.status(201).json({
            message: "successfully remove from cart",
            cart
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}


let update_cart = async (req, res) => {
    try {
        let { id } = req.params
        let body = req.body
        let cart = await addCartService.findByIdAndUpdate(id, body)
        let newBody = {
            id,
            ...body
        }
        res.status(201).json({
            message: "successfully updated",
            newBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

module.exports = { post_cart, get_cart, delete_cart, update_cart }