import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await fetch("/api/auth/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await fetch(`/api/auth/users/${id}`, { method: "DELETE" });
      fetchUsers();
    }
  };

  const handleEdit = (id) => {
    navigate(`/users/edit/${id}`);
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>

      <div className="mb-4">
        <button
          onClick={() => navigate("/users/add")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Add User
        </button>
      </div>

      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-green-100">
        <table className="w-full text-left">
          <thead className="bg-green-50">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, idx) => (
                <tr
                  key={user._id}
                  className={`border-t hover:bg-green-50 transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-green-50/40"
                  }`}
                >
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.phone}</td>
                  <td className="p-4 flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(user._id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg flex items-center gap-1"
                    >
                      <Edit size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg flex items-center gap-1"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan="4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
