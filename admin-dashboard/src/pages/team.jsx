import React, { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

// Sample fetch function (replace with API call)
const fetchTeamMembers = async () => {
    return [
        {
            _id: "1",
            name: "Amit Sharma",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            designation: "Tour Guide",
            isActive: true,
        },
        {
            _id: "2",
            name: "Priya Verma",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            designation: "Travel Consultant",
            isActive: false,
        },
    ];
};

export default function TeamMembersTable() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchTeamMembers();
            setMembers(data);
        };
        loadData();
    }, []);

    return (
        <AdminLayout>
            <div className="p-6">
                {/* Header with Add button */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-green-700">Team Members</h1>
                    <Link
                        to="/team/add"
                        className="flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg shadow-md transition"
                    >
                        <PlusCircle size={18} /> Add New Member
                    </Link>
                </div>

                {/* Members Table */}
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="p-4 border-b">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Our Team
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-green-700 text-white text-left">
                                    <th className="px-4 py-3">Image</th>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Designation</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((member, idx) => (
                                    <tr
                                        key={member._id}
                                        className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            } hover:bg-green-50 transition`}
                                    >
                                        <td className="px-4 py-3">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-12 h-12 rounded-full object-cover border"
                                            />
                                        </td>
                                        <td className="px-4 py-3 font-medium">{member.name}</td>
                                        <td className="px-4 py-3 text-gray-700">{member.designation}</td>
                                        <td className="px-4 py-3">
                                            {member.isActive ? (
                                                <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-600 rounded-full">
                                                    Inactive
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 space-x-2">
                                            <Link
                                                to={`/offer/edit/${member._id}`} // replace offer._id with your actual id
                                                className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                                            >
                                                Edit
                                            </Link>
                                            <button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-700 hover:bg-red-200">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
