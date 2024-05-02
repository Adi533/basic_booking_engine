import React from 'react';
import "./booking.css"
const Booking = ({ booking }) => {
  return (
    <div className='booking'>
      <h3>{booking.name}</h3>
      <p>{booking.email}</p>
      <p>{booking.date}</p>
      <p>{booking.time}</p>
    </div>
  );
};

export default Booking;