// Purpose: Handle all routes related to login.
const express = require("express");
const router = express.Router();

const {
    handleUserLogin,
} = require("../controllers/login");

router.route("/")
    .post(handleUserLogin);

module.exports = router;