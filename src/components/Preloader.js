// src/components/Preloader.js
import React, { useEffect } from 'react';
import '../styles/preloader.css';
import logo from '../assets/logo.png'; // Импортируем ваш логотип PNG

const Preloader = () => {
  useEffect(() => {
    // Анимация дыма
    const smoke = document.querySelector('.smoke');
    if (smoke) {
      smoke.style.animation = 'smokeAnimation 3s ease-out forwards';
    }
  }, []);

  return (
    <div className="preloader">
      <div className="logo-container">
        {/* Вставляем ваш PNG логотип */}
        <img src={logo} alt="Lounge Logo" className="logo-img" />
        <div className="smoke"></div>
      </div>
    </div>
  );
};

export default Preloader;