const { admin_service } = require("../service/index.service")

const create_admin = async (req, res) => {
    try {
        const old_admin = await admin_service.find_by_email(req.body.email)
        if (old_admin) {
            throw new Error("Admin already exist by this email")
        }
        const admin = await admin_service.create_admin(req.body)
        if (!admin) {
            throw new Error("Something went wrong creating admin")
        }
        res.status(200).json({
            success: false,
            message: "Admin created successfully",
            data: {
                username: req.body.username,
                email: req.body.email
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_admin
}