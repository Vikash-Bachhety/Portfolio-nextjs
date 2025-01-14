"use client";

import React, { useState } from "react";
import axios from "axios";
import "../../../components/component.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [failedMessage, setFailedMessage] = useState("");
  const [loading, setLoading] = useState(false); // New state to track loading status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Disable the button and set loading state to true

    try {
      console.log('Submitting contact form with:', { name, email, message });  // Debugging log

      // Sending the POST request to the backend
      const response = await axios.post("/api/contact", {
        name,
        email,
        message,
      });

      console.log("Response:", response.data);  // Debugging log

      if (response.data.success) {
        setSuccessMessage("Message sent successfully !!!");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000); // Success message disappears after 3 seconds
      } else {
        setFailedMessage("Message not sent. Please try again later.");
        setTimeout(() => {
          setFailedMessage("");
        }, 3000); // Error message disappears after 3 seconds
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFailedMessage("Message not Sent !!!");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setFailedMessage("");
      }, 3000); // Error message disappears after 3 seconds
    } finally {
      setLoading(false);  // Re-enable the button after the response
    }
  };

  return (
    <section className="contact-section min-h-screen lg:py-12 flex justify-center items-center">
      <div className="flex flex-col items-center w-full mx-auto px-4 lg:w-4/5">
        <h2 className="drops hover:border-b-2 h-10 lg:h-12 text-2xl lg:text-4xl font-bold md:mb-5 text-center">
          Get In Touch
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-center w-full z-10">
          <div className="scale border border-current rounded-lg p-4 lg:p-8 w-full sm:w-5/6 lg:w-1/4 flex flex-col duration-300 items-center mb-2 lg:mb-0">
            <h3 className="text-lg lg:text-xl font-semibold  mb-3 lg:mb-4">
              Contact Information
            </h3>
            <ul>
              <li className="flex items-center mb-1 lg:mb-2">
                email : bachhetyv@gmail.com
              </li>
              <li className="flex items-center mb-1 lg:mb-2">
                Phone. : +91xxxxxxxxxx
              </li>
              <li className="flex items-center">Address : Dehra Dun, IND</li>
            </ul>
          </div>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="scale border border-current p-4 lg:p-4 rounded-lg mt-4 md:h-full flex justify-center items-center flex-col w-full sm:w-5/6 lg:w-1/2"
          >
            {successMessage && (
              <p className="mx-auto text-green-500 md:mb-2 mb-4 text-sm md:text-lg tracking-widest font-thin">
                {successMessage}
              </p>
            )}
            {failedMessage && (
              <p className="mx-auto text-rose-500 md:mb-2 mb-4 text-sm md:text-lg tracking-widest font-thin">
                {failedMessage}
              </p>
            )}
             <p className="hidden md:block text-center font-medium mb-4 lg:mb-6 max-w-lg">
             I’d love to hear from you! Whether you’re looking to collaborate, discuss an opportunity, or simply connect, drop me a message below, and I’ll get back to you promptly.
            </p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 text-black py-2 px-3 lg:py-3 lg:px-4 rounded mb-3 lg:mb-4 w-full focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 text-black py-2 px-3 lg:py-3 lg:px-4 rounded mb-3 lg:mb-4 w-full focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              className="bg-gray-50 text-black py-2 px-3 lg:py-3 lg:px-4 rounded mb-3 lg:mb-4 w-full focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className={`bg-blue-500 text-white py-2 px-4 lg:py-3 lg:px-6 rounded hover:bg-blue-600 transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
