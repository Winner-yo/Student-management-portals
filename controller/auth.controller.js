export const signUp = async (req, res, next) => {
    try {
        
    } catch (error) {
        
        next(error)
    }
}
export const signIn = async (req, res, next) => {
    try {
        
    } catch (error) {
        
        next(error)
    }
}
export const signOut = async (req, res, next) => {
    try {
        
    } catch (error) {
        
        next(error)
    }
}















// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { User } = require('../models/user.model');

// // auth.controller.js


// // Register a new user
// exports.register = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user
//         const newUser = await User.create({ username, password: hashedPassword });

//         res.status(201).json({ message: 'User registered successfully', user: newUser });
//     } catch (error) {
//         res.status(500).json({ message: 'Error registering user', error: error.message });
//     }
// };

// // Login a user
// exports.login = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Find the user by username
//         const user = await User.findOne({ where: { username } });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Compare passwords
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         // Generate a JWT token
//         const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
//             expiresIn: '1h',
//         });

//         res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//         res.status(500).json({ message: 'Error logging in', error: error.message });
//     }
// };

// // Logout a user
// exports.logout = (req, res) => {
//     // Invalidate the token on the client side
//     res.status(200).json({ message: 'Logout successful' });
// };