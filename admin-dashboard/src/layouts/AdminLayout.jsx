import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { X, Menu } from "lucide-react";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-green-50 ">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:block sticky top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-lg flex flex-col">
        <Sidebar />
      </aside>

      {/* Sidebar - Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Dark overlay background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Slide-in sidebar */}
          <div className="relative w-full sm:w-80 max-w-xs bg-white shadow-lg h-full transform transition-transform duration-300 translate-x-0">
            <div className="flex justify-between items-center p-4 border-b bg-white">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden mb-4 p-2 rounded-lg bg-green-500 text-white flex items-center gap-2"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={20} />
          Menu
        </button>

        <div className="bg-white shadow-lg rounded-2xl p-6 min-h-[calc(100vh-4rem)] border border-green-100">
          {children}
        </div>
      </main>
    </div>
  );
}
