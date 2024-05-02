import React, { useState } from 'react';
import "./bookingForm.css"

const BookingForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 5));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, date, time });
    setName('');
    setEmail('');
    setDate('');
    setTime('');
  };

  return (
    <form className='booking-form' onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;