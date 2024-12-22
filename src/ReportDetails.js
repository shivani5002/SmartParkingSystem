import React, { useState, useEffect } from "react";
import axios from "axios";
import "./reports.css";

export const ReportDetails = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/images');
        const imageData = await response.json();
        console.log('Image data:', imageData);
        if (Array.isArray(imageData)) {
          setImages(imageData);
        } else {
          setError('Image data is not an array');}
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/reports',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }) ;
        setReports(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchReports();
  }, []);

  if (loading) {
    return <div>Loading images...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  } 


  return (
    <div className="report-details_a">
      <h1>Report Details</h1>
      {reports.map((report, index) => (
        <div key={index} className="feedback-item_a">
          <div style={{display: 'flex'}}>
          <h2>Category: </h2>
         <p  style={{ marginLeft: '10px' }}>{report.category}</p> 
          </div>
          <div style={{display: 'flex'}}> 
          <h2>Description: </h2>
          <p style={{ marginLeft: '10px' }}>{report.description}</p>
   </div>

          <div className="image-gallery_a">
            <h3>Uploaded Image</h3>
            <div className="image-list_a">
              {images.slice(index, index + 1).map((image, imageIndex) => (
                <div key={imageIndex} className="image-box_a">
                  <img
                    src={`http://localhost:3001/uploads/${image}`}
                    alt={`Image ${imageIndex + 1}`}
                    style={{
                      width: "600px",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

