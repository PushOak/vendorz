const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
    res.send("Register a New User!");
});

module.exports = {
    registerUser,
};