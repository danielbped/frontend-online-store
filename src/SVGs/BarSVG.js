import React, { Component } from 'react';
import '../pages/Payment.css';

class BarSVG extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upc card-image" viewBox="0 0 16 16">
        <path
          d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5
             0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-
             .5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5
             0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"
        />
      </svg>
    );
  }
}

export default BarSVG;
