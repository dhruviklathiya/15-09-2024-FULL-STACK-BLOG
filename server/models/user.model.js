const mongoose = require("mongoose")

const user_schema = new mongoose.Schema(
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

const user = mongoose.model("User", user_schema)
module.exports = user