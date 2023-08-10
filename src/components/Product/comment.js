import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CommentsSection.css"; // Import your custom CSS file here

const CommentsSection = ({ productId, handleAddComment, comments, newComment, setNewComment, setComments }) => {
    const [users, setUsers] = useState({});
    const [displayedComments, setDisplayedComments] = useState(3);
  
    useEffect(() => {
      const fetchComments = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/product/${productId}`);
          const productData = response.data;
  
          setComments(productData.comments);
          console.log(productData.comments);
  
          const userIds = productData.comments.map((comment) => comment.userId);
          fetchUsers(userIds);
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      };
  
      fetchComments();
    }, [productId]);
  
    const fetchUsers = async (userIds) => {
      try {
        const response = await axios.get(`http://localhost:4000/users?ids=${userIds.join(",")}`);
        const usersData = response.data;
  
        const usersMap = {};
  
        usersData.forEach((user) => {
          usersMap[user._id] = user;
        });
  
        setUsers(usersMap);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  
    const handleSeeMore = () => {
      setDisplayedComments(displayedComments + 3);
    };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className="list-unstyled">
          {comments.slice(0, displayedComments).map((comment, index) => (
            <li key={index} className="comment-item">
              <div className="comment-container">
                {comment.userId && users[comment.userId] && (
                  <div className="comment-user">
                    <img
                      src={
                        users[comment.userId]?.pic
                          ? `http://localhost:4000/${users[comment.userId].pic.replace("\\", "/")}`
                          : "default-profile-picture-url"
                      }
                      
                      alt={users[comment.userId]?.username}
                      className="user-profile-picture"
                    />
                    <div className="user-details">
                      <p className="username">{users[comment.userId]?.username}</p>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {comments.length > displayedComments && (
        <button className="btn btn-primary see-more-button" onClick={handleSeeMore}>
          See More
        </button>
      )}

      <div className="comment-input">
        <textarea
          rows="3"
          className="form-control"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button className="btn btn-primary add-comment-button" onClick={() => handleAddComment(newComment)}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsSection;
