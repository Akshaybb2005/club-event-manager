import React, { useState } from 'react';
import axios from 'axios';  
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate(); // ✅ Moved inside the component

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data);
      navigate('/userhome');
    } catch (error) {
      console.error('Login failed:', error.response || error);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
      
      <h1 className="text-4xl font-bold text-white mb-10">
        Club Event Manager
      </h1>

      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        
        <div className="w-1/2 bg-amber-950 text-white p-10 hidden md:flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-2">Welcome Back!</h2>
          <p className="text-lg">
            Login to manage and track your club events seamlessly.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Login</h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-4">
              <label htmlFor="email" className="w-24 text-right text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="text-black placeholder-black flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="password" className="w-24 text-right text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="text-black placeholder-black flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
