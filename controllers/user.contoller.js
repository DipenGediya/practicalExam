const { userService } = require("../services");
let jwt = require("jsonwebtoken");
const sendEmail = require("../services/email.service");

let register = async (req, res) => {
    try {
        let body = req.body;
        let duplicate = await userService.findUser(body.email)
        if (duplicate) {
            throw new Error("already register")
        }
        let user = await userService.post_user(body);
        if (user) {
            let result = await sendEmail(user.email, "for register", `welcome ${user.name}`)
        }
        res.status(201).json({
            message: "user register success",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let login = async (req, res) => {
    try {
        console.log(req.body, "for login");
        let { email, password } = req.body;

        let user = await userService.findUser(email)
        if (!user) {
            throw new Error("invalid email")
        }

        if (user.password !== password) {
            throw new Error("invaild password")
        }
        console.log(user, "user");
        let token = await jwt.sign({ user }, "dipen", { expiresIn: "1d" })

        res.status(200).json({
            message: "login success",
            user,
            token
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let get_user = async (req, res) => {
    try {
        let user = await userService.get_user()
        res.status(200).json({
            message: "get user success",
            user
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let update_password = async (req, res) => {
    try {
        let { id } = req.params
        let body = req.body

        let user = await userService.findByIdAndUpdate(id,body)

        if (user) {
            let result = await sendEmail(user.email,"updated password",user.password)
        }

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

module.exports = { register, login, get_user ,update_password}