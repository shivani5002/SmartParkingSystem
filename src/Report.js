import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Report.css";
import emailjs from 'emailjs-com'; // Import EmailJS
import {ImageDisplay} from './ImageDisplay';

export const ReportPage = () => {
  const [report, setReport] = useState({
    category: "",
    description: "",
    phoneNumber: "",
    image: null, // Still storing the image locally
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const handleImageUpload = (e) => {
    // Store the image file but don't send it to backend or email
    const file = e.target.files[0];
    const blob = new Blob([file], { type: file.type });
    setReport({ ...report, image: blob });
  };

  const sendEmail = () => {
    const templateParams = {
      category: report.category || 'No category provided',
      description: report.description || 'No description provided',
      phoneNumber: report.phoneNumber || 'No phone number provided',
      // Remove the imageUrl parameter as we are no longer sending it
    };
  
    console.log('Sending email with params:', templateParams); // Debugging
    emailjs
      .send('service_aupgsok', 'template_pvilp8l', templateParams, '-MWalAz-c6Je-fdV7')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
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
    if (!report.phoneNumber) {
      newErrors.phoneNumber = "Please provide your phone number.";
    }
    if (!report.image) {
      newErrors.image = "Please upload an image.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop submission if there are errors
    }

    const formData = new FormData();
    formData.append('category', report.category);
    formData.append('description', report.description);
    formData.append('phoneNumber', report.phoneNumber);
    // Do not append the image in the form data, if not required
    if (report.image) {
            formData.append('image', report.image);
           }
      

    // Send the report data to the backend, without the image
    fetch('http://localhost:3001/api/submit-report', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Server error');
        }
        return response.json(); // Attempt to parse JSON
      })
      .then(data => {
        if (data.message === 'Report submitted successfully') {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          setReport({ category: "", description: "", phoneNumber: "", image: null });
          setErrors({});
           setImageUrl(null);
          //setImageUrl(data.imageUrl);
          // Send an email after successful report submission, but without the image
          sendEmail(); // Call the email function to send the email
        } else {
          console.error('Error submitting report:', data.error);
        }
      })
      .catch(error => {
        console.error('Error submitting report:', error);
      });
  };

  return (
    <div className="report-page">
      <div className="split-layout">
        {/* Left Pane: Visual Appeal */}
        <div className="left-pane">
          <h1>Need Help?</h1>
          <p>Have an issue with your parking? Report it instantly, and we will handle it promptly.</p>
          <div className="illustration"></div>
        </div>

        {/* Right Pane: Form */}
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
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="form-control" placeholder="Enter your phone number..." value={report.phoneNumber} onChange={handleInputChange} />
            {errors.phoneNumber && <div className="text-danger mt-2">{errors.phoneNumber}</div>}
          </div>
            <div className="form-group mb-4">
              <label htmlFor="image">Upload Evidence (Required)</label>
              <input
                type="file"
                id="image"
                name="image"
                className="form-control"
                accept="image/*"
                onChange={handleImageUpload} 
              />
              {errors.image && <div className="text-danger mt-2">{errors.image}</div>}
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
          {imageUrl && (
  <div className="mt-4">
    <ImageDisplay imageUrl={imageUrl} />
  </div>
        )}
        </div>
      </div>
    </div>
  );
};