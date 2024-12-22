import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./feedback.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

export const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    rating: "",
    message: "",
    type: "",
  }); 
  const [submitted, setSubmitted] = useState(false);
  const [existingFeedback, setExistingFeedback] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const emojiOptions = ["😄", "🙂", "😐", "🙁", "😡"];

  const showSuccessToast = () => {
    toast.success('Feedback Submitted successfully!');
  };

  // Function to show error toast
  const showErrorToast = () => {
    toast.error('Failed Submitting feedback!');
  };

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/feedbacks");
        if (!response.ok) {
          throw new Error(`Error fetching feedback: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setExistingFeedback(data.feedbacks || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFeedback();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const getRatingValue = (ratingEmoji) => {
    const ratingMap = {
      '😄': 5,
      '🙂': 4,
      '😐': 3,
      '🙁': 2,
      '😡': 1,
    };
    return ratingMap[ratingEmoji];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.rating || !feedback.message || !feedback.type) {
      setErrorMessage("Please fill in all fields.");
      showErrorToast(); // Show error toast when form fields are missing
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: feedback.message,
          type: feedback.type,
          ratingEmoji: feedback.rating,
           ratingValue: getRatingValue(feedback.rating),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      const data = await response.json();
      console.log(data);
      setExistingFeedback([
        ...existingFeedback,
        {
          ratingEmoji: feedback.rating,
          ratingValue: getRatingValue(feedback.rating),
          message: feedback.message,
          type: feedback.type,
        },
      ]);
      setSubmitted(true);
      showSuccessToast(); // Show success toast when feedback is submitted successfully

      setTimeout(() => {
        setSubmitted(false);
        setExistingFeedback((prevFeedback) => {
          const updatedFeedback = [...prevFeedback];
          updatedFeedback[updatedFeedback.length - 1].ratingValue = 0;
          return updatedFeedback;
        });
      }, 5000); // Reset feedback form after successful submission
      setFeedback({ rating: "", message: "", type: "" });

      setErrorMessage("");
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed to submit feedback. Please try again.");
      showErrorToast(); // Show error toast when feedback submission fails
    }
  };

  return (
    <div className="feedback-page-container">
      <ToastContainer
        position="top-right"
        autoClose={5000} // Duration for the toast to disappear
        hideProgressBar={false} // Show progress bar
        newestOnTop={true} // Show the newest toast on top
        closeOnClick // Close on click
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container-fluid feedback-container">
        <div className="row align-items-start feedback-form-container">
          {/* Feedback Form Section */}
          <div className="col-lg-6 col-md-12 feedback-form-section">
            <h2 className="text-center mb-4">We Value Your Feedback</h2>
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group mb-3">
                <label htmlFor="feedbackType">Feedback Type</label>
                <select
                  id="feedbackType"
                  name="type"
                  className="form-control"
                  value={feedback.type}
                  onChange={handleInputChange}
                >
                  <option value="">Select Type</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Suggestion">Suggestion</option>
                  <option value="Appreciation">Appreciation</option>
                </select>
              </div>
              <div className="emoji-rating mb-3">
                <p>Your Rating:</p>
                <div className="emoji-container">
                  {emojiOptions.map((emoji, index) => (
                    <span
                      key={index}
                      className={`emoji ${
                        feedback.rating === emoji ? "selected" : ""
                      }`}
                      onClick={() =>
                        setFeedback({ ...feedback, rating: emoji })
                      }
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="feedbackMessage">Your Feedback</label>
                <textarea
                  id="feedbackMessage"
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write your feedback here..."
                  value={feedback.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-gradient w-100">
                Submit Feedback
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            {submitted && (
              <div className="feedback-confirmation text-center mt-3">
                <p>🎉 Thank you for your feedback! 🎉</p>
              </div>
            )}
          </div>
          {/* Feedback History Section */}
          <div className="col-lg-6 col-md-12 feedback-history-section-container">
            <h2 className="text-center mb-4">What Others Are Saying</h2>
            {existingFeedback.slice(-2).map((feedback, index) => (
              <div key={index}>
                <div className="card">
                  <div className="card-body">
                    <span className="emoji">{feedback.ratingEmoji}</span>
                    <p>{feedback.message}</p>
                    <small>{feedback.type}</small>
                  </div>
                </div>
              </div>
            ))}
            {existingFeedback.length > 0 && (
              <div className="feedback-stats-container">
                <div className="stat">
                  {existingFeedback[existingFeedback.length - 1].ratingValue}/5
                </div>
                <div className="label">Rating</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};