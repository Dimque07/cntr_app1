import React from 'react';
import '../styles/confirmation.css';

const Confirmation = ({ data, onBack }) => {
  return (
    <div className="confirmation-screen">
      <div className="confirmation-card">
        <h2>Booking Confirmed!</h2>
        
        <div className="confirmation-details">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Date:</strong> {data.date}</p>
          <p><strong>Time:</strong> {data.time}</p>
          <p><strong>Guests:</strong> {data.guests}</p>
          <p><strong>Hookah:</strong> {data.hookahRequired ? 'Yes' : 'No'}</p>
          {data.notes && <p><strong>Notes:</strong> {data.notes}</p>}
        </div>
        
        <p className="thank-you-message">
          Благодарим вас за бронирование! Мы свяжемся с вами в ближайшее время для подтверждения бронирования.
        </p>
        
        <button className="back-button" onClick={onBack}>
          Back to Main
        </button>
      </div>
    </div>
  );
};

export default Confirmation;