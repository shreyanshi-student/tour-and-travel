import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/action/userAction";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get Redux state
    const userState = useSelector((state) => state.user);
    const { loading, error, user } = userState; // make sure your reducer uses 'user'

    // Redirect after login
    useEffect(() => {
        if (user) {
            navigate("/"); // redirect to dashboard
        }
    }, [user, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
        console.log(user)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
                <form onSubmit={handleLogin}>
                    <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {loading && <p className="text-green-500 mb-4">Loading...</p>}

                    {/* Email */}
                    <div className="relative w-full mb-6">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            className="peer block w-full rounded-lg border border-green-300 px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            placeholder="Email address"
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-500 text-sm transition-all duration-200 
                                   peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                                   peer-focus:-top-2 peer-focus:text-sm peer-focus:text-green-600"
                        >
                            Email address
                        </label>
                    </div>

                    {/* Password */}
                    <div className="relative w-full mb-6">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            className="peer block w-full rounded-lg border border-green-300 px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            placeholder="Password"
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-500 text-sm transition-all duration-200 
                                   peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                                   peer-focus:-top-2 peer-focus:text-sm peer-focus:text-green-600"
                        >
                            Password
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
