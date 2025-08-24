import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../Redux/action/userAction";

export default function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: null,
    password: "",
    role: "user",
  });

  const [phoneError, setPhoneError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { users } = useSelector((state) => state.user);

  // Load user for editing
  useEffect(() => {
    if (id && users.length > 0) {
      const user = users.find((u) => u._id === id);
      if (user) {
        setForm({
          name: user.name,
          email: user.email,
          phone: user.phone || "",
          address: user.address || "",
          image: null,
          password: "",
          role: user.role || "user",
        });
      }
    }
  }, [id, users]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
      setPhoneError(value.length !== 10 && value.length > 0 ? "Phone must be 10 digits" : "");
    }

    setForm({ ...form, [name]: files ? files[0] : value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("password", form.password);
  formData.append("phone", form.phone);
  formData.append("address", form.address);
if (form.image) formData.append("image", form.image); // file

fetch("http://localhost:5000/api/auth/users/register", {
  method: "POST",
  body: formData, // DO NOT set content-type
});}


  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {id ? "Edit User" : "Add User"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 sm:grid-cols-2 gap-4 border border-green-100"
      >
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="border p-3 rounded-lg" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="border p-3 rounded-lg" />
        <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="border p-3 rounded-lg" />
        {phoneError && <span className="text-red-500 text-sm">{phoneError}</span>}
        <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className="border p-3 rounded-lg" />
        <input type="file" name="image" onChange={handleChange} className="border p-3 rounded-lg" />
        <select name="role" value={form.role} onChange={handleChange} className="border p-3 rounded-lg">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <div className="relative flex items-center">
          <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-3 rounded-lg w-full" required={!id} />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3">{showPassword ? "Hide" : "Show"}</button>
        </div>
        <button type="submit" className="bg-green-600 text-white py-3 px-4 rounded-lg col-span-1 sm:col-span-2">{id ? "Update User" : "Add User"}</button>
      </form>
    </AdminLayout>
  );
}
