import "../styles/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    try {
      emailjs.sendForm(
        "service_zl7te1h",
        "template_oeivq8p",
        form.current,
        "sWEP46cF27ED3ybZ-"
      );
      console.log("message sent");
    } catch (error) {
      console.log(error.text);
    }
    e.target.reset();
  };

  return (
    <section className="form-section" id="contact">
      <h1 className="form-header-text">Contact me</h1>
      <form className="form-container" ref={form} onSubmit={sendEmail}>
        <div className="form-control">
          <label htmlFor="name" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="Message" />
          <textarea
            type="text"
            name="message"
            placeholder="message"
            className="form-input message"
            required
          />
        </div>
        <div className="form-submit">
          <button className="submit-btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
