import React, { useState, useEffect } from 'react';

const mockEvents = [
  {
    id: 1,
    title: "Annual Club Meeting",
    description: "Discuss club activities and future plans",
    date: "2025-08-15",
    time: "10:00 AM",
    location: "Main Hall",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Summer Workshop",
    description: "Technical skills development session",
    date: "2025-08-20",
    time: "2:00 PM",
    location: "Computer Lab",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Team Building Activity",
    description: "Fun activities to strengthen team bonds",
    date: "2025-07-10",
    time: "9:00 AM",
    location: "Sports Complex",
    status: "completed",
  },
];

export default function ClubHome() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetch delay
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (d) =>
    new Date(d).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <p className="text-red-600 mb-4 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen min-w-screen to-100%p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Club Event Manager</h1>
        <p className="text-gray-700 font-medium">Manage your club events with ease</p>
      </header>

      <main className="max-w-3xl mx-auto space-y-8">
        {/* Create New Event */}
        <div
          onClick={() => alert('Create New Event clicked')}
          className="w-full bg-white p-5 rounded-xl border-2 border-dashed border-blue-300 hover:border-blue-500 flex items-center gap-4 transition transform hover:-translate-y-1 cursor-pointer"
        >
          <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center hover:bg-blue-600 transition-colors">
            <svg
              className="w-6 h-6 text-blue-600 hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Create New Event</h3>
            <p className="text-gray-700 font-medium">Add a new event to your club calendar</p>
          </div>
        </div>

        {/* Events List */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Events</h2>

          {events.length === 0 ? (
            <p className="text-center text-gray-600 font-medium">No events found. Create your first event!</p>
          ) : (
            <div className="space-y-4">
              {events.map(({ id, title, description, date, time, location, status }) => (
                <div
                  key={id}
                  className="w-full bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => alert(`Edit event ${id} clicked`)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">{title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3 font-medium">{description}</p>
                      <div className="flex gap-6 text-sm text-gray-600 font-medium">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {formatDate(date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {time}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {location}
                        </div>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 hover:text-blue-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Logout Button */}
        <div className="flex justify-center">
          <button
            onClick={() => alert('Logout clicked')}
            className="flex items-center gap-2 px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl transition transform hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}