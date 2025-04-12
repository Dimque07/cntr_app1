import React from 'react';
import '../styles/main-screen.css';

const MainScreen = ({ onBookTable, onViewMenu }) => {
  return (
    <div className="main-screen">
      <h1>CNTR Lounge</h1>
      <p>Твое любимое место в центре города! </p>
      
      <div className="buttons-container">
        <button className="primary-button" onClick={onBookTable}>
          Забронировать стол
        </button>
        <button className="secondary-button" onClick={onViewMenu}>
          Меню
        </button>
      </div>
    </div>
  );
};

export default MainScreen;