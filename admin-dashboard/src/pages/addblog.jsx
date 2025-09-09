import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrUpdateBlog } from "../Redux/action/blogAction";
import { useParams } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import axios from "axios";

export default function BlogForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.blog);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "Admin",
    isPublished: false,
    thumbnail: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/blogs/${id}`).then((res) => {
        setFormData({ ...res.data, thumbnail: null });
        setPreview(res.data.thumbnail || null);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === "thumbnail") {
      setFormData((prev) => ({ ...prev, thumbnail: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrUpdateBlog(formData, id));
  };

  return (
    <AdminLayout>
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        {id ? "Update Blog" : "Add New Blog"}
      </h2>

      {success && (
        <div className="mb-4 text-green-600 font-medium">
          ✅ Blog {id ? "updated" : "created"} successfully!
        </div>
      )}
      {error && (
        <div className="mb-4 text-red-600 font-medium">⚠️ {error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Short Excerpt
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows="2"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Thumbnail
          </label>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="mt-2 w-32 h-32 object-cover rounded-lg border"
            />
          )}
        </div>

        {/* Author */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Publish */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
            className="w-4 h-4 text-green-600"
          />
          <label className="text-gray-700">Publish immediately</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition duration-200"
        >
          {loading ? "Saving..." : id ? "Update Blog" : "Add Blog"}
        </button>
      </form>
    </div>
    </AdminLayout>
  );
}
