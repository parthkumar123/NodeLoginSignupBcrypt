// Purpose: Handle all routes related to singup.
const express = require("express");
const router = express.Router();

const {
    handleUserSingup,
} = require("../controllers/signup");

router.route("/")
    .post(handleUserSingup);

module.exports = router;