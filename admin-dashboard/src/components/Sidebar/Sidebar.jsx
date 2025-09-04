import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  LogOut,
  Tag,
  UsersRound,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/action/userAction";
import { useState } from "react";

export default function Sidebar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
      pathname === path
        ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md scale-[1.02]"
        : "text-gray-600 hover:bg-green-50 hover:text-green-600"
    }`;

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-white border-r border-gray-200 shadow-xl flex flex-col min-h-screen transition-all duration-300`}
    >
      {/* Logo / Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-700 to-green-500 text-white flex items-center justify-between">
        {!collapsed && (
          <div>
            <h2 className="text-2xl font-bold">Login2Kashi</h2>
            <p className="text-sm opacity-90">Admin Dashboard</p>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <p
          className={`${
            collapsed ? "hidden" : ""
          } text-xs uppercase text-gray-400 px-2`}
        >
          Main
        </p>
        <Link to="/" className={linkClass("/")}>
          <LayoutDashboard size={20} />
          {!collapsed && "Dashboard"}
        </Link>

        <p
          className={`${
            collapsed ? "hidden" : ""
          } text-xs uppercase text-gray-400 px-2 mt-4`}
        >
          Management
        </p>
        <Link to="/offers" className={linkClass("/offers")}>
          <Tag size={20} />
          {!collapsed && "Offers"}
        </Link>
        <Link to="/team" className={linkClass("/team")}>
          <UsersRound size={20} />
          {!collapsed && "Team Members"}
        </Link>
        <Link to="/blogs" className={linkClass("/blogs")}>
          <FileText size={20} />
          {!collapsed && "Blogs"}
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
        >
          <LogOut size={20} />
          {!collapsed && "Logout"}
        </button>
      </div>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200 text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-600">Login2Kashi</span>
          <br />
          All Rights Reserved
        </div>
      )}
    </div>
  );
}
