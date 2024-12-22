import './profile.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProfileInfo = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const response = await axios.get('http://localhost:3001/api/user', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      setUser(response.data);
      setEditedUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchUserData();
}, []);
    

  const [parkingHistory, setParkingHistory] = useState([
    {
      location: "Lot A - Downtown",
      date: "Nov 17, 2024",
      duration: "2 hours",
    },
    {
      location: "Lot B - Mall",
      date: "Nov 15, 2024",
      duration: "3.5 hours",
    },
    {
      location: "Lot C - Airport",
      date: "Nov 12, 2024",
      duration: "1.5 hours",
    },
  ]);

  // Handle edit profile button click
  const handleEditProfile = () => {
    // Add edit profile logic here
    setEditing(true);
  };
  const handleCancelEditing = () => {
    setEditing(false);
    setEditedUser(user);
  };
  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.patch('http://localhost:3001/api/user', editedUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data);
        setEditing(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setEditedUser({ ...editedUser, [event.target.name]: event.target.value });
  };

  // Handle parking history item click
  const handleParkingHistoryItemClick = (item) => {
    // Add parking history item click logic here
  };

  return (
    <div className="profile-wrapper">
      <div className="hero-section">
        <h1>Profile</h1>
      </div>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-picture">
            <img
              src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              alt="Profile"
              className="profile-img"
            />
          </div>
          <div className="profile-info">
          {editing ? (
    <div>
      <input
        type="text"
        name="fullName"
        value={editedUser.fullName}
        onChange={handleInputChange}
        className="form-control_p"
      />
      <br />
      <input
        type="email"
        name="email"
        value={editedUser.email}
        onChange={handleInputChange}
        className="form-control_p"
      />
    </div>
  ) : (
    <div>
      <h1>{user.fullName}</h1>
      <p>{user.email}</p>
      <button className="edit-btn" onClick={handleEditProfile}>
        Edit Profile
      </button>
    </div>
  )}
</div>
</div>
        <div className="profile-details">
          <h2>Contact Details</h2>
          {editing ? (
            <div>
               <label>Phone Number:</label>
              <input
              type="text"
              name="phone"
              value={editedUser.phone}
              onChange={handleInputChange}
              className="form-control_p"
            />
            <br />
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={editedUser.address}
              onChange={handleInputChange}
              className="form-control_p"
            />
            <br />
            <div>
              <button
                className="save-btn_p"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
              <button
                className="cancel-btn_p"
                onClick={handleCancelEditing}
              >
                Cancel
              </button>
            </div>
          </div>
          ) : (
            <div>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Address:</strong> {user.address}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="parking-history-card">
        <h2>Parking History</h2>
        <ul>
          {parkingHistory.map((entry, index) => (
            <li key={index} onClick={() => handleParkingHistoryItemClick(entry)}>
              <span className="history-location">{entry.location}</span>
              <span className="history-date">{entry.date}</span>
              <span className="history-duration">{entry.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
  
  