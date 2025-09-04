import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrUpdateOffer } from "../Redux/action/offerAction";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function OfferForm() {
  const { id } = useParams(); // offer id if editing
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.offer);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: [""], // array of strings
    price: "",
    discountedPrice: "",
    isActive: true,
  });

  // Load existing offer if updating
  useEffect(() => {
    if (id) {
      axios.get(`/api/offer/${id}`).then((res) => setFormData(res.data));
    }
  }, [id]);

  const handleChange = (e, index = null) => {
    const { name, value, type, checked } = e.target;
    if (name === "description" && index !== null) {
      const newDesc = [...formData.description];
      newDesc[index] = value;
      setFormData({ ...formData, description: newDesc });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const addDescriptionField = () => {
    setFormData({ ...formData, description: [...formData.description, ""] });
  };

  const removeDescriptionField = (index) => {
    const newDesc = formData.description.filter((_, i) => i !== index);
    setFormData({ ...formData, description: newDesc });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrUpdateOffer(formData, id));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        {id ? "Update Offer" : "Add New Offer"}
      </h2>

      {success && (
        <div className="mb-4 text-green-600 font-medium">
          ✅ Offer {id ? "updated" : "created"} successfully!
        </div>
      )}
      {error && (
        <div className="mb-4 text-red-600 font-medium">⚠️ {error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Subtitle */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Description Array */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          {formData.description.map((desc, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                name="description"
                value={desc}
                onChange={(e) => handleChange(e, idx)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => removeDescriptionField(idx)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addDescriptionField}
            className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            + Add Description
          </button>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Discounted Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Discounted Price</label>
          <input
            type="number"
            name="discountedPrice"
            value={formData.discountedPrice}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Active Checkbox */}
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
          {loading ? "Saving..." : id ? "Update Offer" : "Add Offer"}
        </button>
      </form>
    </div>
  );
}
