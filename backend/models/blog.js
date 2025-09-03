const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true }, // short summary for table
    content: { type: String, required: true }, // can contain HTML with images
    author: { type: String, default: "Admin" },
    publishedDate: { type: Date, default: Date.now },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
