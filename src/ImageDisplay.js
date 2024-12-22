import React from 'react';

export const ImageDisplay = ({ imageUrl }) => {
  return (
    <div className="image-display">
      <h3>Uploaded Image</h3>
      <img src={imageUrl} alt="Report" style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} />
    </div>
  );
};

