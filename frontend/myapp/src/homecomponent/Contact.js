// src/Contact.js
import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'; // Create this CSS file for custom styles
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_swie2tf', 'template_ufiup3b', form.current, 'q9TsXVE5Mk_LFhpmE')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("There was an error sending your message. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-5 text-center">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-description">We'd love to hear from you! Reach out to us with any questions or feedback.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="user_name" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="user_email" placeholder="name@example.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="3" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
