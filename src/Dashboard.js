import React, { useState } from 'react';
import './Dashboard.css';

export const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const floorData = {
    1: {
      totalSlots: 20,
      bookedSlots: 12,
      availableSlots: 8,
      vehiclesToday: 10,
      vehiclesLast7Days: 50,
      revenueToday: 200,
      revenueLast7Days: 1200,
    },
    2: {
      totalSlots: 25,
      bookedSlots: 18,
      availableSlots: 7,
      vehiclesToday: 15,
      vehiclesLast7Days: 65,
      revenueToday: 300,
      revenueLast7Days: 1500,
    },
    3: {
      totalSlots: 30,
      bookedSlots: 20,
      availableSlots: 10,
      vehiclesToday: 20,
      vehiclesLast7Days: 75,
      revenueToday: 400,
      revenueLast7Days: 2000,
    },
  };

  return (
    <div className='dashboard-page'>
      
      {/* Header */}
      <header>
        <h1>Smart Parking Admin Dashboard</h1>
      </header>

      {/* Main Content */}
      <div className="dashboard-layout">
        <div className="dashboard-stats">
          {Object.keys(floorData).map((floorNumber) => {
            const data = floorData[floorNumber];
            return (
              <div className="stat-card" key={floorNumber}>
                <h2>Floor {floorNumber}</h2>
                <p><strong>Total Slots:</strong> {data.totalSlots}</p>
                <p><strong>Booked Slots:</strong> {data.bookedSlots}</p>
                <p><strong>Available Slots:</strong> {data.availableSlots}</p>
                <p><strong>Vehicles Today:</strong> {data.vehiclesToday}</p>
                <p><strong>Vehicles in Last 7 Days:</strong> {data.vehiclesLast7Days}</p>
                <p><strong>Revenue Today:</strong> ${data.revenueToday}</p>
                <p><strong>Revenue Last 7 Days:</strong> ${data.revenueLast7Days}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer>
        &copy; {new Date().getFullYear()} Smart Parking. All Rights Reserved.
      </footer>
    </div>
  );
};

