"user strict";
const User = require("../models/login");
const bcrypt = require("bcrypt");

// Handle user signup
async function handleUserSingup(req, res) {
    try {
        const { username, password } = req.body;

        // Hash the password before storing it
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user document
        const user = new User({ username, password: hashedPassword });

        // Save the user to the database
        await user.save();

        // Send a success message
        res.status(201).send('User registered successfully.');
    } catch (error) {
        // Handle the duplicate key error
        if (error.code === 11000) {
            return res.status(409).send('Username already exists.');
        }
        // Handle other errors
        res.status(500).send('An error occurred while registering the user.');
    }
}

module.exports = {
    handleUserSingup,
}