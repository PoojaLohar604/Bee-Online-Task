import React from "react";
import "./News.css";
import { useState } from "react";

const News = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setErrorMessage(""); // Clear error if valid
      // Proceed with the subscription logic here
      alert("Subscribed successfully!");
    } else {
      setErrorMessage("Please enter a valid email address.");
    }
  };
  return (
    <div className="news-page-container">
      <div className="news-main-content">
        <div className="news-text-content">
          <h5>Newsletter</h5>
          <h2>Watch our Courses</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="subscribe-div">
          <div className="input-field">
            <input
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="subscribe-button" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default News;
