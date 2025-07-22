import React,{useEffect,useState} from 'react';

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen to-100% bg-white">
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">Club Event Manager</h1>
          </div>
          <div className="space-x-4">
            <button className="text-white-600 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">
              Organize Events
              <span className="block text-blue-600">Made Simple</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plan, manage, and track your club events all in one place. 
              Simple tools for successful events.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 text-white-700 px-8 py-3 rounded-lg text-lg hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Event Planning</h3>
              <p className="text-gray-600">Create and organize your events with our easy-to-use tools</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Member Management</h3>
              <p className="text-gray-600">Track attendees and manage registrations effortlessly</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Analytics</h3>
              <p className="text-gray-600">Get insights about your events and member engagement</p>
            </div>
          </div>

          {/* Simple Dashboard Preview */}
          <div className="pt-16">
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Preview</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">Upcoming Events</h4>
                  <p className="text-gray-600">View and manage all your scheduled events</p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">Member Activity</h4>
                  <p className="text-gray-600">Track member participation and engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2025 Club Event Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}