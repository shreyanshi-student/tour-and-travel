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
      <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Login2Kashi</h2>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-semibold">Login2Kashi</span> is your trusted travel partner for
          exploring the spiritual city of Kashi (Varanasi). We provide complete arrangements for
          visitors, including guided tours, Ganga Aarti experiences, temple visits, and
          customized packages for pilgrims and travelers alike.
        </p>
        <p className="text-gray-600 mt-3 leading-relaxed">
          Our mission is to make your journey to Kashi seamless and memorable by offering
          authentic cultural experiences, dedicated customer support, and affordable packages.
          With <span className="font-semibold">Login2Kashi</span>, you can experience the true
          essence of spirituality, tradition, and the timeless charm of Varanasi.
        </p>
      </section>

    </AdminLayout>
  );
}
