import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = window.localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('http://localhost:4000/order/myorder', config);
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      const token = window.localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`http://localhost:4000/order/${orderId}`, config);
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact-form">
      <div className="container shadow-lg p-3 mt-5 py-5 rounded text-center">
        <div className="container">
          <h1 className="text-center my-5">Order Details</h1>
          <table className="table">
            <thead>
              <tr>
                <th>HostelName</th>
                <th>username</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.Hostelid.name}</td>
                  <td>{order._id}</td>
                  <td>RS </td>
                  <td>
                    <button className="btn btn-success mx-2">{order.verified}Verify</button>
                    <button className="btn btn-danger mx-2" onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
