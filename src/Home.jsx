import React from 'react';
import './App.css'; // Ensure the CSS is imported

const Home = () => (
    <div className="home-container">
        <div className="home-content">
            <h1></h1>
            <h1></h1>
            <h1 className="home-title">Welcome to Our College</h1>
            <img src="src/clg.jpg" alt="Saveetha Engineering College Logo" width="1000" height="400"></img>

            <p className="home-subtitle">Your future starts here. Learn more about our programs and events.</p>
        </div>
    </div>
);

export default Home;