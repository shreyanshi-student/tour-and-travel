const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Add Admin
exports.addAdmin = async (req, res) => {
  const { name, email, password, phone, address, image } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (admin) return res.status(400).json({ message: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    admin = await Admin.create({ name, email, password: hashedPassword, phone, address, image, role: 'admin' });

    const token = jwt.sign({ id: admin._id, email: admin.email, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ message: 'Admin added', admin, token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin login using .env
exports.loginAdmin = async (req, res) => {
   
  const { email, password } = req.body;
//  console.log(process.env.ADMIN_EMAIL);
//   console.log(process.env.ADMIN_PASSWORD)
  try {
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

      const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
    //   console.log(token)
      return res.json({ admin: { email }, token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// CRUD
exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    const updates = req.body;
    if (updates.password) updates.password = await bcrypt.hash(updates.password, 10);
    const admin = await Admin.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.json({ message: 'Admin updated', admin });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.json({ message: 'Admin deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
