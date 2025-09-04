import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrUpdateTeam } from "../Redux/action/teamAction";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TeamForm() {
  const { id } = useParams(); // team member id if updating
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.team);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    socialLinks: [""] , // array of URLs
    isActive: true,
    profileImage: null,
  });

  const [preview, setPreview] = useState(null);

  // Load existing team member if updating
  useEffect(() => {
    if (id) {
      axios.get(`/api/team/${id}`).then((res) => {
        setFormData({ ...res.data, profileImage: null });
        setPreview(res.data.profileImage || null);
      });
    }
  }, [id]);

  const handleChange = (e, index = null) => {
    const { name, value, type, checked, files } = e.target;
    if (name === "socialLinks" && index !== null) {
      const links = [...formData.socialLinks];
      links[index] = value;
      setFormData({ ...formData, socialLinks: links });
    } else if (name === "profileImage") {
      setFormData({ ...formData, profileImage: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }
  };

  const addSocialLink = () => {
    setFormData({ ...formData, socialLinks: [...formData.socialLinks, ""] });
  };

  const removeSocialLink = (index) => {
    const links = formData.socialLinks.filter((_, i) => i !== index);
    setFormData({ ...formData, socialLinks: links });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrUpdateTeam(formData, id));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        {id ? "Update Team Member" : "Add New Team Member"}
      </h2>

      {success && (
        <div className="mb-4 text-green-600 font-medium">
          ✅ Team member {id ? "updated" : "created"} successfully!
        </div>
      )}
      {error && (
        <div className="mb-4 text-red-600 font-medium">⚠️ {error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Social Links */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Social Links</label>
          {formData.socialLinks.map((link, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                name="socialLinks"
                value={link}
                onChange={(e) => handleChange(e, idx)}
                placeholder="https://"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => removeSocialLink(idx)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSocialLink}
            className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            + Add Link
          </button>
        </div>

        {/* Profile Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Profile Image</label>
          <input
            type="file"
            name="profileImage"
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

        {/* Active */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
            className="w-4 h-4 text-green-600"
          />
          <label className="text-gray-700">Active</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition duration-200"
        >
          {loading ? "Saving..." : id ? "Update Member" : "Add Member"}
        </button>
      </form>
    </div>
  );
}
