import React from 'react';
import './VehicleSelector.css';
import { FaCar, FaMotorcycle, FaTruck } from 'react-icons/fa';

export const VehicleSelector = ({ onVehicleChange, selectedVehicle  }) => {
  console.log('Props received:', { onVehicleChange, selectedVehicle });

  const handleVehicleClick  = (vehicle) => {
    console.log('handleVehicleChange called with:', vehicle);
    if (onVehicleChange) {
      onVehicleChange(vehicle);
    } else {
      console.error('onVehicleChange is undefined.');
    }
  };

  return (
    <div className="vehicle-selector">
      <button
        className={selectedVehicle === 'Car' ? 'selected' : ''}
        onClick={() => handleVehicleClick('Car')}
      >
        <FaCar /> Car
      </button>
      <button
        className={selectedVehicle === 'Bike' ? 'selected' : ''}
        onClick={() => handleVehicleClick('Bike')}
      >
        <FaMotorcycle /> Bike
      </button>
      <button
        className={selectedVehicle === 'Truck' ? 'selected' : ''}
        onClick={() => handleVehicleClick('Truck')}
      >
        <FaTruck /> Truck
      </button>
    </div>
  );
}
 
