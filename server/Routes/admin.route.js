const express = require("express")
const { admin_Validation } = require("../validation/index.validation")
const { admin_controller } = require("../controller/index.controller")

const router = express.Router()

router.post(
    "/create",
    admin_Validation.create_admin,
    admin_controller.create_admin
)

router.get(
    "/list",
    //todo
)

module.exports = router