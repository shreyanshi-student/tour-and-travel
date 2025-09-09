import React, { useEffect, useState } from "react";
import { PlusCircle, Eye } from "lucide-react";
import AdminLayout from "../layouts/AdminLayout";
import { Link } from "react-router-dom";

const fetchBlogs = async () => {
    return [
        {
            _id: "1",
            title: "Spiritual Journey",
            excerpt: "A glimpse into Kashi...",
            content: `<p>Full blog with image:</p><img src="https://via.placeholder.com/150" alt="Kashi"/>`,
            author: "Admin",
            publishedDate: "2025-09-01",
            isPublished: true,
        },
        {
            _id: "2",
            title: "Top Temples",
            excerpt: "Discover top temples...",
            content: `<p>Full blog content with image:</p><img src="https://via.placeholder.com/100" alt="Temple"/>`,
            author: "Shreyanshi",
            publishedDate: "2025-08-20",
            isPublished: false,
        },
    ];
};

export default function BlogsTable() {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchBlogs();
            setBlogs(data);
        };
        loadData();
    }, []);

    return (
        <AdminLayout>
            <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-green-700">Blogs</h1>
                    <Link
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-700 hover:bg-green-800 text-white font-medium transition"
                         to="/blog/add"
                    >
                        <PlusCircle size={18} /> Add New Blog
                    </Link>
                </div>

                {/* Blogs Table */}
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-green-700 text-white text-left">
                                    <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Excerpt</th>
                                    <th className="px-4 py-3">Author</th>
                                    <th className="px-4 py-3">Published Date</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map((blog, idx) => (
                                    <tr
                                        key={blog._id}
                                        className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            } hover:bg-green-50 transition`}
                                    >
                                        <td className="px-4 py-3 font-medium">{blog.title}</td>
                                        <td className="px-4 py-3 text-gray-600">{blog.excerpt}</td>
                                        <td className="px-4 py-3">{blog.author}</td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {new Date(blog.publishedDate).toLocaleDateString()}
                                        </td>
                                        <td className="px-4 py-3">
                                            {blog.isPublished ? (
                                                <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                                                    Published
                                                </span>
                                            ) : (
                                                <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-600 rounded-full">
                                                    Draft
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 space-x-2">
                                            <button
                                                className="px-3 py-1 text-sm rounded-lg border border-blue-600 text-blue-700 hover:bg-blue-50 flex items-center gap-1"
                                                onClick={() => setSelectedBlog(blog)}
                                            >
                                                <Eye size={14} /> View
                                            </button>
                                            <Link
                                                to={`/offer/edit/${blog._id}`} // replace offer._id with your actual id
                                                className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                                            >
                                                Edit
                                            </Link>
                                            <button className="px-3 py-1 text-sm rounded-lg border border-red-600 text-red-600 hover:bg-red-50">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Modal */}
                {selectedBlog && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
                            <button
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                                onClick={() => setSelectedBlog(null)}
                            >
                                ✕
                            </button>
                            <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
                            <div
                                className="prose max-w-full"
                                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
