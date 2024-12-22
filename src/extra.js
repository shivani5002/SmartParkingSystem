//         server side code
/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// Add middleware functions
app.use(bodyParser.json());
app.use(cors());
const User = mongoose.model('User', {
  fullName: String,
  email: String,
  password: String,
});

app.post('/api/signin', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || user.password !== req.body.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ message: 'Signed in successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/signup', async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const user = new User(req.body);
    await user.save();
    res.json({ message: 'Signed up successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});*/

// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// const jwt = require('jsonwebtoken'); // Import jsonwebtoken

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/smart-parking-system', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.error('Failed to connect to MongoDB:', error));

// // Add middleware functions
// app.use(express.json());
// app.use(cors());

// // Define User model
// const User = mongoose.model('User', {
//   fullName: String,
//   email: String,
//   password: String,
// });

// // Function to generate token
// const generateToken = (user) => {
//   const payload = {
//     userId: user._id,
//     email: user.email,
//   };
//   const token = jwt.sign(payload, process.env.SECRET_KEY, {
//     expiresIn: '1h',
//   });
//   return token;
// };

// // API routes
// app.post('/api/signin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     const token = generateToken(user);
//     res.json({ message: 'Signed in successfully', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// app.post('/api/signup', async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }
//     const user = new User({ fullName, email, password: hashedPassword });
//     await user.save();
//     const token = generateToken(user);
//     res.json({ message: 'Signed up successfully', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Protected route
// app.get('/api/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'Hello from protected route!' });
// });

// // Function to authenticate token
// function authenticateToken(req, res, next) {
//   const authHeader = req.header('Authorization');
//   if (!authHeader) return res.status(401).json({ message: 'Access denied' });
//   const token = authHeader.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Access denied' });
//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid token' });
//   }
// }

// // Start server
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });







// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();
// const app = express();

// // Check if the SECRET_KEY environment variable is set
// if (!process.env.SECRET_KEY) {
//   console.error('SECRET_KEY environment variable is not set');
//   process.exit(1);
// }

// // Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/smart-parking-system', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((error) => console.error('Failed to connect to MongoDB:', error));

// // Add middleware functions
// app.use(express.json());
// app.use(cors());

// // Define User model
// const User = mongoose.model('User', {
//   fullName: String,
//   email: String,
//   password: String,
// });

// // Function to generate token
// const generateToken = (user) => {
//   const payload = {
//     userId: user._id,
//     email: user.email,
//   };
//   const token = jwt.sign(payload, process.env.SECRET_KEY, {
//     expiresIn: '1h',
//   });
//   return token;
// };

// // Function to authenticate token
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.header('Authorization');
//   if (!authHeader) return res.status(401).json({ message: 'Access denied' });
//   const token = authHeader.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Access denied' });
//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid token' });
//   }
// };

// // API routes
// app.post('/api/signin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     const token = generateToken(user);
//     res.json({ message: 'Signed in successfully', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// app.post('/api/signup', async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }
//     const user = new User({ fullName, email, password: hashedPassword });
//     await user.save();
//     const token = generateToken(user);
//     res.json({ message: 'Signed up successfully', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Protected route
// app.get('/api/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'Hello from protected route!' });
// });

// // Start server
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

//        feedback.css
/* body {
    font-family: 'Arial', sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
  } */
  
  /* Header styling */
  /* .header h1 {
    background-color: #4a90e2;
    font-size: 2.5rem;
    color: white;
    padding:1%;
    border-radius: 15px;
  } */
  
  /* .header p {
    font-size: 1.5rem;
    color: #7e7d7d;
  } */
  
  /* Stars rating section */
  /* .stars {
    font-size: 2rem;
    cursor: pointer;
  } */
  
  /* .star {
    color: #ccc;
    transition: color 0.3s ease;
  }
  
  .star.filled {
    color: #f39c12; // Gold color for filled stars 
  }
   */
  /* Form section */
  /* textarea.form-control {
    resize: none;
    background-color: #f9f9f9;
    border-radius: 8px;
    transition: all 0.3s ease;
  } */
  
  /* textarea.form-control:focus {
    border-color: #4a90e2;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
  } */
  
  /* Feedback history */
  /* .feedback-history h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
  } */
  
  /* .feedback-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .feedback-card .feedback-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    color: #333;
  }
  
  .feedback-card .rating {
    color: #f39c12;
  }
  
  .feedback-card p {
    color: #555;
  } */
  
  /* Submit button styling */
  /* button[type="submit"] {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 12px 20px;
    border-radius: 30px;
    margin-top: 20px;
    background-color: #4a90e2;
    color: white;
    border: none;
    width: 100%;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #357ab7;
  } */
  
  /* Alert (confirmation message) styling */
  /* .alert {
    background-color: #d4edda;
    color: #155724;
    font-weight: bold;
    border-radius: 5px;
  } */
  
  /* Responsive Design */
  /* @media (max-width: 768px) {
    .header h1 {
      font-size: 2rem;
    }
  
    .header p {
      font-size: 1rem;
    }
  
    .stars {
      font-size: 1.5rem;
    }
  
    .feedback-form {
      margin-bottom: 30px;
    }
  
    .feedback-card {
      padding: 15px;
    }
  }
   */
   /* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    background-color: #f9f9f9;
  }
  

  
  .feedback-page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-height: 100vh;
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  }
  
  .feedback-container {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    max-width: 1200px;
  }
  
  
  h2 {
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  label {
    font-weight: bold;
    color: #666;
    margin-bottom: 10px;
  }
  
  .feedback-form h2,
  .feedback-history h2 {
    color: #333;
    font-weight: bold;
    margin-bottom: 20px;

  }
  
  
  
  
  .feedback-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 30px;
  }
  
  .form-control {
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  .emoji-container {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
  
  .emoji {
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.2s, color 0.3s;
  }
  
  .emoji:hover,
  .emoji.selected {
    transform: scale(1.2);
    color: #f39c12;
  }
  
 
  
  .feedback-history-section .card {
    padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .feedback-history-section .emoji {
    font-size: 1.5rem;
    margin-bottom: 10px;
    display: block;
    text-align: center;
  
  }
  
 
  
  .btn-gradient {
    background: linear-gradient(135deg, #ff6a95, #ff8c42);
    border: none;
    padding: 10px 20px ;
    margin-bottom: 25px;
    color: white;
    border-radius: 30px;
    transition: transform 0.3s, background 0.3s;
  }
  
  .btn-gradient:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #ff8c42, #ff6a95);
  }
  
 
  
  .feedback-confirmation {
    background: #dff0d8;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    color: #3e8e41;
  }

  .error-message {
    color: #ef2020; 
    font-size: 20px;
    margin-top: 5%;
    text-align: center;
  }
  
  
  .error-message {
    transition: opacity 0.3s;
  }
  
  .error-message-hide {
    opacity: 0;
  }
  .card-body {
    font-size: 18px;
    color: #444;
  }
  
  .card-body small {
    font-size: 16px;
    color: #666;
  }
  #feedbackType-label {
    font-weight: bold;
    color: #666;
    margin-bottom: 10px;
  }
  .feedback-stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .feedback-stats .stat {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .feedback-stats .label {
    font-size: 16px;
    color: #666;
  }
  .row{
    padding:20px;
     
  }
  
  */
  /* General Styles */

  //     feedback.js
  /*import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import './feedback.css';

export const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedbackHistory, setFeedbackHistory] = useState([
    { id: 1, rating: 4, comment: "Great experience!" },
    { id: 2, rating: 2, comment: "Needs improvement in slot availability." },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackHistory([
      ...feedbackHistory,
      { id: feedbackHistory.length + 1, rating, comment },
    ]);
    setComment('');
    setRating(0);
    setSubmitted(true);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="header text-center mb-4">
            <h1>We Value Your Feedback</h1>
            <p>Tell us about your experience</p>
          </div>

          {submitted && (
            <Alert variant="success" className="text-center">
              Thank you for your feedback!
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            
            <div className="mb-4">
              <h2>Your Rating</h2>
              <div className="stars text-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? 'filled' : ''}`}
                    onClick={() => setRating(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>

            
            <Form.Group controlId="comment" className="mb-4">
              <Form.Label>Your Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What could we improve?"
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Submit Feedback
            </Button>
          </Form>

          <div className="feedback-history mt-5">
            <h2>Your Previous Feedback</h2>
            {feedbackHistory.map((feedback) => (
              <Card key={feedback.id} className="mb-3">
                <Card.Body>
                  <div className="feedback-header d-flex justify-content-between">
                    <span className="rating">{feedback.rating} Stars</span>
                  </div>
                  <p>{feedback.comment}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};*/
/*import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./feedback.css";

export const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    rating: "",
    message: "",
    type: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [existingFeedback, setExistingFeedback] = useState([
    {
      rating: "😄",
      message: "Amazing service and experience!",
      type: "Appreciation",
    },
    {
      rating: "🙁",
      message: "More parking spots would help.",
      type: "Suggestion",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.rating || !feedback.message || !feedback.type) {
      setSubmitted(false); // Reset submitted state
      setErrorMessage("Please provide feedback.");
      return;
    }
    setExistingFeedback([feedback, ...existingFeedback.slice(0, 1)]);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFeedback({
      rating: "",
      message: "",
      type: "",
    });
    setErrorMessage(""); // Clear error message
  };
  const [errorMessage, setErrorMessage] = useState("");

  const emojiOptions = ["😄", "🙂", "😐", "🙁", "😡"];

  return (
    <div className="feedback-page">
      <div className="container-fluid feedback-container">
        <div className="row align-items-start">
         
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
         
          <div className="col-lg-6 col-md-12 feedback-history-section ">
  <h2 className="text-center mb-4">What Others Are Saying</h2>
  
  <div className="feedback-cards">
    {existingFeedback.map((feedback, index) => (
      <div className="card" key={index}>
        <div className="card-body">
          <span className="emoji">{feedback.rating}</span>
          <p>{feedback.message}</p>
          <small>{feedback.type}</small>
        </div>
      </div>
    ))}
     </div>
  <div className="feedback-stats">
    <div className="stat">4.5/5</div>
    <div className="label">Average Rating</div>
  </div>
</div> 
          </div>
        </div>
        </div>
     )}
*/

//       floorselection.js
/*import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import styles from './styles.module.css';

// Animation for floor card hover effect
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const PageContainer = styled.div`
  ${styles.floorSelectionContainer}
`;

const PageTitle = styled.h1`
  ${styles.pageTitle}
`;

const FloorContainer = styled.div`
  ${styles.floorContainer}
`;

const FloorCard = styled(Link)`
  ${styles.floorCard}
  &:hover {
    animation: ${hoverAnimation} 0.5s forwards;
    background: linear-gradient(135deg, #ff9a8b, #ff6f61);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const FloorIcon = styled(FontAwesomeIcon)`
  ${styles.floorIcon}
`;

const FloorText = styled.h2`
  ${styles.floorText}
`;
export const FloorSelection = () => {
  const floors = [1, 2, 3];
  return (

    <PageContainer className="floor-selection-container">
      <PageTitle>Choose Your Parking Floor</PageTitle>
      <FloorContainer>
        {floors.map((floor) => (
          <FloorCard key={floor} to={`/parking/${floor}`}>
              <FloorIcon icon={faBuilding} />
              <FloorText>Floor {floor}</FloorText>
            </FloorCard>
        ))}
      </FloorContainer>
    </PageContainer>*/
    
    // <PageContainer className="floor-selection-container">
    //   <PageTitle>Choose Your Parking Floor</PageTitle> {/* Heading on the background image */}
      
    //   <FloorContainer>
    //     <FloorCard to="/floor/1">
    //       <FloorIcon icon={faBuilding} />
    //       <FloorText>Floor 1</FloorText>
    //     </FloorCard>
    //     <FloorCard to="/floor/2">
    //       <FloorIcon icon={faBuilding} />
    //       <FloorText>Floor 2</FloorText>
    //     </FloorCard>
    //     <FloorCard to="/floor/3">
    //       <FloorIcon icon={faBuilding} />
    //       <FloorText>Floor 3</FloorText>
    //     </FloorCard>
    //   </FloorContainer>
    // </PageContainer>
 /* );
};*/
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBuilding } from '@fortawesome/free-solid-svg-icons';

// const hoverAnimation = keyframes`
//   0% {
//     transform: scale(1);
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   }
//   50% {
//     transform: scale(1.05);
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
//   }
//   100% {
//     transform: scale(1);
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   }
// `;

// const PageContainer = styled.div`
//   position: relative;
//   width: 100vw;
//   min-height: 100vh;
//   background-image: url("https://png.pngtree.com/background/20230516/original/pngtree-night-cars-parked-in-an-empty-parking-lot-picture-image_2601314.jpg");
//   background-size: cover;
//   background-position: center;
//   background-attachment: fixed;
//   background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("https://png.pngtree.com/background/20230516/original/pngtree-night-cars-parked-in-an-empty-parking-lot-picture-image_2601314.jpg");
//   color: white;
//   padding-top: 100px;
// `;

// const PageTitle = styled.h1`
//   font-size: 4rem;
//   font-weight: 700;
//   text-align: center;
//   margin: 0;
//   color: #fff;
//   text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
//   padding-top: 50px;
// `;

// const FloorContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   gap: 30px;
//   padding: 50px;
//   position: relative;
// `;

// const FloorCard = styled(Link)`
//   display: inline-block;
//   background: linear-gradient(135deg, #ff6f61, #ff9a8b);
//   color: white;
//   padding: 30px;
//   margin: 20px;
//   border-radius: 12px;
//   text-decoration: none;
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   width: 250px;
//   height: 250px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   border: 2px solid #fff;

//   &:hover {
//     animation: ${hoverAnimation} 0.5s forwards;
//     background: linear-gradient(135deg, #ff9a8b, #ff6f61);
//   }

//   &:active {
//     transform: scale(0.98);
//   }
// `;

// const FloorIcon = styled(FontAwesomeIcon)`
//   font-size: 3rem;
//   margin-bottom: 15px;
//   color: #fff;
// `;

// const FloorText = styled.h2`
//   font-size: 1.8rem;
//   font-weight: bold;
//   color: #fff;
//   margin-top: 10px;
//   text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
// `;

// export const FloorSelection = () => {
//   const floors = [1, 2, 3];
//   return (
//     <PageContainer className='floor-selection-container'>
//       <PageTitle>Choose Your Parking Floor</PageTitle>
//       <FloorContainer>
//         {floors.map((floor) => (
//           <FloorCard key={floor} to={`/parking/${floor}`}>
//             <FloorIcon icon={faBuilding} />
//             <FloorText>Floor {floor}</FloorText>
//           </FloorCard>
//         ))}
//       </FloorContainer>
//     </PageContainer>
//   );
// };

//     parkingmap.js
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCar, faRoad } from "@fortawesome/free-solid-svg-icons";

// // Styled components
// const parkingMapContainer = styled.div`
//   padding: 30px;
//   background-color: #f7f7f7;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const header = styled.header`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px 40px;
//   background-color: #23262b;
//   color: white;
//   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1000;
// `;

// const title = styled.h1`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin: 0;
//   color: #fff;
// `;

// const slotGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 20px;
//   width: 100%;
//   max-width: 1400px;
//   margin-top: 80px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const slotCard = styled.div`
//   position: relative;
//   background: ${(props) => (props.available ? "#96e6a1" : "#f1c4c4")};
//   color: #333;
//   border-radius: 12px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
//   transition: 0.3s ease;
//   overflow: hidden;
//   padding: 20px;
//   text-align: center;
//   height: 250px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   margin: 10px;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
//   }
// `;

// const slotTitle = styled.h3`
//   font-size: 1.3rem;
//   font-weight: 600;
//   color: #333;
//   margin-bottom: 10px;
// `;

// const slotInfo = styled.p`
//   font-size: 1.1rem;
//   color: ${(props) => (props.available ? "#555" : "#777")};
//   margin-bottom: 20px;
// `;

// const slotButton = styled.button`
//   display: inline-block;
//   background-color: ${(props) => (props.available ? "#388e3c" : "#e74c3c")};
//   color: white;
//   padding: 12px 20px;
//   border-radius: 6px;
//   font-size: 1rem;
//   font-weight: bold;
//   text-decoration: none;
//   transition: 0.3s ease;
//   width: 100%;

//   &:hover {
//     background-color: ${(props) => (props.available ? "#2e7d32" : "#c0392b")};
//     transform: scale(1.05);
//   }

//   ${(props) => !props.available && "pointer-events: none; opacity: 0.7;"}
// `;

// const availabilityIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   font-size: 2rem;
//   color: ${(props) => (props.available ? "#2e7d32" : "#c62828")};
//   z-index: 10;
//   pointer-events: none;
// `;

// export const ParkingMap = () => {
//   const { floorNumber } = useParams(); // Get the floor number from the URL
//   const [slots, setSlots] = useState({
//     1: [
//       { id: 1, title: "Slot A", info: "Near Lift", available: true, booked: false },
//       { id: 2, title: "Slot B", info: "Near Exit", available: false, booked: true },
//       { id: 3, title: "Slot C", info: "Near Ramp", available: true, booked: false },
//       { id: 4, title: "Slot D", info: "Near Stairs", available: true, booked: false },
//       { id: 5, title: "Slot E", info: "Near Elevator", available: false, booked: true },
      
//     ],
//     2: [
//       { id: 10, title: "Slot F", info: "Near Ramp", available: true, booked: false },
//       { id: 11, title: "Slot G", info: "Near Wall", available: false, booked: true },
//       { id: 12, title: "Slot H", info: "Near Emergency Exit", available: true, booked: false },
//       { id: 13, title: "Slot I", info: "Near Elevator", available: true, booked: false },
//       { id: 14, title: "Slot J", info: "Near Lift", available: true, booked: false },
      
//     ],
//     3: [
//       { id: 19, title: "Slot K", info: "Near Lift", available: true, booked: false },
//       { id: 20, title: "Slot L", info: "Near Exit", available: true, booked: false },
//       { id: 21, title: "Slot M", info: "Near Emergency Exit", available: false, booked: true },
//       { id: 22, title: "Slot N", info: "Near Wall", available: true, booked: false },
//       { id: 23, title: "Slot P", info: "Near Ramp", available: false, booked: true },
      
//     ],
//   });

//   const floorSlots = slots[floorNumber] || []; // Get the slots for the selected floor

//   const handleSlotClick = (slotId) => {
//     setSlots((prevSlots) => {
//       const updatedSlots = { ...prevSlots };
//       const updatedFloor = updatedSlots[floorNumber].map((slot) => {
//         if (slot.id === slotId && slot.available && !slot.booked) {
//           return { ...slot, booked: true, available: false }; // Mark as booked and unavailable
//         }
//         return slot;
//       });

//       updatedSlots[floorNumber] = updatedFloor;
//       return updatedSlots;
//     });
//   };

//   return (
//     <parkingMapContainer>
//       <header>
//         <title>Parking Slots - Floor {floorNumber}</title>
//       </header>

//       <slotGrid>
//         {floorSlots.map((slot) => (
//           <slotCard key={slot.id} available={slot.available}>
//             <availabilityIcon available={slot.available}>
//               <FontAwesomeIcon icon={slot.available ? faRoad : faCar} />
//             </availabilityIcon>

//             <slotTitle>{slot.title}</slotTitle>
//             <slotInfo>{slot.info}</slotInfo>

//             {/* Button changes based on availability */}
//             <slotButton
//               available={slot.available && !slot.booked}
//               onClick={() => !slot.booked && handleSlotClick(slot.id)}
//             >
//               {slot.booked ? "Booked" : "Book Now"}
//             </slotButton>
//           </slotCard>
//         ))}
//       </slotGrid>
//     </parkingMapContainer>
//   );
// };

//       report.css
/*.report-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .split-layout {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    box-sizing: border-box;
  }
  
  .split-layout:hover {
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15); 
  }
  
  .left-pane {
    flex: 1;
    padding: 40px;
    background: linear-gradient(to bottom right, #eacda3, #d6ae7b); 
    color: #4a4a4a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .left-pane h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2.8rem;
    margin-bottom: 10px;
    color: #3c3c3c;
  }
  
  .left-pane p {
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    margin-bottom: 20px;
  }
  
  .illustration {
    background-image: url("https://ngf132.com/assets/avator/upload/7721584393f3065ab-babd-4f59-863f-e455e44b62f8jpeg.jpeg.jpeg");
    background-size: contain;
    background-repeat: no-repeat;
    height: 50%;
    width: 100%;
   
  }
  

  .right-pane {
    flex: 1;
    padding: 30px;
    background: #fefefe;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .report-form h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    color: #ba5d57; 
    margin-bottom: 20px;
  }
  
  .btn-highlight {
    background: linear-gradient(to right, #ba5d57, #f4a261);
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 1.1rem;
    transition: background 0.3s ease, transform 0.2s ease;
  }
  
  .btn-highlight:hover {
    background: linear-gradient(to right, #f4a261, #ba5d57);
    transform: translateY(-2px);
  }
  
  .alert-success {
    background-color: #eaf6ec;
    color: #25603f;
    font-family: "Poppins", sans-serif;
    border-radius: 10px;
    padding: 15px;
  }
  .report-form label {
    margin-bottom: 8px; 
    font-weight: bold;  
  }
  
  
  .report-form .form-control {
    margin-bottom: 20px; 
    border-radius: 8px;
  }
  
   
  .report-form .form-control {
    padding: 12px; 
  }
  
.text-danger {
    color: #ff3737;
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
    margin-top: 5px;
  }
  
 
  .report-form .form-group input:invalid,
  .report-form .form-group select:invalid,
  .report-form .form-group textarea:invalid {
    border-color: #e74c3c; 
    background-color: #ffe6e6; 
  }
  
 
  .report-form button:disabled {
    background-color: #ddd; 
    cursor: not-allowed;
  }
  
  .report-form button:focus {
    outline: none; 
    box-shadow: 0 0 5px rgba(235, 87, 87, 0.6); 
  }
  .report-form {
    border: 1px solid #ddd; 
    border-radius: 12px;
    padding:20px;
  }*/

//  report.js
/*import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Report.css";

export const ReportPage = () => {
  const [report, setReport] = useState({
    category: "",
    description: "",
    image: null,
  });
  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const handleImageUpload = (e) => {
    setReport({ ...report, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

  if (!report.category) {
    newErrors.category = "Please select an issue category.";
  }

  if (!report.description) {
    newErrors.description = "Please provide a description of the issue.";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return; // Stop submission if there are errors
  }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset confirmation
  };

  return (
    <div className="report-page">
      <div className="split-layout">
       
        <div className="left-pane">
          <h1>Need Help?</h1>
          <p>Have an issue with your parking? Report it instantly, and we will handle it promptly.</p>
          <div className="illustration"></div>
        </div>

       
        <div className="right-pane">
          <form onSubmit={handleSubmit} className="report-form">
            <h2>Report an Issue</h2>
            <div className="form-group mb-4">
              <label htmlFor="category">Select Issue Category</label>
              <select
                id="category"
                name="category"
                className="form-control"
                value={report.category}
                onChange={handleInputChange}
              >
                <option value="">Select...</option>
                <option value="Illegal Parking">Illegal Parking</option>
                <option value="Slot Unavailable">Slot Unavailable</option>
                <option value="Other">Other</option>
              </select>
              {errors.category && <div className="text-danger mt-2">{errors.category}</div>}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="description">Details</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                rows="5"
                placeholder="Please describe the issue in detail..."
                value={report.description}
                onChange={handleInputChange}
              ></textarea>
              {errors.description && <div className="text-danger mt-2">{errors.description}</div>}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="image">Upload Evidence (Optional)</label>
              <input
                type="file"
                id="image"
                name="image"
                className="form-control"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <button type="submit" className="btn btn-highlight btn-block">
              Submit Report
            </button>
          
          {submitted && (
            <div className="alert alert-success mt-4">
              Report submitted successfully! Our team has been notified.
            </div>
          )}
            </form>
        </div>
      </div>
    </div>
  );
};*/

//       smartparinglogin.js
/*import React, { useState } from 'react';
import './SmartParkingLogin.css'
export const LoginForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);
   
    const handleSignInSubmit = (e) => {
      e.preventDefault();
      // Handle sign-in logic here
    };
  
    const handleSignUpSubmit = (e) => {
      e.preventDefault();
      // Handle sign-up logic here
    };
  
    return (
      <div className="page-container">
        
        <div className="left-section">
        <div class="left-side">
        
          <h1>Smart Parking System</h1>
          <div class="decorative-line"></div>
          <div class="tagline">Effortless Parking, Just a Tap Away</div>
        </div>
        </div>
  
       
        <div className="right-section">
          <div className="login-form-container">
          
            <div className="auth-toggle">
            <a
                href="#"
                onClick={() => setIsSignUp(false)}
                className={!isSignUp ? 'active' : ''}
              >
                Sign In
              </a>
              <a
                href="#"
                onClick={() => setIsSignUp(true)}
                className={isSignUp ? 'active' : ''} 
              >
                Sign Up
              </a>
            </div>
  
          
            {!isSignUp ? (
              <form onSubmit={handleSignInSubmit} className="sign-in-form">
                <div className="form-group">
                  <input type="email" id="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="password" id="password" placeholder="Password" required />
                </div>
                <button type="submit" className="btn-sign-in">Sign In</button>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </form>
            ) : (
              // Sign Up Form
              <form onSubmit={handleSignUpSubmit} className="sign-up-form">
                <div className="form-group">
                  <input type="text" id="fullName" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" id="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="password" id="password" placeholder="Password" required />
                </div>
                <div className="form-group">
                  <input type="password" id="confirmPassword" placeholder="Confirm Password" required />
                </div>
                <button type="submit" className="btn-sign-up">Sign Up</button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  };*/
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Route, Navigate,Outlet } from 'react-router-dom'; 
// import './SmartParkingLogin.css'

// const api = axios.create({ baseURL: 'http://localhost:3001' });

// export const PrivateRoute = () => {
//   const token = localStorage.getItem('token'); // Check for token (authentication logic)
//   return token ? <Outlet /> : <Navigate to="/" replace />;
// };

// export const LoginForm = () => {
//   const navigate = useNavigate();
//     const [isSignUp, setIsSignUp] = useState(false);
//     const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [token, setToken] = useState('');
  
    // const handleSignInSubmit = async (e) => {
    //   e.preventDefault();
    //   setLoading(true);
    //   try {
    //     const response = await api.post('/api/signin', {
    //       email,
    //       password,
    //     });
    //     console.log(response.data);
    //     navigate('/home'); // Add this line to navigate to the home page after sign in
    //   } catch (error) {
    //     setError(error.response.data.message);
    //   }
    //   finally {
    //     setLoading(false);
    //   }
    // };
  
    // const handleSignUpSubmit = async (e) => {
    //   e.preventDefault();
    //   setLoading(true);
    //   if (password !== confirmPassword) {
    //     setError('Passwords do not match');
    //     return;
    //   }
    //   try {
    //     const response = await api.post('/api/signup', {
    //       fullName,
    //       email,
    //       password,
    //     });
    //     console.log(response.data);
    //   } catch (error) {
    //     setError(error.response.data.message);
    //   }
    //   finally {
    //     setLoading(false);
    //   }
    // };

  //   const handleSignInSubmit = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     try {
  //       const response = await api.post('/api/signin', { email, password });
  //       const token = response.data.token;
  //       localStorage.setItem('token', token);
  //       setToken(token);
  //       navigate('/private');
  //     } catch (error) {
  //       setError(error.response.data.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   const handleSignUpSubmit = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     if (password !== confirmPassword) {
  //       setError('Passwords do not match');
  //       return;
  //     }
  //     try {
  //       const response = await api.post('/api/signup', { fullName, email, password });
  //       const token = response.data.token;
  //       localStorage.setItem('token', token);
  //       setToken(token);
  //       navigate('/private');
  //     } catch (error) {
  //       setError(error.response.data.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   axios.interceptors.request.use((config) => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   });
  
  
  //   return (
     
  //     <div className="page-container login-page">
        
  //       <div className="left-section">
  //       <div class="left-side">
        
  //         <h1>Smart Parking System</h1>
  //         <div class="decorative-line"></div>
  //         <div class="tagline">Effortless Parking, Just a Tap Away</div>
  //       </div>
  //       </div>
  
       
  //       <div className="right-section">
  //         <div className="login-form-container">
          
  //           <div className="auth-toggle">
  //           <a
  //               href="#"
  //               onClick={() => setIsSignUp(false)}
  //               className={!isSignUp ? 'active' : ''}
  //             >
  //               Sign In
  //             </a>
  //             <a
  //               href="#"
  //               onClick={() => setIsSignUp(true)}
  //               className={isSignUp ? 'active' : ''} 
  //             >
  //               Sign Up
  //             </a>
  //           </div>
  
          
  //           {!isSignUp ? (
  //             <form onSubmit={handleSignInSubmit} className="sign-in-form">
  //               <div className="form-group">
  //                 <input type="email" id="email" placeholder="Email" required 
  //                 value={email} onChange={(e)=> setEmail(e.target.value)}/>
  //               </div>
  //               <div className="form-group">
  //                 <input type="password" id="password" placeholder="Password" required 
  //                 value={password} onChange={(e)=> setPassword(e.target.value)}/>
  //               </div>
  //               <button type="submit" className="btn-sign-in">Sign In</button>
  //               <a href="#" className="forgot-password">Forgot Password?</a>
  //               {error && <p style={{ color: 'red' }}>{error}</p>}
  //             </form>
  //           ) : (
  //             // Sign Up Form
  //             <form onSubmit={handleSignUpSubmit} className="sign-up-form">
  //               <div className="form-group">
  //                 <input type="text" id="fullName" placeholder="Full Name" required 
  //                 value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
  //               </div>
  //               <div className="form-group">
  //                 <input type="email" id="email" placeholder="Email" required
  //                 value={email} onChange={(e)=> setEmail(e.target.value)} />
  //               </div>
  //               <div className="form-group">
  //                 <input type="password" id="password" placeholder="Password" required 
  //                 value={password} onChange={(e)=> setPassword(e.target.value)}/>
  //               </div>
  //               <div className="form-group">
  //                 <input type="password" id="confirmPassword" placeholder="Confirm Password" required 
  //                 value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
  //               </div>
  //               <button type="submit" className="btn-sign-up">Sign Up</button>
  //               {error && <p style={{ color: 'red' }}>{error}</p>}
  //             </form>
  //           )}
  //         </div>
  //       </div>
  //     </div>
     
  //   );
  // };

  //           app.js
  // import { Sidebar } from './sidebar.js';
//  import React,{useState} from 'react';
//  import { BrowserRouter , Route, Routes } from 'react-router-dom'; // Import Router and Routes
//  import {SearchArea} from './SearchArea.js';
//  import {SmartParkingInfo} from './SmartParkingContent.js';
//  import { VehicleSelector } from './VehicleSelector.js';
// import {LoginForm} from './SmartParkingLogin.js';
// import { ProfileInfo } from './profile.js';
// import { FeedbackPage } from './feedback.js';
// import { ReportPage } from './Report.js';
// import { ParkingMap } from './ParkingMap.js';
// import { FloorSelection } from './FloorSelection.js';
// import { ErrorPage } from './ErrorPage.js';
// import { PrivateRoute } from './SmartParkingLogin.js';


// function Project(){
//   const [selectedVehicle, setSelectedVehicle] = useState('Car');
//    return(
//     <BrowserRouter>
//      <Routes>
//         <Route path="/" element={<LoginForm />} />
//         <Route path="/private/*" element={
//   <PrivateRoute>
//     <PrivateRoutes />
//   </PrivateRoute>
// } />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//   </BrowserRouter>
// );
// }
 
// export default Project;

// const PrivateRoutes = () => {
//   return (
//     <Routes>
//       <Route index element={
//         <div>
//           <Sidebar />
//           <div>
//             <SearchArea />
//             <VehicleSelector />
//             <SmartParkingInfo />
//           </div>
//         </div>
//       } />
//       <Route path="parking" element={
//         <div>
//           <Sidebar />
//           <FloorSelection />
//         </div>
//       } />
//       <Route path="parking/:floorNumber" element={
//         <div>
//           <Sidebar />
//           <ParkingMap />
//         </div>
//       } />
//       <Route path="profile" element={
//         <div>
//           <Sidebar />
//           <ProfileInfo />
//         </div>
//       } />
//       <Route path="help" element={
//         <div>
//           <Sidebar />
//           <FeedbackPage />
//         </div>
//       } />
//       <Route path="feedback" element={
//         <div>
//           <Sidebar />
//           <FeedbackPage />
//         </div>
//       } />
//       <Route path="report" element={
//         <div>
//           <Sidebar />
//           <ReportPage />
//         </div>
//       } />
//       <Route path="logout" element={<LoginForm />} />
//     </Routes>
//   );
// };


/*const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={
        <div>
          <Sidebar />
          <div>
            <SearchArea />
            <VehicleSelector />
            <SmartParkingInfo />
          </div>
        </div>
      } />
      <Route path="/parking" element={
        <div>
          <Sidebar />
          <FloorSelection />
        </div>
      } />
      <Route path="/parking/:floorNumber" element={
          <div>
            <Sidebar />
            <ParkingMap />
          </div>
        } />
        <Route path="/profile" element={
          <div>
            <Sidebar />
            <ProfileInfo />
          </div>
        } />
        <Route path="/help" element={
          <div>
            <Sidebar />
            <FeedbackPage />
          </div>
        } />
        <Route path="/feedback" element={
          <div>
            <Sidebar />
            <FeedbackPage />
          </div>
        } />
        <Route path="/report" element={
          <div>
            <Sidebar />
            <ReportPage />
          </div>
        } />
        <Route path="/logout" element={<LoginForm />} />
      </Routes>
  );
};*/


 /*<div className="app">
      <LoginForm />
    </div>*/
   /* <Router>
    <div className="app">
      <div style={{display:'flex'}}>
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<>
            <SearchArea /><VehicleSelector
             selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} />
             <SmartParkingInfo /></>} />
          </Routes>
          </main>
          </div>
          </div>
     </Router>*/
    // <Router>
    //   <div>
    //     <Sidebar />
    //     <ProfileInfo />
    //   </div>
    // </Router>
   /* <Router>
      <div>
      <Sidebar />
      <FeedbackPage />
      </div>
    </Router>*/
    /*<Router>
      <div>
        <Sidebar />
        <ReportPage />
      </div>
    </Router>*/
   /* <Router>
      <Routes>
        <Route path="/" element={<FloorSelection />} />
        <Route path="/floor/:floorNumber" element={<ParkingMap />} />
      </Routes>

      <Sidebar />
    </Router>*/

    // import { Sidebar } from './sidebar.js';
// import React from 'react';
// import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
// import { LoginForm } from './SmartParkingLogin.js';
// import { SearchArea } from './SearchArea.js';
// import { SmartParkingInfo } from './SmartParkingContent.js';
// import { VehicleSelector } from './VehicleSelector.js';
// import { ProfileInfo } from './profile.js';
// import { FeedbackPage } from './feedback.js';
// import { ReportPage } from './Report.js';
// import { ParkingMap } from './ParkingMap.js';
// import { FloorSelection } from './FloorSelection.js';
// import { ErrorPage } from './ErrorPage.js';
// import { PrivateRoute } from './SmartParkingLogin.js';

// const PrivateRoutesLayout = () => (
//   <div>
//     <Sidebar />
//     <div className="content-area">
//       <Outlet /> {/* Dynamically renders nested routes */}
//     </div>
//   </div>
// );

// const Project = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginForm />} /> {/* Public Route */}
//         <Route path="/private/*" element={<PrivateRoute />}>
//           <Route element={<PrivateRoutesLayout />}>
//             <Route
//               index
//               element={
//                 <>
//                   <SearchArea />
//                   <VehicleSelector />
//                   <SmartParkingInfo />
//                 </>
//               }
//             />
//             <Route path="parking" element={<FloorSelection />} />
//             <Route path="parking/:floorNumber" element={<ParkingMap />} />
//             <Route path="profile" element={<ProfileInfo />} />
//             <Route path="feedback" element={<FeedbackPage />} />
//             <Route path="report" element={<ReportPage />} />
//             <Route path="logout" element={<LoginForm />} />
//           </Route>
//         </Route>
//         <Route path="*" element={<ErrorPage />} /> {/* Fallback for unmatched routes */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Project;


//parkingmap.js
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCar, faRoad } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// // Styled components
// const ParkingMapContainer = styled.div`
//   padding: 20px;
//   background-color: #f7f7f7;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Header = styled.header`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px 30px;
//   background: linear-gradient(135deg, #ff9a8b, #ff5847);
//   color: white;
//   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     padding: 10px 20px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   margin: 0;
//   color: #fff;

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// const SlotGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 15px;
//   width: 100%;
//   max-width: 1400px;
//   margin-top: 80px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const SlotCard = styled.div`
//   position: relative;
//   background: ${(props) => (props.available ? "#96e6a1" : "#f1c4c4")};
//   color: #333;
//   border-radius: 12px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
//   transition: 0.3s ease;
//   overflow: hidden;
//   padding: 20px;
//   text-align: center;
//   height: 200px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
//   }

//   @media (max-width: 480px) {
//     height: 160px;
//     padding: 15px;
//   }
// `;

// const SlotTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 600;
//   margin-bottom: 5px;

//   @media (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;

// const SlotInfo = styled.p`
//   font-size: 1rem;
//   color: ${(props) => (props.available ? "#555" : "#777")};
//   margin-bottom: 15px;

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//   }
// `;

// const SlotButton = styled.button`
//   background-color: ${(props) => (props.available ? "#388e3c" : "#e74c3c")};
//   color: white;
//   padding: 10px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   font-weight: bold;
//   transition: 0.3s ease;
//   width: 100%;

//   &:hover {
//     background-color: ${(props) => (props.available ? "#2e7d32" : "#c0392b")};
//     transform: scale(1.05);
//   }

//   ${(props) => !props.available && "pointer-events: none; opacity: 0.7;"}

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//   }
// `;

// const AvailabilityIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   font-size: 1.5rem;
//   color: ${(props) => (props.available ? "#2e7d32" : "#c62828")};

//   @media (max-width: 480px) {
//     font-size: 1.2rem;
//   }
// `;

// export const ParkingMap = () => {
//   const params = useParams();
//   const { floorNumber } = params; // Get the floor number from the URL
//   const [slots, setSlots] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   //const floorSlots = slots[floorNumber] || []; // Get the slots for the selected floor

//   useEffect(() => {
//     const fetchSlots = async () => {
//       try {
//         const floorNumber = parseInt(params.floorNumber);
//       if (isNaN(floorNumber) || floorNumber < 1) {
//         setError("Invalid floor number");
//         return;
//       }
//         const response = await axios.get(`http://localhost:3001/api/smart-parking-system/parkingslots/${floorNumber}`);
//         setSlots(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//       finally {
//         setLoading(false);
//       }
//     };
//     fetchSlots();
//   }, [params.floorNumber]);

//   const handleSlotClick = (slotId) => {
//     setSlots((prevSlots) => {
//       const updatedSlots = { ...prevSlots };
//       const updatedFloor = updatedSlots[floorNumber].map((slot) => {
//         if (slot.id === slotId && slot.available && !slot.booked) {
//           return { ...slot, booked: true, available: false }; // Mark as booked and unavailable
//         }
//         return slot;
//       });

//       updatedSlots[floorNumber] = updatedFloor;
//       return updatedSlots;
//     });
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }


//   return (
//     <ParkingMapContainer>
//       <Header>
//         <Title>Parking Slots - Floor {floorNumber}</Title>
//       </Header>

//       <SlotGrid>
//         {slots.map((slot) => (
//           <SlotCard key={slot._id} available={slot.available}>
//             <AvailabilityIcon available={slot.available}>
//               <FontAwesomeIcon icon={slot.available ? faRoad : faCar} />
//             </AvailabilityIcon>

//             <SlotTitle>{slot.title}</SlotTitle>
//             <SlotInfo>{slot.info}</SlotInfo>

//             <SlotButton
//               available={slot.available && !slot.booked}
//               onClick={() => !slot.booked && handleSlotClick(slot._id)}
//             >
//               {slot.booked ? "Booked" : "Book Now"}
//             </SlotButton>
//           </SlotCard>
//         ))}
//       </SlotGrid>
//     </ParkingMapContainer>
//   );
// };

//app.js
// import { Sidebar } from './sidebar.js';
// import React,{useState} from 'react';
// import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'; // Import Router and Routes
// import {SearchArea} from './SearchArea.js';
// import {SmartParkingInfo} from './SmartParkingContent.js';
// import { VehicleSelector } from './VehicleSelector.js';
// import { LoginForm } from './SmartParkingLogin.js';
// import { ProfileInfo } from './profile.js';
// import { FeedbackPage } from './feedback.js';
// import { ReportPage } from './Report.js';
// import { ParkingMap } from './ParkingMap.js';
// import { FloorSelection } from './FloorSelection.js';
// import { ErrorPage } from './ErrorPage.js';

// function Project() {
//   const [selectedVehicle, setSelectedVehicle] = useState('Car');

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginForm />} />
//         <Route
//           path="/home"
//           element={
//               <div>
//                 <Sidebar />
//                 <div>
//                   <SearchArea />
//                   <VehicleSelector />
//                   <SmartParkingInfo />
//                 </div>
//               </div>
//           }
//         />
//         <Route
//           path="/parking"
//           element={
//               <div>
//                 <Sidebar />
//                 <FloorSelection />
//               </div>
//           }
//         />
//         <Route
//           path="/floor/:floorNumber"
//           element={
//               <div>
//                 <Sidebar />
//                 <ParkingMap />
//               </div>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//               <div>
//                 <Sidebar />
//                 <ProfileInfo />
//               </div>
//           }
//         />
//         <Route
//           path="/help"
//           element={
//               <div>
//                 <Sidebar />
//                 <FeedbackPage />
//               </div>
//           }
//         />
//         <Route
//           path="/feedback"
//           element={
//               <div>
//                 <Sidebar />
//                 <FeedbackPage />
//               </div>
//           }
//         />
//         <Route
//           path="/report"
//           element={
//               <div>
//                 <Sidebar />
//                 <ReportPage />
//               </div>
//           }
//         />
//         <Route path="/logout" element={<LoginForm />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Project;

//login page
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; 
// import './SmartParkingLogin.css'

// const api = axios.create({ baseURL: 'http://localhost:3001' });
// export const LoginForm = () => {
//   const navigate = useNavigate();
//     const [isSignUp, setIsSignUp] = useState(false);
//     const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
  
//     const handleSignInSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       // Handle sign-in logic here
//       try {
//         const response = await api.post('/api/signin', {
//           email,
//           password,
//         });
//         console.log(response.data);
//         navigate('/home'); // Add this line to navigate to the home page after sign in
//       } catch (error) {
//         setError(error.response.data.message);
//       }
//       finally {
//         setLoading(false);
//       }
//     };
  
//     const handleSignUpSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       // Handle sign-up logic here
//       if (password !== confirmPassword) {
//         setError('Passwords do not match');
//         return;
//       }
//       try {
//         const response = await api.post('/api/signup', {
//           fullName,
//           email,
//           password,
//         });
//         console.log(response.data);
//       } catch (error) {
//         setError(error.response.data.message);
//       }
//       finally {
//         setLoading(false);
//       }
//     };
  
//     return (
//       <div className="page-container login-page">
        
//         <div className="left-section">
//         <div class="left-side">
        
//           <h1>Smart Parking System</h1>
//           <div class="decorative-line"></div>
//           <div class="tagline">Effortless Parking, Just a Tap Away</div>
//         </div>
//         </div>
  
       
//         <div className="right-section">
//           <div className="login-form-container">
          
//             <div className="auth-toggle">
//             <a
//                 href="#"
//                 onClick={() => setIsSignUp(false)}
//                 className={!isSignUp ? 'active' : ''}
//               >
//                 Sign In
//               </a>
//               <a
//                 href="#"
//                 onClick={() => setIsSignUp(true)}
//                 className={isSignUp ? 'active' : ''} 
//               >
//                 Sign Up
//               </a>
//             </div>
  
          
//             {!isSignUp ? (
//               <form onSubmit={handleSignInSubmit} className="sign-in-form">
//                 <div className="form-group">
//                   <input type="email" id="email" placeholder="Email" required 
//                   value={email} onChange={(e)=> setEmail(e.target.value)}/>
//                 </div>
//                 <div className="form-group">
//                   <input type="password" id="password" placeholder="Password" required 
//                   value={password} onChange={(e)=> setPassword(e.target.value)}/>
//                 </div>
//                 <button type="submit" className="btn-sign-in">Sign In</button>
//                 <a href="#" className="forgot-password">Forgot Password?</a>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//               </form>
//             ) : (
//               // Sign Up Form
//               <form onSubmit={handleSignUpSubmit} className="sign-up-form">
//                 <div className="form-group">
//                   <input type="text" id="fullName" placeholder="Full Name" required 
//                   value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
//                 </div>
//                 <div className="form-group">
//                   <input type="email" id="email" placeholder="Email" required
//                   value={email} onChange={(e)=> setEmail(e.target.value)} />
//                 </div>
//                 <div className="form-group">
//                   <input type="password" id="password" placeholder="Password" required 
//                   value={password} onChange={(e)=> setPassword(e.target.value)}/>
//                 </div>
//                 <div className="form-group">
//                   <input type="password" id="confirmPassword" placeholder="Confirm Password" required 
//                   value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
//                 </div>
//                 <button type="submit" className="btn-sign-up">Sign Up</button>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation, Navigate,Outlet } from 'react-router-dom'; 
// import './SmartParkingLogin.css'


// const api = axios.create({ baseURL: 'http://localhost:3001' });


// export const PrivateRoute = () => {
//   const token = localStorage.getItem('token'); // Authentication token

//   if (!token) {
//     // Redirect to login page with an optional message
//     return <Navigate to="/" replace />;
//   }

//   // If authenticated, render child routes
//   return <Outlet />;
// };

// export const LoginForm = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { message } = location.state || {};
//     const [isSignUp, setIsSignUp] = useState(false);
//     const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
  

//     const handleSignInSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       try {
//         const response = await api.post('/api/signin', { email, password });
//         const token = response.data.token;
//         localStorage.setItem('token', token);
//         navigate('/private/home');
//        } catch (error) {
//         setError(error.response?.data?.message || 'Sign In failed. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     const handleSignUpSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       if (password !== confirmPassword) {
//         setError('Passwords do not match');
//         setLoading(false);
//         return;
//       }
     
//       try {
//         const response = await api.post('/api/signup', { fullName, email, password });
//         const token = response.data.token;
//         localStorage.setItem('token', token);
//         navigate('/private/home');
//       } catch (error) {
//         setError(error.response?.data?.message || 'Sign Up failed. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     // axios.interceptors.request.use((config) => {
//     //   const token = localStorage.getItem('token');
//     //   if (token) {
//     //     config.headers.Authorization = `Bearer ${token}`;
//     //   }
//     //   return config;
//     // });
  
  
//     return (
     
//       <div className="page-container login-page">
        
//         <div className="left-section">
//         <div class="left-side">
        
//           <h1>Smart Parking System</h1>
//           <div class="decorative-line"></div>
//           <div class="tagline">Effortless Parking, Just a Tap Away</div>
//         </div>
//         </div>
  
       
//         <div className="right-section">
//           <div className="login-form-container">
          
//             <div className="auth-toggle">
//             <a
//                 href="#"
//                 onClick={() => setIsSignUp(false)}
//                 className={!isSignUp ? 'active' : ''}
//               >
//                 Sign In
//               </a>
//               <a
//                 href="#"
//                 onClick={() => setIsSignUp(true)}
//                 className={isSignUp ? 'active' : ''} 
//               >
//                 Sign Up
//               </a>
//             </div>
  
          
//             {!isSignUp ? (
//               <form onSubmit={handleSignInSubmit} className="sign-in-form">
//                 <div className="form-group">
//                   <input type="email" id="email" placeholder="Email" required 
//                   value={email} onChange={(e)=> setEmail(e.target.value)}/>
//                 </div>
//                 <div className="form-group">
//                   <input type="password" id="password" placeholder="Password" required 
//                   value={password} onChange={(e)=> setPassword(e.target.value)}/>
//                 </div>
//                 <button type="submit" className="btn-sign-in">Sign In</button>
//                 <a href="#" className="forgot-password">Forgot Password?</a>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//               </form>
//             ) : (
//               // Sign Up Form
//               <form onSubmit={handleSignUpSubmit} className="sign-up-form">
//                 <div className="form-group">
//                   <input type="text" id="fullName" placeholder="Full Name" required 
//                   value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
//                 </div>
//                 <div className="form-group">
//                   <input type="email" id="email" placeholder="Email" required
//                   value={email} onChange={(e)=> setEmail(e.target.value)} />
//                 </div>
//                 <div className="form-group">
//                   <input type="password" id="password" placeholder="Password" required 
//                   value={password} onChange={(e)=> setPassword(e.target.value)}/>
//                 </div>
//                 <div className="form-group">
//                   <input type="password" id="confirmPassword" placeholder="Confirm Password" required 
//                   value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
//                 </div>
//                 <button type="submit" className="btn-sign-up">Sign Up</button>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
     
//     );
//   };

//server side code
// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const cors = require('cors');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/smart-parking-system', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((error) => console.error('Failed to connect to MongoDB:', error));

// // Add middleware functions
// app.use(express.json());
// app.use(cors());

// // Define User model
// const User = mongoose.model('User', {
//   fullName: String,
//   email: String,
//   password: String,
// });

// // API routes
// app.post('/api/signin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     res.json({ message: 'Signed in successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// app.post('/api/signup', async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }
//     const user = new User({ fullName, email, password: hashedPassword });
//     await user.save();
//     res.json({ message: 'Signed up successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Start server
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();
// const app = express();

// // Check if the SECRET_KEY environment variable is set
// if (!process.env.SECRET_KEY) {
//   console.error('SECRET_KEY environment variable is not set');
//   process.exit(1);
// }

// // Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/smart-parking-system', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((error) => console.error('Failed to connect to MongoDB:', error));

// // Add middleware functions
// app.use(express.json());
// app.use(cors());

// // Define User model
// const User = mongoose.model('User', {
//   fullName: String,
//   email: String,
//   password: String,
// });

// // Function to generate token
// const generateToken = (user) => {
//   const payload = {
//     userId: user._id,
//     email: user.email,
//   };
//   const token = jwt.sign(payload, process.env.SECRET_KEY, {
//     expiresIn: '1h',
//   });
//   return token;
// };

// // Function to authenticate token
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.header('Authorization');
//   if (!authHeader) return res.status(401).json({ message: 'Access denied' });
//   const token = authHeader.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Access denied' });
//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid token' });
//   }
// };

// // API routes
// app.post('/api/signin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     const token = generateToken(user);
//     res.json({ message: 'Signed in successfully', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// app.post('/api/signup', async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }
//     const user = new User({ fullName, email, password: hashedPassword });
//     await user.save();
//     const token = generateToken(user);
//     res.json({ message: 'Signed up successfully', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Protected route
// app.get('/api/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'Hello from protected route!' });
// });

// // Start server
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
   


// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();
// const app = express();

// // Check if the SECRET_KEY environment variable is set
// if (!process.env.SECRET_KEY) {
//   console.error('SECRET_KEY environment variable is not set');
//   process.exit(1);
// }

// // Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/smart-parking-system', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((error) => console.error('Failed to connect to MongoDB:', error));

// // Add middleware functions
// app.use(express.json());
// app.use(cors());

// // Define User model
// const User = mongoose.model('User', {
//   fullName: String,
//   email: String,
//   password: String,
// });

// const Admin = mongoose.model('Admin', {
//   fullName: String,
//   email: String,
//   password: String,
// });

// // Function to generate token
// const generateToken = (user) => {
//   const payload = {
//     userId: user._id,
//     email: user.email,
//   };
//   const token = jwt.sign(payload, process.env.SECRET_KEY, {
//     expiresIn: '1h',
//   });
//   return token;
// };

// // Function to authenticate token
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.header('Authorization');
//   if (!authHeader) return res.status(401).json({ message: 'Access denied' });
//   const token = authHeader.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Access denied' });
//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid token' });
//   }
// };

// // API routes
// app.post('/api/signin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     let user = await User.findOne({ email });
//     if (!user) {
//       user = await Admin.findOne({ email });
//       if (!user) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
//       const isValidPassword = await bcrypt.compare(password, user.password);
//       if (!isValidPassword) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
//       const token = generateToken(user);
//       res.json({ message: 'Signed in successfully', token, role: 'admin' });
//     } else {
//       const isValidPassword = await bcrypt.compare(password, user.password);
//       if (!isValidPassword) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
//       const token = generateToken(user);
//       res.json({ message: 'Signed in successfully', token, role: 'user' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// app.post('/api/signup', async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }
//     const user = new User({ fullName, email, password: hashedPassword });
//     await user.save();
//     const token = generateToken(user);
//     res.json({ message: 'Signed up successfully', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Protected route
// app.get('/api/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'Hello from protected route!' });
// });


// // Start server
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


//report
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Report.css";


// export const ReportPage = () => {
//   const [report, setReport] = useState({
//     category: "",
//     description: "",
//     image: null,
//   });
//   const [errors, setErrors] = useState({});

//   const [submitted, setSubmitted] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setReport({ ...report, [name]: value });
//   };

//   const handleImageUpload = (e) => {
//     setReport({ ...report, image: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//   if (!report.category) {
//     newErrors.category = "Please select an issue category.";
//   }

//   if (!report.description) {
//     newErrors.description = "Please provide a description of the issue.";
//   }

//   if (Object.keys(newErrors).length > 0) {
//     setErrors(newErrors);
//     return; // Stop submission if there are errors
//   }

//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000); // Reset confirmation
//   };

//   return (
//     <div className="report-page">
//       <div className="split-layout">
//         {/* Left Pane: Visual Appeal */}
//         <div className="left-pane">
//           <h1>Need Help?</h1>
//           <p>Have an issue with your parking? Report it instantly, and we will handle it promptly.</p>
//           <div className="illustration"></div>
//         </div>

//         {/* Right Pane: Form */}
//         <div className="right-pane">
//           <form onSubmit={handleSubmit} className="report-form">
//             <h2>Report an Issue</h2>
//             <div className="form-group mb-4">
//               <label htmlFor="category">Select Issue Category</label>
//               <select
//                 id="category"
//                 name="category"
//                 className="form-control"
//                 value={report.category}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select...</option>
//                 <option value="Illegal Parking">Illegal Parking</option>
//                 <option value="Slot Unavailable">Slot Unavailable</option>
//                 <option value="Other">Other</option>
//               </select>
//               {errors.category && <div className="text-danger mt-2">{errors.category}</div>}
//             </div>
//             <div className="form-group mb-4">
//               <label htmlFor="description">Details</label>
//               <textarea
//                 id="description"
//                 name="description"
//                 className="form-control"
//                 rows="5"
//                 placeholder="Please describe the issue in detail..."
//                 value={report.description}
//                 onChange={handleInputChange}
//               ></textarea>
//               {errors.description && <div className="text-danger mt-2">{errors.description}</div>}
//             </div>
//             <div className="form-group mb-4">
//               <label htmlFor="image">Upload Evidence (Optional)</label>
//               <input
//                 type="file"
//                 id="image"
//                 name="image"
//                 className="form-control"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />
//             </div>
//             <button type="submit" className="btn btn-highlight btn-block">
//               Submit Report
//             </button>
          
//           {submitted && (
//             <div className="alert alert-success mt-4">
//               Report submitted successfully! Our team has been notified.
//             </div>
//           )}
//             </form>
//         </div>
//       </div>
//     </div>
//   );
// };

//parkingmap.js
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCar, faRoad } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// // Styled components
// const ParkingMapContainer = styled.div`
//   padding: 20px;
//   background-color: #f7f7f7;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Header = styled.header`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px 30px;
//   background: linear-gradient(135deg, #ff9a8b, #ff5847);
//   color: white;
//   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     padding: 10px 20px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   margin: 0;
//   color: #fff;

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// const SlotGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 15px;
//   width: 100%;
//   max-width: 1400px;
//   margin-top: 80px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const SlotCard = styled.div`
//   position: relative;
//   background: ${(props) => (props.available ? "#96e6a1" : "#f1c4c4")};
//   color: #333;
//   border-radius: 12px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
//   transition: 0.3s ease;
//   overflow: hidden;
//   padding: 20px;
//   text-align: center;
//   height: 200px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
//   }

//   @media (max-width: 480px) {
//     height: 160px;
//     padding: 15px;
//   }
// `;

// const SlotTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 600;
//   margin-bottom: 5px;

//   @media (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;

// const SlotInfo = styled.p`
//   font-size: 1rem;
//   color: ${(props) => (props.available ? "#555" : "#777")};
//   margin-bottom: 15px;

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//   }
// `;

// const SlotButton = styled.button`
//   background-color: ${(props) => (props.available ? "#388e3c" : "#e74c3c")};
//   color: white;
//   padding: 10px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   font-weight: bold;
//   transition: 0.3s ease;
//   width: 100%;

//   &:hover {
//     background-color: ${(props) => (props.available ? "#2e7d32" : "#c0392b")};
//     transform: scale(1.05);
//   }

//   ${(props) => !props.available && "pointer-events: none; opacity: 0.7;"}

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//   }
// `;

// const AvailabilityIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   font-size: 1.5rem;
//   color: ${(props) => (props.available ? "#2e7d32" : "#c62828")};

//   @media (max-width: 480px) {
//     font-size: 1.2rem;
//   }
// `;

// export const ParkingMap = () => {
//   const params = useParams();
//   const { floorNumber } = params; // Get the floor number from the URL
//   const [slots, setSlots] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   //const floorSlots = slots[floorNumber] || []; // Get the slots for the selected floor

//   useEffect(() => {
//     const fetchSlots = async () => {
//       try {
//         const floorNumber = parseInt(params.floorNumber);
//       if (isNaN(floorNumber) || floorNumber < 1) {
//         setError("Invalid floor number");
//         return;
//       }
//         const response = await axios.get(`http://localhost:3001/api/smart-parking-system/parkingslots/${floorNumber}`);
//         setSlots(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//       finally {
//         setLoading(false);
//       }
//     };
//     fetchSlots();
//   }, [params.floorNumber]);

//   const handleSlotClick = async (slotId) => {
//     try {
//       const response = await axios.post(`http://localhost:3001/api/parkingslots/${slotId}/book`, { slotId });
//       console.log(response.data);
//       const updatedSlots = slots.map((slot) => {
//         if (slot.slotId === slotId && slot.status === 'Available') {
//           return { ...slot, status: 'Booked' };
//         }
//         return slot;
//       });
//       setSlots(updatedSlots);
//     } catch (error) {
//       console.error(error);
//     }

//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }


//   return (
//     <ParkingMapContainer>
//       <Header>
//         <Title>Parking Slots - Floor {floorNumber}</Title>
//       </Header>

//       <SlotGrid>
//       {slots.map((slot) => (
//           <SlotCard key={slot.slotId} available={slot.status === 'Available'}>
//             <AvailabilityIcon available={slot.status === 'Available'}>
//               <FontAwesomeIcon icon={slot.status === 'Available' ? faRoad : faCar} />
//             </AvailabilityIcon>

//             <SlotTitle>{slot.slotId}</SlotTitle>
//             <SlotInfo>{slot.Proximity_to_landmarks}</SlotInfo>
//             <SlotButton
//               available={slot.status === 'Available'}
//               onClick={() => handleSlotClick(slot.slotId)}
//             >
//               {slot.status === 'Booked' ? 'Booked' : 'Book Now'}
//             </SlotButton>
//           </SlotCard>
//         ))}
//       </SlotGrid>
//     </ParkingMapContainer>
//   );
// };



// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCar, faRoad } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// // Styled components
// const ParkingMapContainer = styled.div`
//   padding: 20px;
//   background-color: #f7f7f7;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Header = styled.header`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px 30px;
//   background: linear-gradient(135deg, #ff9a8b, #ff5847);
//   color: white;
//   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     padding: 10px 20px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   margin: 0;
//   color: #fff;

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// const SlotGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 15px;
//   width: 100%;
//   max-width: 1400px;
//   margin-top: 80px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const SlotCard = styled.div`
//   position: relative;
//   background: ${(props) => (props.available ? "#96e6a1" : "#f1c4c4")};
//   color: #333;
//   border-radius: 12px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
//   transition: 0.3s ease;
//   overflow: hidden;
//   padding: 20px;
//   text-align: center;
//   height: ${(props) => (props.showMore ? "420px" : "320px")};
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//    height: auto;
//   overflow: visible;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
//   }

//   @media (max-width: 480px) {
//     height: ${(props) => (props.showMore ? "380px" : "280px")};
//     padding: 15px;
//   }
// `;

// const SlotTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 600;
//   margin-bottom: 5px;

//   @media (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;

// const SlotInfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap:5px;
//    flex-grow: 1;
// `;

// const SlotInfo = styled.p`
//   font-size: 1rem;
//   color: ${(props) => (props.available ? "#555" : "#777")};
//   margin-bottom: 15px;

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//   }
// `;

// const AdditionalInfo = styled.div`
//   display: none;
//   font-size: 0.9rem;
//   color: #666;
//   margin: 0px;

//   &.active {
//     display: block;
//   }
// `;

// const ViewMoreButton = styled.button`
//   background-color: transparent;
//   color: #337ab7;
//   border: none;
//   padding: 0;
//   font-size: 1.2rem;
//   cursor: pointer;
//   margin-bottom: 20px auto;
//   display: block;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SlotButton = styled.button`
//   background-color: ${(props) => (props.available ? "#388e3c" : "#e74c3c")};
//   color: white;
//   padding: 10px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   font-weight: bold;
//   transition: 0.3s ease;
//   width: 100%;

//   &:hover {
//     background-color: ${(props) => (props.available ? "#2e7d32" : "#c0392b")};
//     transform: scale(1.05);
//   }

//   ${(props) => !props.available && "pointer-events: none; opacity: 0.7;"}

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//   }
// `;

// const AvailabilityIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   font-size: 1.5rem;
//   color: ${(props) => (props.available ? "#2e7d32" : "#c62828")};

//   @media (max-width: 480px) {
//     font-size: 1.2rem;
//   }
// `;

// export const ParkingMap = () => {
//   const params = useParams();
//   const { floorNumber } = params; // Get the floor number from the URL
//   const [slots, setSlots] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  

//   //const floorSlots = slots[floorNumber] || []; // Get the slots for the selected floor

//   const handleViewMoreClick = (slotId) => {
//     setSlots((prevSlots) => {
//       const updatedSlots = prevSlots.map((slot) => {
//         if (slot.slotId === slotId) {
//           return { ...slot, showMore: !slot.showMore };
//         }
//         return slot;
//       });
//       return updatedSlots;
//     });
//   };

//   useEffect(() => {
//     const fetchSlots = async () => {
//       try {
//         const floorNumber = parseInt(params.floorNumber);
//       if (isNaN(floorNumber) || floorNumber < 1) {
//         setError("Invalid floor number");
//         return;
//       }
//         const response = await axios.get(`http://localhost:3001/api/smart-parking-system/parkingslots/${floorNumber}`);
//         setSlots(response.data.map((slot) => ({ ...slot, showMore: false })));
//       } catch (error) {
//         setError(error.message);
//       }
//       finally {
//         setLoading(false);
//       }
//     };
//     fetchSlots();
//   }, [params.floorNumber]);

//   const handleSlotClick = async (slotId) => {
//     try {
//       const response = await axios.post(`http://localhost:3001/api/parkingslots/${slotId}/book`, { slotId });
//       console.log(response.data);
//       const updatedSlots = slots.map((slot) => {
//         if (slot.slotId === slotId && slot.status === 'Available') {
//           return { ...slot, status: 'Booked' };
//         }
//         return slot;
//       });
//       setSlots(updatedSlots);
//     } catch (error) {
//       console.error(error);
//     }

//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }


//   return (
//     <ParkingMapContainer>
//       <Header>
//         <Title>Parking Slots - Floor {floorNumber}</Title>
//       </Header>

//       <SlotGrid>
//       {slots.map((slot) => (
//           <SlotCard key={slot.slotId} available={slot.status === 'Available'}>
//             <AvailabilityIcon available={slot.status === 'Available'}>
//               <FontAwesomeIcon icon={slot.status === 'Available' ? faRoad : faCar} />
//             </AvailabilityIcon>

//             <SlotInfoContainer style={{ marginBottom: slot.showMore ? '10px' : '0px' }}>
//               <div style={{ textAlign: 'center', marginBottom: '10px' }}>
//             <SlotTitle>{slot.slotId}</SlotTitle>
//             <SlotInfo>{slot.Proximity_to_landmarks}</SlotInfo>
//             <SlotInfo>Price: ${slot.price}</SlotInfo>
//               </div>
//               <div>
//               <ViewMoreButton onClick={() =>handleViewMoreClick(slot.slotId)}>
//               {slot.showMore ? 'View Less' : 'View More'}
//                 </ViewMoreButton>
//                 <AdditionalInfo className={slot.showMore ? 'active' : ''}
//                 style={{ marginTop: '10px' }}>
//                   <p>Building: {slot.building}</p>
//                   <p>Zone: {slot.zone}</p>
//                   <p>Row: {slot.row}</p>
//                   <p>Column: {slot.column}</p>
//                   <p>Slot Type: {slot.slotType}</p>
//                   <p>Slot Size: {slot.slotSize}</p>
//                 </AdditionalInfo>
//               </div>
//             </SlotInfoContainer>
//             <SlotButton
//               available={slot.status === 'Available'}
//               onClick={() => handleSlotClick(slot.slotId)}
//             >
//               {slot.status === 'Booked' ? 'Booked' : 'Book Now'}
//             </SlotButton>
//           </SlotCard>
//         ))}
//       </SlotGrid>
//     </ParkingMapContainer>
//   );
// };




// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCar, faRoad } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { VehicleSelector } from "./VehicleSelector.js";

// // Styled components
// const ParkingMapContainer = styled.div`
//   padding: 20px;
//   background-color: #f7f7f7;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Header = styled.header`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px 30px;
//   background: linear-gradient(135deg, #ff9a8b, #ff5847);
//   color: white;
//   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     padding: 10px 20px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   margin: 0;
//   color: #fff;

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// const SlotGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 15px;
//   width: 100%;
//   max-width: 1400px;
//   margin-top: 80px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const SlotCard = styled.div`
//   position: relative;
//   background: ${(props) => (props.available ? "#96e6a1" : "#f1c4c4")};
//   color: #333;
//   border-radius: 12px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
//   transition: 0.3s ease;
//   overflow: hidden;
//   padding: 20px;
//   text-align: center;
//   height: ${(props) => (props.showMore ? "420px" : "320px")};
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//    height: auto;
//   overflow: visible;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
//   }

//   @media (max-width: 480px) {
//     height: ${(props) => (props.showMore ? "380px" : "280px")};
//     padding: 15px;
//   }
// `;

// const SlotTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 600;
//   margin-bottom: 5px;

//   @media (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;

// const SlotInfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap:5px;
//    flex-grow: 1;
// `;

// const SlotInfo = styled.p`
//   font-size: 1rem;
//   color: ${(props) => (props.available ? "#555" : "#777")};
//   margin-bottom: 15px;

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//   }
// `;

// const AdditionalInfo = styled.div`
//   display: none;
//   font-size: 0.9rem;
//   color: #666;
//   margin: 0px;

//   &.active {
//     display: block;
//   }
// `;

// const ViewMoreButton = styled.button`
//   background-color: transparent;
//   color: #337ab7;
//   border: none;
//   padding: 0;
//   font-size: 1.2rem;
//   cursor: pointer;
//   margin-bottom: 20px auto;
//   display: block;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SlotButton = styled.button`
//   background-color: ${(props) => (props.available ? "#388e3c" : "#e74c3c")};
//   color: white;
//   padding: 10px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   font-weight: bold;
//   transition: 0.3s ease;
//   width: 100%;

//   &:hover {
//     background-color: ${(props) => (props.available ? "#2e7d32" : "#c0392b")};
//     transform: scale(1.05);
//   }

//   ${(props) => !props.available && "pointer-events: none; opacity: 0.7;"}

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//   }
// `;

// const AvailabilityIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   font-size: 1.5rem;
//   color: ${(props) => (props.available ? "#2e7d32" : "#c62828")};

//   @media (max-width: 480px) {
//     font-size: 1.2rem;
//   }
// `;

// export const ParkingMap = () => {
//   const params = useParams();
//   const { floorNumber } = params; // Get the floor number from the URL
//   const [slots, setSlots] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedVehicle,  setSelectedVehicle] = useState('Car');
  

//   //const floorSlots = slots[floorNumber] || []; // Get the slots for the selected floor

//   const handleViewMoreClick = (slotId) => {
//     setSlots((prevSlots) => {
//       const updatedSlots = prevSlots.map((slot) => {
//         if (slot.slotId === slotId) {
//           return { ...slot, showMore: !slot.showMore };
//         }
//         return slot;
//       });
//       return updatedSlots;
//     });
//   };

//   useEffect(() => {
//     console.log('Fetching parking slots for floor', floorNumber, 'and vehicle type', selectedVehicle);
//     const fetchSlots = async () => {
//       try {
//         const floorNumber = parseInt(params.floorNumber);
//       if (isNaN(floorNumber) || floorNumber < 1) {
//         setError("Invalid floor number");
//         return;
//       }
//         const response = await axios.get(`http://localhost:3001/api/smart-parking-system/parkingslots/${floorNumber}?vehicleType=${selectedVehicle}`);
//         console.log('Received parking slots:', response.data);
//         //setSlots(response.data);
//          setSlots(response.data.map((slot) => ({ ...slot, showMore: false })));
//          console.log('Updated slots:', response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//       finally {
//         setLoading(false);
//       }
//     };
//     fetchSlots();
//   }, [params.floorNumber,selectedVehicle ]);

//   const handleSlotClick = async (slotId) => {
//     try {
//       const response = await axios.post(`http://localhost:3001/api/parkingslots/${slotId}/book`, { slotId });
//       console.log('Booking response:',response.data);
//       const updatedSlots = slots.map((slot) => {
//         if (slot.slotId === slotId && slot.status === 'Available') {
//           return { ...slot, status: 'Booked' };
//         }
//         return slot;
//       });
//       setSlots(updatedSlots);
//     } catch (error) {
//       console.error(error);
//     }

//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const handleVehicleChange = (vehicle) => {
//     console.log('handleVehicleChange called with:', vehicle);
//     setSelectedVehicle(vehicle); // Update the selected vehicle state
// };


//   return (
//     <ParkingMapContainer>
//       <Header>
//         <Title>Parking Slots - Floor {floorNumber}</Title>
//       </Header>
//       <VehicleSelector 
//        selectedVehicle={selectedVehicle} 
//        onVehicleChange={handleVehicleChange} 
         
//       />
//       <SlotGrid>
//       {slots.map((slot) => (
//           <SlotCard key={slot.slotId} available={slot.status === 'Available'}>
//             <AvailabilityIcon available={slot.status === 'Available'}>
//               <FontAwesomeIcon icon={slot.status === 'Available' ? faRoad : faCar} />
//             </AvailabilityIcon>

//             <SlotInfoContainer style={{ marginBottom: slot.showMore ? '10px' : '0px' }}>
//               <div style={{ textAlign: 'center', marginBottom: '10px' }}>
//             <SlotTitle>{slot.slotId}</SlotTitle>
//             <SlotInfo>{slot.Proximity_to_landmarks}</SlotInfo>
//             <SlotInfo>Price: ${slot.price}</SlotInfo>
//               </div>
//               <div>
//               <ViewMoreButton onClick={() =>handleViewMoreClick(slot.slotId)}>
//               {slot.showMore ? 'View Less' : 'View More'}
//                 </ViewMoreButton>
//                 <AdditionalInfo className={slot.showMore ? 'active' : ''}
//                 style={{ marginTop: '10px' }}>
//                   <p>Building: {slot.building}</p>
//                   <p>Zone: {slot.zone}</p>
//                   <p>Row: {slot.row}</p>
//                   <p>Column: {slot.column}</p>
//                   <p>Slot Type: {slot.slotType}</p>
//                   <p>Slot Size: {slot.slotSize}</p>
//                 </AdditionalInfo>
//               </div>
//             </SlotInfoContainer>
//             <SlotButton
//               available={slot.status === 'Available'}
//               onClick={() => handleSlotClick(slot.slotId)}
//             >
//               {slot.status === 'Booked' ? 'Booked' : 'Book Now'}
//             </SlotButton>
//           </SlotCard>
//         ))}
//       </SlotGrid>
//     </ParkingMapContainer>
//   );
// };

//slotdetails
// import React from 'react';
// import Modal from 'react-modal'; // Importing react-modal (if using it)

// Modal.setAppElement('#root'); // Sets the app element for accessibility

// export const SlotDetailsModal = ({ isOpen, onClose, slot }) => {
//   if (!slot) return null;

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Slot Details" >
//       <div style={{ padding: '50px', textAlign: 'center', fontSize: '18px' }}>
//         <h2>Details for Slot {slot.slotId}</h2>
//         <p>Proximity to Landmarks: {slot.Proximity_to_landmarks}</p>
//         <p>Price: ${slot.price}</p>
//         <p>Building: {slot.building}</p>
//         <p>Zone: {slot.zone}</p>
//         <p>Row: {slot.row}</p>
//         <p>Column: {slot.column}</p>
//         <p>Slot Type: {slot.slotType}</p>
//         <p>Slot Size: {slot.slotSize}</p>
//         <button onClick={onClose} style={{
//             border: 'none', padding: '10px', color:'white', backgroundColor: 'black', paddingLeft:'20px', paddingRight:'20px'
//         }}>Close</button>
//       </div>
//     </Modal>
//   );
// };

//parking map
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCar, faRoad } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { VehicleSelector } from "./VehicleSelector";
// import { SlotDetailsModal } from "./SlotDetailsModal";

// // Styled components
// const ParkingMapContainer = styled.div`
//   padding: 20px;
//   background-color: #f7f7f7;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Header = styled.header`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px 30px;
//   background: linear-gradient(135deg, #ff9a8b, #ff5847);
//   color: white;
//   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     padding: 18px 20px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   margin: 0;
//   color: #fff;

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// const SlotGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 15px;
//   width: 100%;
//   max-width: 1400px;
//   margin-top: 30px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const SlotCard = styled.div`
//   position: relative;
//   background: ${(props) => (props.available ? "#96e6a1" : "#f1c4c4")};
//   color: #333;
//   border-radius: 12px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
//   transition: 0.3s ease;
//   overflow: hidden;
//   padding: 20px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//    height: auto;
//   overflow: visible;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
//   }

//   @media (max-width: 480px) {
//     padding: 15px;
//   }
// `;

// const SlotTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 600;
//   margin-bottom: 2px;

//   @media (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;

// const SlotInfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap:2px;
//    flex-grow: 1;
//    margin-bottom: 5px;
// `;

// const SlotInfo = styled.p`
//   font-size: 1rem;
//   color: ${(props) => (props.available ? "#555" : "#777")};
//   margin-bottom: 10px;

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//   }
// `;

// const AdditionalInfo = styled.div`
//   display: none;
//   font-size: 0.9rem;
//   color: #666;
//   margin: 0px;

//   &.active {
//     display: block;
//   }
// `;

// const ViewMoreButton = styled.button`
//   background-color: transparent;
//   color: #337ab7;
//   border: none;
//   padding: 0;
//   font-size: 1.2rem;
//   cursor: pointer;
//   margin-bottom: 30px auto;
//   display: block;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SlotButton = styled.button`
//   background-color: ${(props) => (props.available ? "#388e3c" : "#e74c3c")};
//   color: white;
//   padding: 10px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   font-weight: bold;
//   transition: 0.3s ease;
//   width: 100%;


//   &:hover {
//     background-color: ${(props) => (props.available ? "#2e7d32" : "#c0392b")};
//     transform: scale(1.05);
//   }

//   ${(props) => !props.available && "pointer-events: none; opacity: 0.7;"}

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//   }
// `;

// const AvailabilityIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   font-size: 1.5rem;
//   color: ${(props) => (props.available ? "#2e7d32" : "#c62828")};

//   @media (max-width: 480px) {
//     font-size: 1.2rem;
//   }
// `;

// export const ParkingMap = () => {
//   const params = useParams();
//   const { floorNumber } = params; // Get the floor number from the URL
//   const [slots, setSlots] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedVehicle, setSelectedVehicle] = useState('Car');
//   const vehicleType = selectedVehicle;
//   const [selectedSlot, setSelectedSlot] = useState(null); // State to hold selected slot for modal
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  

//   //const floorSlots = slots[floorNumber] || []; // Get the slots for the selected floor

//   // const handleViewMoreClick = (slotId) => {
//   //   setSlots((prevSlots) => {
//   //     const updatedSlots = prevSlots.map((slot) => {
//   //       if (slot.slotId === slotId) {
//   //         return { ...slot, showMore: !slot.showMore };
//   //       }
//   //       return slot;
//   //     });
//   //     return updatedSlots;
//   //   });
//   // };

//   useEffect(() => {
//     const fetchSlots = async () => {
//       try {
//         const floorNumber = parseInt(params.floorNumber);
//       if (isNaN(floorNumber) || floorNumber < 1) {
//         setError("Invalid floor number");
//         return;
//       }
//         const response = await axios.get(`http://localhost:3001/api/smart-parking-system/parkingslots/${floorNumber}?vehicleType=${selectedVehicle}`);
//         setSlots(response.data.map((slot) => ({ ...slot, showMore: false })));
//       } catch (error) {
//         setError(error.message);
//       }
//       finally {
//         setLoading(false);
//       }
//     };
//     fetchSlots();
//   }, [params.floorNumber,selectedVehicle ]);

//   const handleViewMoreClick = (slot) => {
//     setSelectedSlot(slot); // Set the slot to display in the modal
//     setIsModalOpen(true); // Open the modal
//   };

//   const handleSlotClick = async (slotId) => {
//     try {
//       const response = await axios.post(`http://localhost:3001/api/parkingslots/${slotId}/book`, { slotId });
//       console.log(response.data);
//       const updatedSlots = slots.map((slot) => {
//         if (slot.slotId === slotId && slot.status === 'Available') {
//           return { ...slot, status: 'Booked' };
//         }
//         return slot;
//       });
//       setSlots(updatedSlots);
//     } catch (error) {
//       console.error(error);
//     }

//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const slotSize = vehicleType === 'Bike' ? 'Small' : 
//                  vehicleType === 'Car' ? 'Medium' : 
//                  vehicleType === 'Truck' ? 'Large' : 'Medium';

//   return (
//     <ParkingMapContainer>
//     <Header>
//       <Title>Parking Slots - Floor {floorNumber}</Title>
//     </Header>
//     <VehicleSelector 
//   onVehicleChange={(vehicle) => setSelectedVehicle(vehicle)} 
//   selectedVehicle={selectedVehicle} 
// />

//     <SlotGrid>
//       {slots
//         .filter((slot) => slot.slotSize === slotSize) // Filter slots by size
//         .map((slot) => (
//           <SlotCard key={slot.slotId} available={slot.status === "Available"}>
//             <AvailabilityIcon available={slot.status === "Available"}>
//               <FontAwesomeIcon icon={slot.status === "Available" ? faRoad : faCar} />
//             </AvailabilityIcon>

//             <SlotInfoContainer style={{ marginBottom: slot.showMore ? "10px" : "0px" }}>
//               <div style={{ textAlign: "center", marginBottom: "5px" }}>
//                 <SlotTitle>{slot.slotId}</SlotTitle>
//                 <SlotInfo>{slot.Proximity_to_landmarks}</SlotInfo>
//                 <SlotInfo>Price: ${slot.price}</SlotInfo>
//               </div>
//               <div>
//                 <ViewMoreButton onClick={() => handleViewMoreClick(slot)}>
//                   {slot.showMore ? "View Less" : "View More"}
//                 </ViewMoreButton>
//               </div>
//             </SlotInfoContainer>
//             <SlotButton
//               available={slot.status === "Available"}
//               onClick={() => handleSlotClick(slot.slotId)}
//             >
//               {slot.status === "Booked" ? "Booked" : "Book Now"}
//             </SlotButton>
//           </SlotCard>
//         ))}
//     </SlotGrid>

//     <SlotDetailsModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         slot={selectedSlot}
//       />
//   </ParkingMapContainer>
// );
// }


//feedback
// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./feedback.css";

// export const FeedbackPage = () => {
//   const [feedback, setFeedback] = useState({
//     rating: "",
//     message: "",
//     type: "",
//   }); 
//   const [submitted, setSubmitted] = useState(false);
//   const [existingFeedback, setExistingFeedback] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   const emojiOptions = ["😄", "🙂", "😐", "🙁", "😡"];

//   useEffect(() => {
//     const fetchFeedback = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/api/feedbacks");
//         if (!response.ok) {
//           throw new Error(`Error fetching feedback: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
//         setExistingFeedback(data.feedbacks || []);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchFeedback();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFeedback({ ...feedback, [name]: value });
//   };

//   const getRatingValue = (ratingEmoji) => {
//     const ratingMap = {
//       '😄': 5,
//       '🙂': 4,
//       '😐': 3,
//       '🙁': 2,
//       '😡': 1,
//     };
//     return ratingMap[ratingEmoji];
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     if (!feedback.rating || !feedback.message || !feedback.type) {
//       setErrorMessage("Please fill in all fields.");
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:3001/api/submit-feedback", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({message: feedback.message,
//           type: feedback.type,
//           ratingEmoji: feedback.rating,
//           ratingValue: getRatingValue(feedback.rating)}),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to submit feedback");
//   }

//   const data = await response.json();
//   console.log(data);
//   setExistingFeedback([...existingFeedback, { ratingEmoji: feedback.rating, ratingValue: getRatingValue(feedback.rating), message: feedback.message, type: feedback.type }]);
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//     setFeedback({ rating: "", message: "", type: "" });
//     setErrorMessage("");
// } catch (err) {
//   console.error(err);
//   setErrorMessage("Failed to submit feedback. Please try again.");
// }
//   }
  

//   return (
//     <div className="feedback-page-container">
//       <div className="container-fluid feedback-container">
//         <div className="row align-items-start feedback-form-container">
//           {/* Feedback Form Section */}
//           <div className="col-lg-6 col-md-12 feedback-form-section">
//             <h2 className="text-center mb-4">We Value Your Feedback</h2>
//             <form onSubmit={handleSubmit} className="feedback-form">
//               <div className="form-group mb-3">
//                 <label htmlFor="feedbackType">Feedback Type</label>
//                 <select
//                   id="feedbackType"
//                   name="type"
//                   className="form-control"
//                   value={feedback.type}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Type</option>
//                   <option value="Complaint">Complaint</option>
//                   <option value="Suggestion">Suggestion</option>
//                   <option value="Appreciation">Appreciation</option>
//                 </select>
//               </div>
//               <div className="emoji-rating mb-3">
//                 <p>Your Rating:</p>
//                 <div className="emoji-container">
//                   {emojiOptions.map((emoji, index) => (
//                     <span
//                       key={index}
//                       className={`emoji ${
//                         feedback.rating === emoji ? "selected" : ""
//                       }`}
//                       onClick={() =>
//                         setFeedback({ ...feedback, rating: emoji })
//                       }
//                     >
//                       {emoji}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="form-group mb-3">
//                 <label htmlFor="feedbackMessage">Your Feedback</label>
//                 <textarea
//                   id="feedbackMessage"
//                   name="message"
//                   className="form-control"
//                   rows="4"
//                   placeholder="Write your feedback here..."
//                   value={feedback.message}
//                   onChange={handleInputChange}
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-gradient w-100">
//                 Submit Feedback
//               </button>
//               {errorMessage && <p className="error-message">{errorMessage}</p>}
//             </form>
//             {submitted && (
//               <div className="feedback-confirmation text-center mt-3">
//                 <p>🎉 Thank you for your feedback! 🎉</p>
//               </div>
//             )}
//           </div>
//           {/* Feedback History Section */}
//           <div className="col-lg-6 col-md-12 feedback-history-section-container ">
//   <h2 className="text-center mb-4">What Others Are Saying</h2>

//     {existingFeedback.slice(-2).map((feedback, index) => (
//       <div  key={index}>
//         <div className="card">
//           <div className="card-body">
//             <span className="emoji">{feedback.ratingEmoji}</span>
//             <p>{feedback.message}</p>
//             <small>{feedback.type}</small>
//           </div>
//         </div>
//       </div>
//     ))}
 
//  {existingFeedback.length > 0  && (
//   <div className="feedback-stats-container">
//     <div className="stat">{existingFeedback[existingFeedback.length - 1].ratingValue}/5</div>
//     <div className="label">Rating</div>
//   </div>
//  )}
// </div> 
//           </div>
//         </div>
//         </div>
//      )}

//report
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Report.css";
// import {ImageDisplay} from './ImageDisplay'; // Import the ImageDisplay component

// export const ReportPage = () => {
//   const [report, setReport] = useState({
//     category: "",
//     description: "",
//     image: null
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [imageUrl, setImageUrl] = useState(null); // State to store the image URL

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setReport({ ...report, [name]: value });
//   };

//   const handleImageUpload = (e) => {
//     setReport({ ...report, image: e.target.files[0] });
//   }; 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!report.category) {
//       newErrors.category = "Please select an issue category.";
//     }
//     if (!report.description) {
//       newErrors.description = "Please provide a description of the issue.";
//     }
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return; // Stop submission if there are errors
//     }

//     const formData = new FormData();
//     formData.append('category', report.category);
//     formData.append('description', report.description);
//     if (report.image) {
//       formData.append('image', report.image);
//     }

//     // Send the report data to the backend
//     fetch('http://localhost:3001/api/submit-report', {
//       method: 'POST',
//       body: formData,
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Server error');
//       }
//       return response.json(); // Attempt to parse JSON
//     })
//     .then(data => {
//       if (data.message === 'Report submitted successfully') {
//         setSubmitted(true);
//         setTimeout(() => setSubmitted(false), 3000);
//         setReport({ category: "", description: "", image: null });
//         setErrors({});
//         setImageUrl(data.imageUrl); // Assuming the backend sends this image URL
//       } else {
//         console.error('Error submitting report:', data.error);
//         // Optionally, show an error message to the user here
//       }
//     })
//     .catch(error => {
//       console.error('Error submitting report:', error);
//       // Optionally, show an error message to the user here
//     });
//   };

//   return (
//     <div className="report-page">
//       <div className="split-layout">
//         {/* Left Pane: Visual Appeal */}
//         <div className="left-pane">
//           <h1>Need Help?</h1>
//           <p>Have an issue with your parking? Report it instantly, and we will handle it promptly.</p>
//           <div className="illustration"></div>
//         </div>

//         {/* Right Pane: Form */}
//         <div className="right-pane">
//           <form onSubmit={handleSubmit} className="report-form">
//             <h2>Report an Issue</h2>
//             <div className="form-group mb-4">
//               <label htmlFor="category">Select Issue Category</label>
//               <select
//                 id="category"
//                 name="category"
//                 className="form-control"
//                 value={report.category}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select...</option>
//                 <option value="Illegal Parking">Illegal Parking</option>
//                 <option value="Slot Unavailable">Slot Unavailable</option>
//                 <option value="Other">Other</option>
//               </select>
//               {errors.category && <div className="text-danger mt-2">{errors.category}</div>}
//             </div>
//             <div className="form-group mb-4">
//               <label htmlFor="description">Details</label>
//               <textarea
//                 id="description"
//                 name="description"
//                 className="form-control"
//                 rows="5"
//                 placeholder="Please describe the issue in detail..."
//                 value={report.description}
//                 onChange={handleInputChange}
//               ></textarea>
//               {errors.description && <div className="text-danger mt-2">{errors.description}</div>}
//             </div>
//             <div className="form-group mb-4">
//               <label htmlFor="image">Upload Evidence (Optional)</label>
//               <input
//                 type="file"
//                 id="image"
//                 name="image"
//                 className="form-control"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />
//             </div>
//             <button type="submit" className="btn btn-highlight btn-block">
//               Submit Report
//             </button>
          
//             {submitted && (
//               <div className="alert alert-success mt-4">
//                 Report submitted successfully! Our team has been notified.
//               </div>
//             )}
//             {imageUrl && (
//               <div className="mt-4">
//                 <ImageDisplay imageUrl={imageUrl} />
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

 //parkingmap
 // import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCar, faRoad } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { VehicleSelector } from "./VehicleSelector";
// import { SlotDetailsModal } from "./SlotDetailsModal";
// import { Modal, Button } from 'react-bootstrap';
// import { ParkingSlotManager } from "./ParkingSlotManager";

// // Styled components
// const ParkingMapContainer = styled.div`
//   padding: 20px;
//   background-color: #f7f7f7;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Header = styled.header`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px 30px;
//   background: linear-gradient(135deg, #ff9a8b, #ff5847);
//   color: white;
//   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     padding: 18px 20px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   margin: 0;
//   color: #fff;

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// const SlotGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 15px;
//   width: 100%;
//   max-width: 1400px;
//   margin-top: 30px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const SlotCard = styled.div`
//   position: relative;
//   background: ${(props) => (props.available ? "#96e6a1" : "#f1c4c4")};
//   color: #333;
//   border-radius: 12px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
//   transition: 0.3s ease;
//   overflow: hidden;
//   padding: 20px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//    height: auto;
//   overflow: visible;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
//   }

//   @media (max-width: 480px) {
//     padding: 15px;
//   }
// `;

// const SlotTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 600;
//   margin-bottom: 2px;

//   @media (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;

// const SlotInfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap:2px;
//    flex-grow: 1;
//    margin-bottom: 5px;
// `;

// const SlotInfo = styled.p`
//   font-size: 1rem;
//   color: ${(props) => (props.available ? "#555" : "#777")};
//   margin-bottom: 10px;

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//   }
// `;

// const SlotButton = styled.button`
//   background-color: ${(props) => (props.available ? "#388e3c" : "#e74c3c")};
//   color: white;
//   padding: 10px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   font-weight: bold;
//   transition: 0.3s ease;
//   width: 100%;


//   &:hover {
//     background-color: ${(props) => (props.available ? "#2e7d32" : "#c0392b")};
//     transform: scale(1.05);
//   }

//   ${(props) => !props.available && "pointer-events: none; opacity: 0.7;"}

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//   }
// `;

// const AvailabilityIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   font-size: 1.5rem;
//   color: ${(props) => (props.available ? "#2e7d32" : "#c62828")};

//   @media (max-width: 480px) {
//     font-size: 1.2rem;
//   }
// `;

// export const ParkingMap = () => {
//   const params = useParams();
//   const { floorNumber } = params; // Get the floor number from the URL
//   const [slots, setSlots] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedVehicle, setSelectedVehicle] = useState('Car');
//   const vehicleType = selectedVehicle;
//   const [selectedSlot, setSelectedSlot] = useState(null); // State to hold selected slot for modal
//   const [showModal, setShowModal] = useState(false); // State to manage modal visibility
//   const [selectedSlotId, setSelectedSlotId] = useState(null);
  

//   //const floorSlots = slots[floorNumber] || []; // Get the slots for the selected floor

//   // const handleViewMoreClick = (slotId) => {
//   //   setSlots((prevSlots) => {
//   //     const updatedSlots = prevSlots.map((slot) => {
//   //       if (slot.slotId === slotId) {
//   //         return { ...slot, showMore: !slot.showMore };
//   //       }
//   //       return slot;
//   //     });
//   //     return updatedSlots;
//   //   });
//   // };

//   useEffect(() => {
//     const fetchSlots = async () => {
//       try {
//         const floorNumber = parseInt(params.floorNumber);
//       if (isNaN(floorNumber) || floorNumber < 1) {
//         setError("Invalid floor number");
//         return;
//       }
//         const response = await axios.get(`http://localhost:3001/api/smart-parking-system/parkingslots/${floorNumber}?vehicleType=${selectedVehicle}`);
//         setSlots(response.data.map((slot) => ({ ...slot, showMore: false })));
//       } catch (error) {
//         setError(error.message);
//       }
//       finally {
//         setLoading(false);
//       }
//     };
//     fetchSlots();
//   }, [params.floorNumber,selectedVehicle ]);

//   const handleViewMoreClick = (slot) => {
//     setSelectedSlot(slot); // Set the slot to display in the modal
//     setShowModal(true); // Open the modal
//   };

//   const handleSlotClick = async (slotId) => {
//     setSelectedSlotId(slotId);
//     // try {
//     //   const response = await axios.post(`http://localhost:3001/api/parkingslots/${slotId}/book`, { slotId });
//     //   console.log(response.data);
//     //   const updatedSlots = slots.map((slot) => {
//     //     if (slot.slotId === slotId && slot.status === 'Available') {
//     //       return { ...slot, status: 'Booked' };
//     //     }
//     //     return slot;
//     //   });
//     //   setSlots(updatedSlots);
//     // } catch (error) {
//     //   console.error(error);
//     // }

//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const slotSize = vehicleType === 'Bike' ? 'Small' : 
//                  vehicleType === 'Car' ? 'Medium' : 
//                  vehicleType === 'Truck' ? 'Large' : 'Medium';

//   return (
//     <ParkingMapContainer>
//     <Header>
//       <Title>Parking Slots - Floor {floorNumber}</Title>
//     </Header>
//     <VehicleSelector 
//   onVehicleChange={(vehicle) => setSelectedVehicle(vehicle)} 
//   selectedVehicle={selectedVehicle} 
// />

//     <SlotGrid>
//       {slots
//         .filter((slot) => slot.slotSize === slotSize) // Filter slots by size
//         .map((slot) => (
//           <SlotCard key={slot.slotId} available={slot.status === "Available"}>
//             <AvailabilityIcon available={slot.status === "Available"}>
//               <FontAwesomeIcon icon={slot.status === "Available" ? faRoad : faCar} />
//             </AvailabilityIcon>

//             <SlotInfoContainer>
//                 <div style={{ textAlign: 'center', marginBottom: '10px' }}>
//                   <SlotTitle>{slot.slotId}</SlotTitle>
//                 <SlotInfo>{slot.Proximity_to_landmarks}</SlotInfo>
//                 <SlotInfo>Price: ${slot.price}</SlotInfo>
//               </div>
//               <Button variant="link" onClick={() => handleViewMoreClick(slot)}>
//                   {slot.showMore ? 'View Less' : 'View More'}
//                 </Button>
//               </SlotInfoContainer>

//               <SlotButton
//                 available={slot.status === 'Available'}
//                 onClick={() => handleSlotClick(slot.slotId)}
//               >
//               {slot.status === "Booked" ? "Booked" : "Book Now"}
//             </SlotButton>
//           </SlotCard>
//         ))}
//     </SlotGrid>

//     {selectedSlot && (
//         <SlotDetailsModal
//           show={showModal}
//           onHide={() => setShowModal(false)}
//           slot={selectedSlot} /> )}
//           {selectedSlotId && (
//   <ParkingSlotManager slotId={selectedSlotId} />
// )}
        
//     </ParkingMapContainer>
// );
// }

//css
// .smart-parking-info {
//   display: flex;
//   flex-direction: column;
//   margin-top: 3% auto;
//   width: 100%;
//   padding: 0 20px;
//   box-sizing: border-box;
// }
// .smart-parking-info-container {
//   width: 100%;
//   max-width: 100%;
// }

// .smart-parking-info-container .section {
//   margin-top: 0;
// }

// .smart-parking-info-container .map-context {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// }
// .smart-parking-info-container .map-text {
//   flex: 1;
//   padding: 3px;
//   text-align: center;
//   font-size: 0.9rem;
// }
// .smart-parking-info-container .map-image-container {
//   flex: 1.5;
//   padding: 20px;
//   text-align: center;
//   margin-top: 3%;
// }
// .smart-parking-info-container .map-image {
//   width: 90%;
//   height: 90%;
//   object-fit: cover;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// }

// .smart-parking-info-container .cards-container {
//   display: flex;
//   gap: 20px;
//   align-items: flex-start;
// }

// .smart-parking-info-container .project-help-container.small-card {
//   flex: 0.5;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   background-color: #fff;
//   line-height: 190%;
//   margin-top: 5%;
//   font-size: 1.2rem;
//   margin-left: 2%;
// }

// .smart-parking-info-container .benefits-cards-container {
//   display: flex;
//   gap: 20px;
//   flex: 1;
// }

// .smart-parking-info-container .benefit-card {
//   flex:1;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   background-color: #fff;
//   text-align: center;
//   margin-bottom: 5%;
//   margin-top: 4%;
//   margin-right: 0.5%;
// }

// .smart-parking-info-container .benefit-card h3 {
//   margin-bottom: 5px;
// }

// .smart-parking-info-container .benefit-image {
//   width: 100%;
//   aspect-ratio: 16/9;
//   border-radius: 8px;
//   margin-bottom: 4px;
// }

// .smart-parking-info-container .benefit-points {
//   list-style-type: none;
//   padding-left: 0;
//   margin-top: 10px;
//   text-align: left;
// }

// .smart-parking-info-container .benefit-points li {
//   margin-bottom: 8px;
//   display: flex;
//   align-items: center;
//   font-size: 1.2rem;
// }

// .smart-parking-info-container  .benefit-points li::before {
//   content: '•';
//   color: #4CAF50; 
//   font-weight: bold;
//   display: inline-block;
//   width: 1em;
//   margin-right: 8px;
// }



// @media (max-width: 768px) {
//   .smart-parking-info {
//     padding:10px;
//   }

//   .smart-parking-info-container {
//     padding: 0;
//   }

//   .smart-parking-info-container  .map-context {
//     flex-direction: column ; 
//     align-items: center ;
//   }
  
//   .smart-parking-info-container .map-image-container {
    
//     width: 100% ;
//     left: unset;
//   text-align: center;
//   }

//   .smart-parking-info-container .map-image {
//     width: 100% ;
//     height: auto ;
//     margin-left:7%;
//     margin-top: 3%;
//   }
  
//   .smart-parking-info-container .map-text {
    
//     text-align: center ;
//     padding: 10px ;
//     width: 100% ;
//     margin-left:8%;
//   }
//   .smart-parking-info-container .cards-container {
   

//   display: flex;
//   flex-wrap: wrap; 
//   gap: 20px;
//   justify-content: center; 
//   align-items: stretch; 
  
// @media (max-width: 768px) {
//   .smart-parking-info-container .project-help-container.small-card,
//   .smart-parking-info-container .benefit-card {
//     flex: 1 1 calc(100% - 20px); 
//     max-width: calc(100% - 20px);
//     padding: 20px;
//     margin: 0 auto; 
//     height: auto;
//     overflow: visible; 
//     box-sizing: border-box;
//   }

//   @media (min-width: 480px) and (max-width: 768px) {
//     .smart-parking-info-container .project-help-container.small-card,
//     .smart-parking-info-container .benefit-card {
//       flex: 1 1 calc(48% - 20px); 
//       max-width: calc(48% - 20px);
//       margin-bottom: 20px;
//     }
//   }}
//   .smart-parking-info-container .benefit-card, 
//   .smart-parking-info-container .project-help-container.small-card {
//   height: auto; 
//   margin: 0 ;
//   width: 100% ;
// }

// .smart-parking-info-container .benefit-card {
//   flex-grow: 0; 
//   flex-basis: auto ;
// }

// .smart-parking-info-container .project-help-container.small-card {
//   flex-grow: 1 ;
//   flex-basis: 100% ;
//   width: 100% ;
//   margin-left: 10%;
  
// }
// .smart-parking-info-container .benefit-points li {
//   font-size: 1rem ;
// }
// }

//profile
// import './profile.css'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const ProfileInfo = () => {
//   const [user, setUser] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//   });

//   useEffect(() => {
//   const fetchUserData = async () => {
//     try {
//       const token = localStorage.getItem('token'); // Retrieve the token from local storage
//       const response = await axios.get('http://localhost:3001/api/user', {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include the token in the request headers
//         },
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   fetchUserData();
// }, []);
    

//   const [parkingHistory, setParkingHistory] = useState([
//     {
//       location: "Lot A - Downtown",
//       date: "Nov 17, 2024",
//       duration: "2 hours",
//     },
//     {
//       location: "Lot B - Mall",
//       date: "Nov 15, 2024",
//       duration: "3.5 hours",
//     },
//     {
//       location: "Lot C - Airport",
//       date: "Nov 12, 2024",
//       duration: "1.5 hours",
//     },
//   ]);

//   // Handle edit profile button click
//   const handleEditProfile = () => {
//     // Add edit profile logic here
//   };

//   // Handle parking history item click
//   const handleParkingHistoryItemClick = (item) => {
//     // Add parking history item click logic here
//   };

//   return (
//     <div className="profile-wrapper">
//       <div className="hero-section">
//         <h1>Profile</h1>
//       </div>
//       <div className="profile-card">
//         <div className="profile-header">
//           <div className="profile-picture">
//             <img
//               src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
//               alt="Profile"
//               className="profile-img"
//             />
//           </div>
//           <div className="profile-info">
//             <h1>{user.fullName}</h1>
//             <p>{user.email}</p>
//             <button className="edit-btn" onClick={handleEditProfile}>
//               Edit Profile
//             </button>
//           </div>
//         </div>
//         <div className="profile-details">
//           <h2>Contact Details</h2>
//           <p>
//             <strong>Phone:</strong> {user.phone}
//           </p>
//           <p>
//             <strong>Address:</strong> {user.address}
//           </p>
//         </div>
//       </div>
//       <div className="parking-history-card">
//         <h2>Parking History</h2>
//         <ul>
//           {parkingHistory.map((entry, index) => (
//             <li key={index} onClick={() => handleParkingHistoryItemClick(entry)}>
//               <span className="history-location">{entry.location}</span>
//               <span className="history-date">{entry.date}</span>
//               <span className="history-duration">{entry.duration}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

//report
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Report.css";
// import emailjs from 'emailjs-com'; // Import EmailJS

// export const ReportPage = () => {
//   const [report, setReport] = useState({
//     category: "",
//     description: "",
    
//     image: null, // Still storing the image locally
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setReport({ ...report, [name]: value });
//   };

//   const handleImageUpload = (e) => {
//     // Store the image file but don't send it to backend or email
//     setReport({ ...report, image: e.target.files[0] });
//   };

//   const sendEmail = () => {
//     const templateParams = {
//       category: report.category || 'No category provided',
//       description: report.description || 'No description provided',
//       // Remove the imageUrl parameter as we are no longer sending it
//     };
  
//     console.log('Sending email with params:', templateParams); // Debugging
//     emailjs
//       .send('service_aupgsok', 'template_pvilp8l', templateParams, '-MWalAz-c6Je-fdV7')
//       .then((response) => {
//         console.log('Email sent successfully:', response);
//       })
//       .catch((error) => {
//         console.error('Error sending email:', error);
//       });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!report.category) {
//       newErrors.category = "Please select an issue category.";
//     }
//     if (!report.description) {
//       newErrors.description = "Please provide a description of the issue.";
//     }
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return; // Stop submission if there are errors
//     }

//     const formData = new FormData();
//     formData.append('category', report.category);
//     formData.append('description', report.description);
//     // Do not append the image in the form data, if not required
//     // formData.append('image', report.image);

//     // Send the report data to the backend, without the image
//     fetch('http://localhost:3001/api/submit-report', {
//       method: 'POST',
//       body: formData,
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Server error');
//         }
//         return response.json(); // Attempt to parse JSON
//       })
//       .then(data => {
//         if (data.message === 'Report submitted successfully') {
//           setSubmitted(true);
//           setTimeout(() => setSubmitted(false), 3000);
//           setReport({ category: "", description: "", image: null });
//           setErrors({});
//           // Send an email after successful report submission, but without the image
//           sendEmail(); // Call the email function to send the email
//         } else {
//           console.error('Error submitting report:', data.error);
//         }
//       })
//       .catch(error => {
//         console.error('Error submitting report:', error);
//       });
//   };

//   return (
//     <div className="report-page">
//       <div className="split-layout">
//         {/* Left Pane: Visual Appeal */}
//         <div className="left-pane">
//           <h1>Need Help?</h1>
//           <p>Have an issue with your parking? Report it instantly, and we will handle it promptly.</p>
//           <div className="illustration"></div>
//         </div>

//         {/* Right Pane: Form */}
//         <div className="right-pane">
//           <form onSubmit={handleSubmit} className="report-form">
//             <h2>Report an Issue</h2>
//             <div className="form-group mb-4">
//               <label htmlFor="category">Select Issue Category</label>
//               <select
//                 id="category"
//                 name="category"
//                 className="form-control"
//                 value={report.category}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select...</option>
//                 <option value="Illegal Parking">Illegal Parking</option>
//                 <option value="Slot Unavailable">Slot Unavailable</option>
//                 <option value="Other">Other</option>
//               </select>
//               {errors.category && <div className="text-danger mt-2">{errors.category}</div>}
//             </div>
//             <div className="form-group mb-4">
//               <label htmlFor="description">Details</label>
//               <textarea
//                 id="description"
//                 name="description"
//                 className="form-control"
//                 rows="5"
//                 placeholder="Please describe the issue in detail..."
//                 value={report.description}
//                 onChange={handleInputChange}
//               ></textarea>
//               {errors.description && <div className="text-danger mt-2">{errors.description}</div>}
//             </div>
//             <div className="form-group mb-4">
//               <label htmlFor="image">Upload Evidence (Optional)</label>
//               <input
//                 type="file"
//                 id="image"
//                 name="image"
//                 className="form-control"
//                  accept="image/*"
//                 onChange={handleImageUpload}
//               />
//             </div>
//             <button type="submit" className="btn btn-highlight btn-block">
//               Submit Report
//             </button>

//             {submitted && (
//               <div className="alert alert-success mt-4">
//                 Report submitted successfully! Our team has been notified.
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };


//payment
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
// } from "@mui/material";

// export const PaymentPage = () => {
//   const [selectedOption, setSelectedOption] = useState("");

//   const paymentOptions = [
//     { id: "credit_card", label: "Credit Card" },
//     { id: "debit_card", label: "Debit Card" },
//     { id: "paypal", label: "PayPal" },
//     { id: "upi", label: "UPI" },
//   ];

//   const renderFormFields = () => {
//     switch (selectedOption) {
//       case "credit_card":
//       case "debit_card":
//         return (
//           <>
//             <TextField
//               fullWidth
//               label="Card Holder Name"
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Card Number"
//               variant="outlined"
//               type="number"
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Expiry Date (MM/YY)"
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="CVV"
//               variant="outlined"
//               type="password"
//               sx={{ mb: 2 }}
//             />
//           </>
//         );
//       case "paypal":
//         return (
//           <>
//             <TextField
//               fullWidth
//               label="PayPal Email Address"
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />
//           </>
//         );
//       case "upi":
//         return (
//           <>
//             <TextField
//               fullWidth
//               label="UPI ID"
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   const handleSubmit = () => {
//     alert(`Payment method ${selectedOption} submitted!`);
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(to bottom, #ffcbff, #c1d2dc)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         p: 2,
//       }}
//     >
//       <Card
//         sx={{
//           maxWidth: 600,
//           width: "100%",
//           backgroundColor: "rgba(255, 255, 255, 0.9)",
//           borderRadius: 4,
//           boxShadow: 5,
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         <CardContent>
//           <Typography
//             variant="h4"
//             align="center"
//             gutterBottom
//             sx={{ fontWeight: "bold", color: "#333" }}
//           >
//             Payment Method
//           </Typography>

//           {!selectedOption ? (
//             <Box sx={{ mb: 3 }}>
//               <Typography
//                 variant="body1"
//                 align="center"
//                 gutterBottom
//                 sx={{ mb: 3, color: "#555" }}
//               >
//                 Select a payment method to proceed.
//               </Typography>
//               {/* Display Payment Options */}
//               {paymentOptions.map((option) => (
//   <Card
//     key={option.id}
//     sx={{
//       cursor: "pointer",
//       backgroundColor: "rgba(255, 255, 255, 0.8)",
//       color: "#333",
//       textAlign: "center",
//       mb: 2,
//       p: 2,
//       boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//       borderRadius: 3,
//       transition: "all 0.3s ease",
//       ":hover": {
//         background: "linear-gradient(to right, #ffcbff, #c1d2dc)",
//         color: "#fff",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
//         transform: "translateY(-2px)",
//       },
//     }}
//     onClick={() => setSelectedOption(option.id)}
//   >
//     <Typography variant="h6">{option.label}</Typography>
//   </Card>
// ))}

//             </Box>
//           ) : (
//             <Box>
//               <Typography
//                 variant="h5"
//                 align="center"
//                 gutterBottom
//                 sx={{ fontWeight: "bold", color: "#555", mb: 3 }}
//               >
//                 {paymentOptions.find((opt) => opt.id === selectedOption)?.label}
//               </Typography>
//               {/* Render Dynamic Form */}
//               {renderFormFields()}

//               <CardActions sx={{ justifyContent: "space-between", mt: 2 }}>
//   <Button
//     variant="outlined"
//     color="secondary"
//     size="large"
//     onClick={() => setSelectedOption("")}
//     sx={{ borderRadius: 2 }}
//   >
//     Back
//   </Button>
//   <Button
//     size="large"
//     onClick={handleSubmit}
//     sx={{
//       borderRadius: 2,
//       background: "linear-gradient(to right, #ffcbff, #c1d2dc)",
//       color: "#fff",
//       fontWeight: "bold",
//       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//       ":hover": {
//         background: "linear-gradient(to right, #c1d2dc, #ffcbff)",
//         boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
//       },
//     }}
//   >
//     Submit Payment
//   </Button>
// </CardActions>

//             </Box>
//           )}
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };
