import React, { useState } from 'react';
import BookingForm from './components/bookingForm';
import Booking from './components/booking';
import "./App.css";
const App = () => {
  const [bookings, setBookings] = useState([]);

  const handleSubmit = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className='form'>
      <h2>Bookings</h2>
      <BookingForm onSubmit={handleSubmit} />
      <h2>Booking List:</h2>
      {bookings.map((booking) => (

        <Booking key={booking.email} booking={booking} />
      ))}
    </div>
  );
};

export default App;