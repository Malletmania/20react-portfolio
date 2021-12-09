import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1 className="row mb-2 ml-5  mr-5">
        Contact Page! Please fill out the form below with any questions or
        inquiries.
      </h1>
      <form className="form d-block">
        <div className="row">
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
        <div className="row">
          <label>Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="email"
            onBlur={() => {
              email
                ? setErrorMessage("")
                : setErrorMessage("Email is required!");
            }}
          />
        </div>
        <div className="row">
          <label>Message:</label>
          <input
            value={message}
            name="message"
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
      </form>
    </div>
  );
}
