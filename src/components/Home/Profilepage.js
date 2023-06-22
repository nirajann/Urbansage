import React, { useState , useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="card bg-purple text-white">
              <img src="https://th.bing.com/th/id/R.66a3571a9820c2b0d5363820d23a8bef?rik=S9IhvJhHJPLFBw&pid=ImgRaw&r=0" className="card-img-top" alt="Profile" />
              {users.map((user) => (
                <div className="card-body" key={user._id}>
                  <h5 className="card-title mb-0">{user.Username}</h5>
                  <p className="card-text mb-1">Email: {user.email}</p>
                  <p className="card-text mb-1">Location: New York, USA</p>
                  <p className="card-text mb-0">Interests: Reading, Travelling</p>
                  <Link to={`/EditProfilePage`}>
                    <button className="btn btn-success fw-bold fs-5" type="submit">
                      Edit Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
