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
    const token = generateToken(user._id);

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

// Login existing user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Validate request
    if (!email || !password) {
        res.status(400);
        throw new Error("Please add email and password.");
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        res.status(400);
        throw new Error("User does not exist!");
    }

    // User exists, now check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    // Generate token
    const token = generateToken(user._id);
    if (user && passwordIsCorrect) {
        const newUser = await User.findOne({ email }).select("-password");
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),
            // secure: true,
            // sameSite: none, // for backend and frontend set to true?
        });

        // Send user data to frontend
        res.status(201).json(newUser);
    } else {
        res.status(400);
        throw new Error("Invalid email or password!");
    }
});

// Logout user
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        // secure: true,
        // sameSite: none, // for backend and frontend set to true?
    });

    res.status(200).json({ message: "User logged out successfully!" });
});

// Get user
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400);
        throw new Error("User not found!");
    }
});

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUser,
};