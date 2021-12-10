import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers'
// Todo: ensure validate email is being pulled in from utils once helper function is completed

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };
  const checkEmail = () => {
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    checkEmail();

    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
    alert(
      `Hello ${name}, thank you for reaching out! I look forward to getting in contact with you!`
    );
  };

  return (
    <div>
      <h3 className="row mb-2 ml-5  mr-5">
        Contact Page! Please fill out the form below with any questions or
        inquiries.
      </h3>
      <form className="form d-block">
        <div className="row mb-2 ml-5 mr-5">
          <label>Name:</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            onBlur={() => {
              name ? setErrorMessage("") : setErrorMessage("Name is required!");
            }}
          />
        </div>
        <div className="row mb-2 ml-5 mr-5">
          <label>Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            id="emailInput"
            onBlur={() => {
              setErrorMessage("");
              email ? checkEmail() : setErrorMessage("Email is required!");
            }}
          />
        </div>
        <div className="row mb-2 ml-5 mr-5">
          <label>Message:</label>
          <textarea
            value={message}
            name="text"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            onBlur={() => {
              message
                ? setErrorMessage("")
                : setErrorMessage("Message is required!");
            }}
          />
        </div>

        <button className="ml-5 mb-2" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="ml-5 text-danger">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;


