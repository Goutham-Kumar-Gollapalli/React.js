import React from "react";
import "../App.css";
const Contact = () => {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>Message</label>
        <textarea
          placeholder="Enter your message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;