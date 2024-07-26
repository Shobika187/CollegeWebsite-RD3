import React, { useState, useEffect } from 'react';

const eventsList = [
  {
    id: 1,
    event: "Tech Fest 2024",
    description: "A grand event showcasing the latest in technology.",
    image: "/CollegeWebsite-RD3/clg.jpg"
  },
  {
    id: 2,
    event: "Annual Sports Day",
    description: "A day filled with exciting sports activities.",
    image: "/CollegeWebsite-RD3//culturalfest.jpeg"
   
  },
  {
    id: 3,
    event: "Cultural Fest",
    description: "Celebrating diverse cultures with music and dance.",
    image: "/CollegeWebsite-RD3/culturalfest.jpeg"
  },
  {
    id: 4,
    event: "Science Fair",
    description: "Showcasing innovative science projects by students.",
    image: "/CollegeWebsite-RD3/science.jpeg"
  }
];

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % eventsList.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="events-container">
      <div className="event-card">
        <img
          src={eventsList[currentEvent].image}
          alt={eventsList[currentEvent].event}
          className="event-image"
        />
        <div className="event-details">
          <h3 className="event-name">{eventsList[currentEvent].event}</h3>
          <p className="event-description">{eventsList[currentEvent].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;