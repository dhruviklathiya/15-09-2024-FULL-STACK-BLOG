const { User } = require("../models/index.model")

const create_user = async (data) => {
    return await User.create(data)
}

const list_user = async () => {
    return User.find()
}

const find_by_email = async (_name) => {
    return User.findOne({ email: _name })
}

const delete_user = async (id) => {
    return User.findByIdAndDelete(id)
}

const find_by_id = async (id) => {
    return await User.findById(id)
}

const update_user = async (id, body) => {
    return User.findByIdAndUpdate(id, body)
}

const log_in = async(data) => {
    return User.findOne(data)
}

module.exports = {
    create_user,
    list_user,
    find_by_email,
    delete_user,
    find_by_id,
    update_user,
    log_in
}