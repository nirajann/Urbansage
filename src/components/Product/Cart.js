import React, { useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from '../khalti/khalticonfig'
import "./cart.css";
import { useState } from "react";
import cartService from "../../services/cart";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let checkout = new KhaltiCheckout(config);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [carts, setCarts] = useState("");
  const [quantityUpdates, setQuantityUpdates] = useState({});

  useEffect(() => {
    cartService
      .getAll()
      .then((res) => {
        setCarts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const HandleOrder = (cartId) =>  {
    checkout.show({amount: 10000},)
    const config = {
      headers:
      {
          Authorization:
              `bearer ${window.localStorage.getItem('token')}`
      }

  }
  alert(`${cartId}`)
  axios.post(`http://localhost:4000/order/createOrder?=${cartId}`, { userid: window.localStorage.getItem('userid')}, config)

      .then((response) => {
        window.alert(response.data.status);
        alert("Sucessfully ordered")
      })
      .catch((err) => console.log(err));
  };



  const handleDeleteCart = (cartId) => {
    axios
      .delete(`http://localhost:4000/cart/${cartId}`, {
        headers: {
          Authorization: `bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        if (Array.isArray(carts)) {
          setCarts(carts.filter((cart) => cart._id !== cartId));
        }
      })
      .catch((err) => console.log(err));
  };

  const handleQuantityChange = (cartId, value) => {
    setQuantityUpdates((prevUpdates) => ({
      ...prevUpdates,
      [cartId]: value,
    }));
  };
  
  const handleUpdateQuantity = (cartId) => {
    const updatedQuantity = quantityUpdates[cartId];
  
    if (!updatedQuantity || isNaN(updatedQuantity)) {
      alert("Please enter a valid quantity.");
      return;
    }
  
    const updatedCarts = carts.data.map((cart) => {
      if (cart._id === cartId) {
        return {
          ...cart,
          quantity: parseInt(updatedQuantity),
          isUpdating: true,
        };
      }
      return cart;
    });
  
    axios
      .put(`http://localhost:4000/cart/${cartId}`, updatedCarts, {
        headers: {
          Authorization: `bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        setCarts({ data: updatedCarts }); // Assuming the `carts` state is an object with a `data` property
        setQuantityUpdates((prevUpdates) => ({
          ...prevUpdates,
          [cartId]: "",
        }));
      })
      .catch((err) => console.log(err));
  };
  


  const calculateTotalAmount = () => {
    let totalAmount = 0;

 
    carts.data.map((cart) => {
      totalAmount += cart.productid.price * cart.quantity;

    });
    return totalAmount;
  };


  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {carts &&
          carts.data.map((cart) => {
            return (
              [
              <div key={cart._id} className="cart-item row mb-3">
                <div className="col-sm-2">
                  <img
                    src={`http://localhost:4000${cart.productid.photos[0]}`}
                    alt={cart.productid.name}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{cart.productid.name}</h3>
                    <p className="card-text">{cart.productid.desc}</p>
                    <div className="cart-item-price">
                      ${cart.productid.price}
                    </div>
                    <div className="cart-item-quantity">
          Quantity:{" "}
          <input
            type="number"
            min="1"
            value={quantityUpdates[cart._id] || cart.quantity}
            onChange={(e) => handleQuantityChange(cart._id, e.target.value)}
          />
          {cart.isUpdating ? (
            <button disabled={true}>Updating...</button>
          ) : (
            <button onClick={() => handleUpdateQuantity(cart._id)}>Update</button>
          )}
        </div>
                <div className="cart-item-total">
                  Total: ${cart.productid.price * cart.quantity}
                </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteCart(cart._id)}
                    >
                      Remove from Cart
                    </button>
                    <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Proceed to Checkout
            </button>
                    <div className="cart-summary">

          <div className="card-body">
            
            <div
              className="modal"
              tabIndex="-1"
              role="dialog"
              style={{ display: showModal ? "block" : "none" }}
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Verify Order</h5>
                    <button
                      type="button"
                      className="close"
                      onClick={() => setShowModal(false)}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="checkin">Check-in date:</label>
                      <input
                        type="date"
                        className="form-control"
                        id="checkin"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout">Check-out date:</label>
                      <input
                        type="date"
                        className="form-control"
                        id="checkout"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">orderid:</label>
                      <input type="text" className="form-control" id="orderid" value={cart._id} readOnly/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">location:</label>
                      <input type="text" className="form-control" id="location" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">phone:</label>
                      <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <div>
        <button onClick={() =>{
          HandleOrder(cart.Hostelid.Hostelid)
          }
          
          }>Pay</button>        
    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
                  </div>
                </div>
              </div>
              ]
            );
          })}
      </div>
      <div className="cart-total">
        Total Amount: ${calculateTotalAmount()}
      </div>
    </div>
  );
};

export default Cart;
