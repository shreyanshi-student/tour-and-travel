const {User} = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

// ==================== Register User ====================
exports.registerUser = async (req, res) => {

  const { name, email, password, phone, address } = req.body;

  const imageFile = req.file; // multer adds file in req.file
// console.log(req.file)
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email, and password are required" });
  }

  try {
    // console.log(email)
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);

    // const hashedPassword = await bcrypt.hash(password);

    user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      role: "user", // default
    });
    console.log(user)
    // Save image only after successful user creation
    if (imageFile) {
      console.log('hghgh');
      const uploadFolder = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder, { recursive: true });

const filename = Date.now() + path.extname(imageFile.originalname);
const filepath = path.join(uploadFolder, filename);
fs.writeFileSync(filepath, imageFile.buffer);
user.image = filename;
await user.save();

      // const uploadFolder = path.join(__dirname, "../uploads");
      // if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder, { recursive: true });

      // const filename = Date.now() + path.extname(imageFile.originalname);
      // const filepath = path.join(uploadFolder, filename);

      // fs.writeFileSync(filepath, imageFile.buffer); // write file from memory
      // user.image = filename;
      // await user.save(); // update user with image path
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({ message: "User registered successfully", token, user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


// ==================== User Login ====================
// require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check against .env credentials
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      // Create a token for admin
      const token = jwt.sign(
        { id: 'admin-id', email, role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      // Return admin info
      return res.json({
        message: 'Admin login successful',
        token,
        admin: { email, role: 'admin', name: 'Admin' },
      });
    }

    // Otherwise, invalid credentials
    return res.status(401).json({ message: 'Invalid email or password' });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: 'Server error' });
  }
};


// ==================== Get All Users ====================
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// ==================== Get Single User ====================
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// ==================== Update User ====================
// Update user
exports.updateUser = async (req, res) => {
  try {
    const updates = req.body;
    const imageFile = req.file; // multer file

    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Handle image replacement
    if (imageFile) {
      // Remove old image if exists
      if (user.image) {
        const oldPath = path.join(__dirname, "../uploads", user.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      // Save new image
      const uploadFolder = path.join(__dirname, "../uploads");
      if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder, { recursive: true });

      const filename = Date.now() + path.extname(imageFile.originalname);
      const filepath = path.join(uploadFolder, filename);
      fs.writeFileSync(filepath, imageFile.buffer);

      updates.image = filename;
    }

    Object.assign(user, updates);
    await user.save();

    res.json({ message: "User updated successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ==================== Delete User ====================
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Delete image from folder if exists
    if (user.image) {
      const imgPath = path.join(__dirname, "../uploads", user.image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    await user.remove();
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

