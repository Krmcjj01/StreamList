import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserEvents />
      {/* Your other components*/}
    </div>
  );
}

const UserEvents = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (message) => {
    setEvents([...events, message]);
  };

  return (
    <div className="user-events">
      <h2>User Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserEvents;
