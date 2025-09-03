import React, { useEffect, useState } from "react";
import { Users, Tag, FileText, UsersRound } from "lucide-react";
import AdminLayout from "../layouts/AdminLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [offerCount, setOfferCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);

  const [offerData, setOfferData] = useState([]);
  const [blogStatusData, setBlogStatusData] = useState([]);

  useEffect(() => {
    // Fetch Users
    fetch("/api/auth/users")
      .then((res) => res.json())
      .then((data) => setUserCount(data.length))
      .catch(console.error);

    // Fetch Offers
    fetch("/api/offers")
      .then((res) => res.json())
      .then((data) => {
        setOfferCount(data.length);
        // Prepare data for bar chart
        const statusCount = data.reduce(
          (acc, offer) => {
            offer.isActive ? (acc.active += 1) : (acc.inactive += 1);
            return acc;
          },
          { active: 0, inactive: 0 }
        );
        setOfferData([
          { name: "Active Offers", count: statusCount.active },
          { name: "Inactive Offers", count: statusCount.inactive },
        ]);
      })
      .catch(console.error);

    // Fetch Blogs
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogCount(data.length);
        const published = data.filter((b) => b.isPublished).length;
        const draft = data.length - published;
        setBlogStatusData([
          { name: "Published", value: published },
          { name: "Draft", value: draft },
        ]);
      })
      .catch(console.error);

    // Fetch Team Members
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => setTeamCount(data.length))
      .catch(console.error);
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
      title: "Offers",
      value: offerCount,
      color: "text-blue-600",
      icon: <Tag className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      title: "Blogs",
      value: blogCount,
      color: "text-purple-600",
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      bg: "bg-purple-100",
    },
    {
      title: "Team Members",
      value: teamCount,
      color: "text-emerald-600",
      icon: <UsersRound className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-100",
    },
  ];

  const COLORS = ["#8B5CF6", "#FACC15"]; // Purple for Published, Yellow for Draft

  return (
    <AdminLayout>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Admin 👋</h1>
        <p className="text-gray-500 mt-1">
          Here’s a quick overview of your platform.
        </p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className={`p-3 rounded-lg ${stat.bg}`}>{stat.icon}</div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Offers Bar Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Offers Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={offerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Blogs Pie Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Blogs Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={blogStatusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {blogStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
    </AdminLayout>
  );
}
