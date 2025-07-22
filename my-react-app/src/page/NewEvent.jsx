import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const NewEvent = () => {
  const { club } = useSelector((state) => state.club);
  const [formData, setFormData] = useState({
    clubId: club._id || '',
    clubName: club.clubname || '',
    name: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    users: []
  });

  // Load clubId from localStorage on mount
  useEffect(() => {
    const storedClubId = localStorage.getItem('clubId');
    if (storedClubId) {
      setFormData((prev) => ({
        ...prev,
        clubId: storedClubId
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUserChange = (e, index) => {
    const newUsers = [...formData.users];
    newUsers[index] = e.target.value;
    setFormData((prev) => ({
      ...prev,
      users: newUsers
    }));
  };

  const addUserField = () => {
    setFormData((prev) => ({
      ...prev,
      users: [...prev.users, '']
    }));
  };

  const removeUserField = (index) => {
    setFormData((prev) => ({
      ...prev,
      users: prev.users.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve token from localStorage here!
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Authentication token not found. Please login.');
      return;
    }

    const filteredUsers = formData.users.filter(user => user.trim() !== '');

    const submitData = {
      ...formData,
      users: filteredUsers
    };

    try {
      console.log('Submitting data:', submitData);

      const response = await axios.post(
        'http://localhost:5000/event/newEvent',
        {
          clubId: submitData.clubId,
          clubName: submitData.clubName,
          name: submitData.name,
          description: submitData.description,
          date: submitData.date,
          time: submitData.time,
          venue: submitData.venue,
          users: submitData.users
        },
        {
          headers: {
            Authorization: `Bearer ${token}`  // Send token in headers
          }
        }
      );

      console.log('Event created:', response.data);
      alert('Event created successfully!');

      // Reset form except clubId and clubName
      setFormData({
        clubId: formData.clubId,
        clubName: formData.clubName,
        name: '',
        description: '',
        date: '',
        time: '',
        venue: '',
        users: []
      });
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Failed to create event. Please try again.');
    }
  };

  return (
    <div className="min-w-screen max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create New Event</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <p className="text-blue-700 font-medium">
            {formData.clubName} (ID: {formData.clubId})
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Event Name: *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter event name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description: *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Describe your event..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date: *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time: *</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Venue: *</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Event location"
          />
        </div>

        {/* Participants */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Participants:</label>
          <div className="space-y-2">
            {formData.users.map((user, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={user}
                  onChange={(e) => handleUserChange(e, index)}
                  placeholder={`Participant ${index + 1}`}
                  className="text-black flex-1 px-3 py-2 border border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => removeUserField(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addUserField}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Add Participant
          </button>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewEvent;
