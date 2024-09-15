const { User } = require("../models/index.model")
const jwt = require("jsonwebtoken")

const user_auth = async (req, res, next) => {
    try {
        const token = req.cookies.auth_token
        if (!token || jwt.verify(token, "MYSECRET").role != "USER") {
            throw new Error("Only login user have access to this route")
        }
        // EASY WAY
        // const data = jwt.verify(token, "MYSECRET")
        // const role = jwt.verify(req.cookies.role, "MYSECRET")
        // if (data.role != "USER") {
        //     throw new Error("Only login user have access to this route")
        // }
        next()
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

const admin_auth = async (req, res, next) => {
    try {
        const token = req.cookies.auth_token
        const data = jwt.verify(token, "MYSECRET")
        // const role = jwt.verify(req.cookies.role, "MYSECRET")
        if (data.role != "ADMIN") {
            throw new Error("Only admin have access to this route")
        }
        next()
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

// todo
// const role_auth = (role) => async(req,res,next) => {
//     try {
//         const token = req.cookies.auth_token
//         if (!token || jwt.verify(token, "MYSECRET").role != role) {
//             throw new Error(`Only login ${role} have access to this route`)
//         }
//     } catch (error) {
//         res.status(401).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

module.exports = { user_auth, admin_auth }