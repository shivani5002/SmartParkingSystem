import React from 'react';
import './SmartParkingContent.css';

export function SmartParkingInfo() {
  const benefits = [
    {
      id: 1,
      title: 'Reduced Traffic Congestion',
      points: ['Directs drivers quickly', 'Less time circling', 'Eases urban congestion'],
      image: 'https://th.bing.com/th/id/OIP.Khi5Uwb4Pl9QLoqwbbBNbwAAAA?w=301&h=143&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      id: 2,
      title: 'Efficient Parking Use',
      points: ['Real-time data', 'Maximum occupancy', 'Optimized space usage'],
      image: 'https://th.bing.com/th?id=OIP.bqCuRa8sQJNWXMjP4v4u9AHaEJ&w=334&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    },
    {
      id: 3,
      title: 'Smart Cities',
      points: ['Improve Compliance', 'Smart City Tracking', 'Increase Turnover'],
      image: 'https://th.bing.com/th/id/OIP.f3N2biRFj8alUhC0XGELYgHaE7?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
  ];


  return (
    <div className="smart-parking-info smart-parking-info-container">
      {/* Map Section */}
      <div className="section map-container">
      <div className="map-context">
       <div className="map-image-container">
        <img
          src="https://static.wixstatic.com/media/7bc228_62aa9a1133fa4e0c9b5bc0931c5421ea~mv2.png/v1/fill/w_796,h_530,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/book%20.png"
          alt="Smart Parking Map"
          className="map-image"
        />
        </div>
          <div className="map-text">
          <h1 style={{fontSynthesisWeight:'bold', fontSize:'380%', marginBottom:'4%'}}>Find. Book. Park. Repeat.</h1>
          <h2 style={{fontSynthesisWeight:'200%', fontSize:'250%', marginBottom:'4%'}}>Your Convenient Parking Solution</h2>
          <p style={{fontSynthesisWeight:'bold', fontSize:'1.8rem'}}>Reserve your spot today and experience hassle-free parking!</p>
        </div>
        </div>
       </div>
      

      {/* How This Project Helps and Benefits Cards Side by Side */}
      <div className="section cards-container">
        <div className="project-help-container card small-card">
          <h2>How This Helps?</h2>
          <p>
            This project reduces traffic congestion and optimizes parking space use, creating a sustainable and user-friendly 
            urban environment.Smart parking systems significantly enhance operational efficiency by providing real-time data on parking space usage.  
          </p>
        </div>

        <div className="benefits-cards-container">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card card">
              <img src={benefit.image} alt={benefit.title} className="benefit-image" />
              <h3>{benefit.title}</h3>
              <ul className="benefit-points">
                {benefit.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

