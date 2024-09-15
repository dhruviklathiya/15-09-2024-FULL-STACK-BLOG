const { Admin } = require("../models/index.model")

const find_by_email = (data) => {
    return Admin.findOne({ email: data })
}

const create_admin = (data) => {
    return Admin.create(data)
}

module.exports = {
    find_by_email,
    create_admin
}