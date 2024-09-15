const { default: mongoose } = require("mongoose");

const admin_schema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        password: {
            type: String,
            trim: true
        },
        confirm_password: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const admin = mongoose.model("Admin", admin_schema)

module.exports = admin