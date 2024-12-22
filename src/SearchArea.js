import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchArea.css';

export function SearchArea() {
  return (
    <div className="search-area">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search for place..." />
    </div>
  );
} 


