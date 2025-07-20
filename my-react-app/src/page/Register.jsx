import React, { useState } from 'react';
import axios from 'axios';  
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate(); // ✅ Hook inside the component

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        email,
        password,
      });
      console.log(response.data);
      navigate('/userhome'); // ✅ Navigate after successful register
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
      <h1 className="text-4xl font-bold text-white mb-10">Register - Club Event Manager</h1>

      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        <div className="w-1/2 bg-amber-950 text-white p-10 hidden md:flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-2">Join the Club!</h2>
          <p className="text-lg">Create your account and start managing events with ease.</p>
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Register</h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Username */}
            <div className="flex items-center space-x-4">
              <label htmlFor="username" className="w-28 text-right text-gray-700 font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-black placeholder-black flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <label htmlFor="email" className="w-28 text-right text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-black placeholder-black flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password */}
            <div className="flex items-center space-x-4">
              <label htmlFor="password" className="w-28 text-right text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-black placeholder-black flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
