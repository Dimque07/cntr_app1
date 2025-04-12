import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import MainScreen from './components/MainScreen';
import Menu from './components/Menu';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import './styles/main.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('main');
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  const handleBookTable = () => {
    setCurrentScreen('booking');
  };

  const handleViewMenu = () => {
    setCurrentScreen('menu');
  };

  const handleSubmitBooking = (data) => {
    setBookingData(data);
    setCurrentScreen('confirmation');
  };

  const handleBack = () => {
    setCurrentScreen('main');
  };

  return (
    <div className="app">
      {currentScreen === 'main' && (
        <MainScreen onBookTable={handleBookTable} onViewMenu={handleViewMenu} />
      )}
      {currentScreen === 'menu' && <Menu onBack={handleBack} />}
      {currentScreen === 'booking' && (
        <BookingForm onSubmit={handleSubmitBooking} onBack={handleBack} />
      )}
      {currentScreen === 'confirmation' && (
        <Confirmation data={bookingData} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;