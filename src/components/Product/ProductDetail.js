import React,{useState,useEffect} from "react";
import { useLocation, useParams } from "react-router-dom";
import "./HostelDetailPage.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import CommentsSection from "./comment"; // Import the CommentsSection component


const ProductDetailPage = ({ addToCart }) => {
  const { state: { product, productId  } } = useLocation();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);

  
  const navigate = useNavigate();

  const HandleOrder = (e) => {
    const config = {
      headers:
      {
          Authorization:
              `bearer ${window.localStorage.getItem('token')}`
      }

  }
  alert(`${productId}`)
  axios.post(`http://localhost:4000/order/createOrder?productid=${productId}`, { userid: window.localStorage.getItem('userid')}, config)

      .then((response) => {
        window.alert(response.data.status);
        alert("Sucessfully ordered")
      })
      .catch((err) => console.log(err));
  };

  const handleAddToCart = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    };
  
    const requestBody = {
      userid: window.localStorage.getItem('userid')
    };
  
    const url = `http://localhost:4000/cart/createCart?productid=${productId}&userid=${window.localStorage.getItem('userid')}`;
  
    axios.post(url, requestBody, config)
      .then((response) => {
        window.alert(response.data.status);
        alert("Added To Cart");
      })
      .catch((err) => console.log(err));
  };

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      try {
        // Retrieve the userId from localStorage
        const userId = localStorage.getItem(`userid`);
        
        // Check if userId is available
        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }
  
        const response = await axios.post(`http://localhost:4000/product/${productId}/addcomment`, {
          userId,
          text: newComment,
        });
  
        setComments([...comments, response.data.comment]);
        setNewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };
  
  

  return (
    <div className="container product-detail-page">
      <h2>{product.name}</h2>
      <div className="row">
        <div className="col-md-5">
          
          <img src={`http://localhost:4000${product.photos[0]}`} alt={product.name} height={400}  width={500} className="" />
        </div>
        <div className="col-md-6">
          <p>{product.desc}</p>
          <div className="address">
            <span>Rating: </span>
            <strong>{product.rating}</strong>
          </div>
      
          <div className="price">
            <span>Status: </span>
            <strong>{product.title}</strong>
          </div>
          <div className="price">
            <span>Price: </span>
            <strong>{product.price}</strong>
          </div>
          <div className="address">
            <span>Address: </span>
            <strong>{product.address}</strong>
          </div>
          <div className="buttons">
            <button className="btn btn-primary add-to-cart-btn"
             onClick={handleAddToCart}
             >
              Add to Cart
            </button>
            <button className="btn btn-success buy-now-btn" onClick={HandleOrder} >Buy Now</button>
          </div>
        </div>
      </div>
      <CommentsSection
           productId={productId}
           handleAddComment={handleAddComment}
           comments={comments}
           newComment={newComment}
           setNewComment={setNewComment}
           setComments={setComments}
        />
    </div>
    
  );
};

export default ProductDetailPage;
