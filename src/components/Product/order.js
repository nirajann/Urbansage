import React, { useState,useEffect } from 'react'
import axios from "axios";

const OrderPage = () => {
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
      const config = {
          headers:
          {
              Authorization:
                  `bearer ${window.localStorage.getItem('token')}`
          }
      }
      axios.get(`http://localhost:4000/order/myorder`,config)
          .then((res) => {
              setOrders(res.data);
          })
          .catch((err) => console.log(err));
  }, []);

  const handleDeleteOrder = (orderId) => {
    axios.delete(`http://localhost:4000/order/${orderId}`, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`
      }
    })
    .then(() => {
      setOrders(Orders.filter((order) => order._id !== orderId));
    })
    .catch((err) => console.log(err));
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
                            {Orders &&
                                Orders.map((order) => {
                                    return (
                                        [
                                        <tr ><td>{order.Hostelid.name}</td>
                                            <td>{order._id}</td>
                                            <td>RS </td>
                                            <td>
                                                
                                                <button className="btn btn-success mx-2">{order.verified}Verify</button>
                                                <button className="btn btn-danger mx-2" onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                                            </td>
                                        </tr>
                                        ]
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default OrderPage
