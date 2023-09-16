import React from 'react';
import '../styles/Error.css';

const ErrorPage = () => {
    return (
    <div className="error-container">
      <h1 className="error-title">Oops! Something Went Wrong</h1>
      <p className="error-message">
        We apologize for the inconvenience. Please try again later.
      </p>
    </div>
);    
}

export default ErrorPage