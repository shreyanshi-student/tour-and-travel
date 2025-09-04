import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import AdminLayout from "../layouts/AdminLayout";

// Sample fetch function (replace with your backend API call)
const fetchOffers = async () => {
    return [
        {
            _id: "1",
            title: "Kashi Darshan",
            subtitle: "Spiritual Tour",
            description: ["Boat Ride", "Temple Visit", "Local Guide"],
            price: 5000,
            discountedPrice: 4000,
            isActive: true,
        },
        {
            _id: "2",
            title: "Ganga Aarti Special",
            subtitle: "Evening Experience",
            description: ["Aarti View", "VIP Seating"],
            price: 2000,
            discountedPrice: 1500,
            isActive: false,
        },
    ];
};

export default function OffersTable() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchOffers();
            setOffers(data);
        };
        loadData();
    }, []);

    return (
        <AdminLayout>
            <div className="p-6">
                {/* Header with Add button */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-green-700">Offers List</h1>
                    <Link
                        to="/offer/add"
                        className="flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg shadow-md transition"
                    >
                        <PlusCircle size={18} /> Add New Offer
                    </Link>
                </div>

                {/* Table */}
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="p-4 border-b">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Available Offers
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-green-700 text-white text-left">
                                    <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Subtitle</th>
                                    <th className="px-4 py-3">Description</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3">Discounted Price</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {offers.map((offer, idx) => (
                                    <tr
                                        key={offer._id}
                                        className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            } hover:bg-green-50 transition`}
                                    >
                                        <td className="px-4 py-3 font-medium">{offer.title}</td>
                                        <td className="px-4 py-3">{offer.subtitle}</td>
                                        <td className="px-4 py-3">
                                            <ul className="list-disc ml-4 text-gray-600">
                                                {offer.description.map((d, i) => (
                                                    <li key={i}>{d}</li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className="px-4 py-3 text-gray-700">₹{offer.price}</td>
                                        <td className="px-4 py-3 text-green-700 font-semibold">
                                            ₹{offer.discountedPrice}
                                        </td>
                                        <td className="px-4 py-3">
                                            {offer.isActive ? (
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
                                                to={`/offer/edit/${offer._id}`} // replace offer._id with your actual id
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
