const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    })
};

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please fill in the required fields.");
    };

    if (password.length < 6) {
        res.status(400);
        throw new Error("Password must be up to 6 charaters.");
    };

    // Check if the user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error("This email has already been registered!");
    };

    // Create new user
    const user = await User.create({
        name,
        email,
        password,
    });

    // Generate token
    const token = generateToken(user._id)

    if (user) {
        const { _id, name, email, role } = user;

        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),
            // secure: true,
            // sameSite: none, // for backend and frontend set to true?
        });

        // Send user data to frontend
        res.status(201).json({
            _id,
            name,
            email,
            role,
            token,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data!");
    }

    res.send("Register a New User!");
});

module.exports = {
    registerUser,
};