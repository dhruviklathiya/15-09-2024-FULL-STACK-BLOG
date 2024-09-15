const Joi = require("joi")
const ideal_user = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    confirm_password: Joi.string().valid(Joi.ref('password')).messages({ error: "Confirm password did not matched" }).required(),
    email: Joi.string().required()
})
const create_user = async (req, res, next) => {
    try {
        const result = ideal_user.validate(req.body)
        if (result.error) {
            throw new Error(result.error.details[0].message)
        }
        next()
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_user
}