import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/action/userAction";



export default function Sidebar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
      pathname === path
        ? "bg-green-700 text-white shadow-md"
        : "text-gray-700 hover:bg-green-100 hover:text-green-700"
    }`;

  const handleLogout = () => {
    dispatch(logoutUser()); // clear redux + localStorage
    navigate("/login"); // redirect to login
  };

  return (
    <div className="w-full md:w-64 bg-white border-r border-gray-200 shadow-lg flex flex-col min-h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-green-700">Admin Panel</h2>
        <p className="text-sm text-gray-500">Manage your platform</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <Link to="/" className={linkClass("/")}>
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link to="/users" className={linkClass("/users")}>
          <Users size={20} />
          Users
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-red-100 hover:text-red-600 transition-all duration-200"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company
      </div>
    </div>
  );
}
