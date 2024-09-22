let jwt = require("jsonwebtoken");

let verifyToken = (req, res, next) => {
    try {
        let token = req.headers["authorization"];

        if (!token) {
            throw new Error("unauthorize")
        }

        const decodedToken = token.split(" ")[1];

        jwt.verify(decodedToken, "dipen", (error, decoded) => {
            if (error) {
                throw new Error("wrong token")
            }
            req.user = decoded.user
            next();
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let isAdmin = (req, res, next) => {
    try {
        if (req.user && req.user.role === "admin") {
            next();
        }
        else {
            throw new Error("you have no access")
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { verifyToken, isAdmin }