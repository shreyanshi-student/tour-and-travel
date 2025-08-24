import React, { useEffect, useState } from "react";
import { Users, Activity, Server } from "lucide-react";
import AdminLayout from "../layouts/AdminLayout";

export default function Dashboard() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetch("/api/auth/users")
      .then((res) => res.json())
      .then((data) => setUserCount(data.length))
      .catch((err) => console.error(err));
  }, []);

  const stats = [
    {
      title: "Total Users",
      value: userCount,
      color: "text-green-600",
      icon: <Users className="w-8 h-8 text-green-600" />,
      bg: "bg-green-100",
    },
    {
      title: "Active Sessions",
      value: 14,
      color: "text-emerald-600",
      icon: <Activity className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-100",
    },
    {
      title: "Server Status",
      value: "Online",
      color: "text-lime-700",
      icon: <Server className="w-8 h-8 text-lime-700" />,
      bg: "bg-lime-100",
    },
  ];

  return (
    <AdminLayout>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, Admin 👋
        </h1>
        <p className="text-gray-500 mt-1">
          Here’s a quick overview of your system’s performance.
        </p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300 border border-green-100"
          >
            <div className={`p-3 rounded-lg ${stat.bg}`}>{stat.icon}</div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                {stat.title}
              </h3>
              <p className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </section>
    </AdminLayout>
  );
}
