import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import './profilepage.css';

const ProfilePage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/users/${window.localStorage.getItem('userid')}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteOrder = (orderId) => {
    setUsers(users.filter((user) => user._id !== orderId));
  };

  const handleImageUpload = async (event) => {
    // ... (your existing image upload logic)
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-card">
          {users && users.map((user) => (
            <div className="profile-content" key={user._id}>
              <div className="">
                <img
                  src={user.pic ? `http://localhost:4000/${user.pic.replace('\\', '/')}` : ""}
                  alt="Profile"
                  height={300}
                  width={300}
                />
                <input type="file" onChange={handleImageUpload} className="upload-input" />
              </div>
              <div className="profile-details">
                <h2 className="username">{user.username}</h2>
                <p className="email">Email: {user.email}</p>
                <p className="location">Location: New York, USA</p>
                <p className="interests">Interests: Reading, Travelling</p>
                <Link to={`/EditProfilePage`} className="edit-button">
                  Edit Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
