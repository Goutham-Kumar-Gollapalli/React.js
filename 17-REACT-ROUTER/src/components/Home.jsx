import React from "react";
import "../App.css";
import Navbar from "../Navbar";
const Home = () => {
  return (
    <div>
        <Navbar/>
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>
          This is the home page of my React application.
        </p>

        <button>Learn More</button>
      </section>

      <section className="cards">
        <div className="card">
          <h2>Simple</h2>
          <p>Simple and clean React application.</p>
        </div>

        <div className="card">
          <h2>Responsive</h2>
          <p>Works on different screen sizes.</p>
        </div>

        <div className="card">
          <h2>Modern</h2>
          <p>Built using modern React concepts.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;