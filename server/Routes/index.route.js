const express = require("express")
const user_route = require("./user.route")
const admin_route = require("./admin.route")

const router = express.Router()

router.use("/user", user_route)
router.use("/admin", admin_route)

module.exports = router