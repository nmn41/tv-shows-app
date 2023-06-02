import React, { useState } from 'react';

const SummaryScreen = ({ summary }) => {
  const [bookingFormVisible, setBookingFormVisible] = useState(false);
  const [movieName, setMovieName] = useState('');

  const handleBookTicket = () => {
    setBookingFormVisible(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // Store the user details in local/session storage
    // Perform any other desired action
  };

  return (
    <div>
      <h1>Summary</h1>
      <p>{summary}</p>
      <button onClick={handleBookTicket}>Book Ticket</button>

      {bookingFormVisible && (
        <form onSubmit={handleFormSubmit}>
          <h2>Booking Form</h2>
          <div>
            <label htmlFor="movieName">Movie Name:</label>
            <input
              type="text"
              id="movieName"
              name="movieName"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              readOnly
            />
          </div>
          {/* Include other form fields as needed */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SummaryScreen;
