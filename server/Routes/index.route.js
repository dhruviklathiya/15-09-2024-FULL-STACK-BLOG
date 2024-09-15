const express = require("express")
const user_route = require("./user.route")

const router = express.Router()

router.use("/user", user_route)

module.exports = router