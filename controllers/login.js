"user strict";
const User = require("../models/login");
const bcrypt = require("bcrypt");

// Handle user login
async function handleUserLogin(req, res) {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ username });

        // If the user doesn't exist, return an error
        if (!user) {
            return res.status(401).send("User not found.");
        }

        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Passwords match
            res.send("Login successful.");
        } else {
            // Passwords don't match
            res.status(401).send("Incorrect password.");
        }
    } catch (error) {
        // Handle errors
        res.status(500).send('An error occurred while logging the user.');
    }
}

module.exports = {
    handleUserLogin,
}