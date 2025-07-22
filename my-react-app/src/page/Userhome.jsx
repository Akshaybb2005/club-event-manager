import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"; 
import { useDispatch,useSelector } from 'react-redux';


const EventsDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Get user data from

  const [filterCategory, setFilterCategory] = useState('all');

  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2025",
      date: "2025-08-15",
      time: "09:00 AM",
      location: "Convention Center, Bangalore",
      category: "Technology",
      attendees: 250,

      image: "",
      description: "Join industry leaders for cutting-edge tech discussions and networking.",
      organizer: "TechCorp Events"
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      date: "2025-08-20",
      time: "02:00 PM",
      location: "Online Event",
      category: "Marketing",
      attendees: 150,

      image: "",
      description: "Learn the latest digital marketing strategies from experts.",
      organizer: "Marketing Pro"
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "2025-08-25",
      time: "10:00 AM",
      location: "Innovation Hub, Mumbai",
      category: "Business",
      attendees: 300,

      image: "",
      description: "Watch promising startups pitch to top investors.",
      organizer: "Startup Accelerator"
    },
    {
      id: 4,
      title: "AI & Machine Learning Workshop",
      date: "2025-09-01",
      time: "11:00 AM",
      location: "Tech Park, Hyderabad",
      category: "Technology",
      attendees: 100,

      image: "",
      description: "Hands-on workshop covering AI fundamentals and applications.",
      organizer: "AI Academy"
    }
  ];

  // Sample registered events data
  const registeredEvents = [
    {
      id: 5,
      title: "Web Development Bootcamp",
      date: "2025-07-28",
      time: "09:00 AM",
      location: "Learning Center, Chennai",
      category: "Technology",
      status: "confirmed",
      registrationDate: "2025-07-10",
      ticketNumber: "WEB2025-001"
    },
    {
      id: 6,
      title: "Design Thinking Workshop",
      date: "2025-08-05",
      time: "01:00 PM",
      location: "Creative Studio, Pune",
      category: "Design",
      status: "pending",
      registrationDate: "2025-07-15",
      ticketNumber: "DES2025-042"
    },
    {
      id: 7,
      title: "Entrepreneurship Summit",
      date: "2025-08-12",
      time: "10:30 AM",
      location: "Business Center, Delhi",
      category: "Business",
      status: "confirmed",
      registrationDate: "2025-07-05",
      ticketNumber: "ENT2025-156"
    }
  ];

  const categories = ['all', 'Technology', 'Marketing', 'Business', 'Design'];

  const filterEvents = (events, isUpcoming = true) => {
    return events.filter(event => {
      const matchesCategory = filterCategory === 'all' || event.category === filterCategory;
      return matchesCategory;
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getallevents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user/events');
      console.log('All Events:', response.data);
      setEvents(response.data);
    } catch (error) {
      console.log('Error fetching events:', error);
    }
  }
  useEffect(() => {
    getallevents(); 
  }, []);

  const EventCard = ({ event, isUpcoming = true }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 leading-tight">{event.title}</h3>
          <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-sm font-medium">
            {event.category}
          </span>
        </div>
        
        {!isUpcoming && (
          <div className="mb-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
              {event.status}
            </span>
          </div>
        )}
        
        {isUpcoming && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
        )}
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <span className="w-4 h-4 mr-2 text-center">📅</span>
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="w-4 h-4 mr-2 text-center">🕐</span>
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="w-4 h-4 mr-2 text-center">📍</span>
            <span className="text-sm">{event.location}</span>
          </div>
          {isUpcoming && (
            <div className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2 text-center">👥</span>
              <span className="text-sm">{event.attendees} attendees</span>
            </div>
          )}
          {!isUpcoming && (
            <div className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2 text-center">🎫</span>
              <span className="text-sm">Ticket: {event.ticketNumber}</span>
            </div>
          )}
        </div>
        
        <div className="flex justify-center">
          {isUpcoming ? (
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Register Now
            </button>
          ) : (
            <>
              <span className="text-sm text-gray-500 mr-4">
                Registered: {formatDate(event.registrationDate)}
              </span>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                View Details
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Events Dashboard</h1>
          <p className="text-gray-600 text-lg">Discover and manage your events</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'upcoming' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('registered')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'registered' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              My Registrations
            </button>
          </div>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔽</span>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white appearance-none cursor-pointer"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'upcoming' 
            ? filterEvents(events, true).map(event => (
                <EventCard key={event._id} event={event} isUpcoming={true} />
              ))
            : filterEvents(events, false).map(event => (
                <EventCard key={event._id} event={event} isUpcoming={false} />
              ))
          }
        </div>

        {/* Empty State */}
        {((activeTab === 'upcoming' && filterEvents(upcomingEvents, true).length === 0) ||
          (activeTab === 'registered' && filterEvents(registeredEvents, false).length === 0)) && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <span className="text-6xl">📅</span>
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">
              {activeTab === 'upcoming' 
                ? 'Try adjusting your filter criteria' 
                : 'You haven\'t registered for any events yet'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsDashboard;