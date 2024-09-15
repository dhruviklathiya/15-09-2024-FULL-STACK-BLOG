const { user_service } = require("../service/index.service")
const jwt = require("jsonwebtoken")
const create_user = async (req, res) => {
    try {
        const old_user = await user_service.find_by_email(req.body.email)
        if (old_user) {
            throw new Error("User already exist")
        }
        const new_user = await user_service.create_user(req.body)
        if (!new_user) {
            throw new Error("Error in creating user")
        }
        res.status(200).json({
            success: true,
            message: "create_user Successfully",
            data: {
                username: req.body.username,
                email: req.body.email
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in create_user",
            error: error.message
        })
    }
}

const delete_user = async (req, res) => {
    try {
        const old_user = await user_service.find_by_id(req.params.id)
        if (!old_user) {
            throw new Error("User does not exist")
        }
        const abc = await user_service.delete_user(req.params.id)
        console.log(abc);
        res.status(200).json({
            success: true,
            message: "User deleted Successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in delete user",
            error: error.message
        })
    }
}

const delete_user_id_body = async (req, res) => {
    try {
        const old_user = await user_service.find_by_id(req.body.id)
        if (!old_user) {
            throw new Error("User does not exist")
        }
        const abc = await user_service.delete_user(req.body.id)
        console.log(abc);
        res.status(200).json({
            success: true,
            message: "User deleted Successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in delete user",
            error: error.message
        })
    }
}

const update_user = async (req, res) => {
    try {
        const old_user = await user_service.find_by_id(req.params.id)
        if (!old_user) {
            throw new Error("User does not exist")
        }
        const update_user = await user_service.update_user(req.params.id, req.body)
        if (!update_user) {
            throw new Error("User does not updated something went wrong")
        }
        const data = await user_service.find_by_id(req.params.id)
        res.status(200).json({
            success: true,
            message: "User updated Successfully",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in list_user",
            error: error.message
        })
    }
}

const list_user = async (req, res) => {
    try {
        const user_list = await user_service.list_user()
        if (!user_list) {
            throw new Error("No data found")
        }
        res.status(200).json({
            success: true,
            message: "list_user Successfully",
            data: user_list,
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in list_user",
            error: error.message
        })
    }
}

const log_in = async (req, res) => {
    try {
        const old_user = await user_service.find_by_email(req.body.email)
        if (!old_user) {
            throw new Error("User does not exist by this email please signup first")
        }
        const verified = await user_service.log_in(req.body)
        if (!verified) {
            throw new Error("Username or password might be wrong")
        }
        const token = jwt.sign({ ...req.body, role: "USER" }, "MYSECRET", { expiresIn: '1h' })
        // res.cookie("auth_token", token)
        // res.cookie("role", "USER")
        res.status(200).cookie("auth_token", token).json({
            success: true,
            message: "Log-in successfully",
            token
        })
    } catch (error) {
        res.status(401).json({
            message: "Error in list_user",
            error: error.message
        })
    }
}

module.exports = {
    create_user,
    list_user,
    delete_user,
    delete_user_id_body,
    update_user,
    log_in
}