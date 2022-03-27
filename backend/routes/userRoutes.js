const express = require("express");
const { registerUser } = require("../controllers/userControllers")
const router = express.Router();

console.log('router :>> ', router);
router.route('/').post(registerUser)
// router.route('/login').get(authUser);

module.exports = router;