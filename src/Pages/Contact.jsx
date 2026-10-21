import React, { useState } from "react";
import "./contact.css"

export default function Contact(){
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return(
        <div className="contact-container">
            <div className="contact-header">
                <h1>Get in touch</h1>
                <p>Have questions about our products or your order? we'd love to hear from you!</p>
            </div>

            <div className="contact-wrapper">
                {/* contact info side */}
                <div className="contact-info">
                    <h2>Contact Info</h2>
                    <p><strong>Location:</strong> Lagos, Nigeria</p>
                    <p><strong>Email:</strong> Onyenyirilucy@gmail.com</p>
                    <p><strong>Phone:</strong> +234 9032 758 506</p>
                    <p><strong>Hours:</strong> Mon- sat: 9:00 Am - 6:00 pm</p>
                </div>

                {/* contact form side */}
                <div className="contact-form-container">
                    {submitted ?(
                        <div className="success-message">
                            <h3>Thank you!</h3>
                            <p>Your message has been sent Successfully. we'll get back to you soon</p>
                        </div>
                    ):(
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h2>Send Us a Message</h2>
                            <div  className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="Enter your name" required/>
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email5" placeholder="Enter your email" required/>
                            </div>
                            <div className="form-group">
                                <label>Messages</label>
                                <textarea rows="5" placeholder="How can we help you" required></textarea>
                            </div>
                            <button type="submit" className="sumbit-btn">Send Messages</button>
                        </form>
                    )
                }
                </div>
            </div>
        </div>
    )
}