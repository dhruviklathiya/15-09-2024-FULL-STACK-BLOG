const express = require("express")
const { user_controller } = require("../controller/index.controller")
const { user_Validation } = require("../validation/index.validation")
const { user_auth, admin_auth } = require("../middleware/auth")

const router = express.Router()

router.post(
    "/create",
    user_Validation.create_user,
    user_controller.create_user
)

router.post(
    "/login",
    user_controller.log_in
)

router.get(
    "/list",
    user_auth,
    user_controller.list_user
)

router.delete(
    "/delete/:id",
    user_controller.delete_user
)

router.put(
    "/update/:id",
    user_controller.update_user
)

router.delete(
    "/delete",
    user_controller.delete_user_id_body
)

module.exports = router