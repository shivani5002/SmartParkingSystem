import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Adminfeedback.css"; 

export const FeedbackDetails = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/feedbacks");
        setFeedbacks(response.data.feedbacks);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
 
        <div className="feedback-page_a">
          <div className=" feedback-container_a">
            <h2 className="text-center_a mb-4">User Feedback</h2>
            <div className="feedback-cards_a">
              {feedbacks.map((feedback, index) => (
                <div className="card_a" key={index}>
                  <div className="card-body_a">
                    <span className="emoji_a">{feedback.ratingEmoji}</span>
                    <p>{feedback.message}</p>
                    <small className="feedback-type_a">{feedback.type}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

