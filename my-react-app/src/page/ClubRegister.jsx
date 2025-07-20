import React, { useState } from 'react';
import axios from 'axios';  
import { useNavigate } from "react-router-dom";

export const ClubRegister = () => {
  const navigate = useNavigate(); // ✅ Must be inside the component

  const [clubName, setClubName] = useState('');   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');   

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/club-register', {
        clubName,
        email,
        password,
      });
      console.log(response.data);
      navigate('/club-home'); // ✅ Navigate to club dashboard
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-10">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
          Register Your Club
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Club Name */}
          <div className="flex flex-col">
            <label htmlFor="clubName" className="mb-2 text-gray-700 font-medium">
              Club Name
            </label>
            <input
              type="text"
              id="clubName"
              placeholder="Enter club name"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
              className="text-black placeholder-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black placeholder-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black placeholder-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
            >
              Register Club
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
