import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; 
import { FaWhatsapp } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, email, subject, message } = formData;
  
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
  
    // Replace with your WhatsApp number in international format
    const whatsappNumber = "919316024754";
  
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
    window.open(whatsappURL, "_blank");
  
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  

  return (
    <div className="bg-transparent text-white font-oxanium w-full flex justify-center pr-4 pt-12 md:p-0 h-full">
      <div className="w-full max-w-5xl">
        {/* Headline */}
        <span className="text-white text-lg font-semibold md:text-xl flex flex-col items-start gap-2">
          Contact Me
          <span className="text-white text-sm font-medium font-sans">
            Feel free to drop a message – I’ll get back to you!
          </span>
        </span>

        {/* Form & Contact Info Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Contact Form (Left) */}
          <div
            className="bg-white/5 p-6 rounded-sm shadow-lg hover:shadow-black/30"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 10px, 68% 10px, 70% 0, 100% 0, 100% 90%, 70% 100%, 70% 300px, 100% 310px, 100% 100%, 0 100%, 0 400px, 10px 390px, 10px 100px, 0 90px)",
              backgroundColor: "rgb(44,44,44)",
              backdropFilter: "blur(10px)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-purple-300/25 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:scale-[1.02] transform-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-purple-300/25 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:scale-[1.02] transform-300"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded bg-purple-300/25 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:scale-[1.02] transform-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-purple-300/25 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:scale-[1.02] transform-300"
              ></textarea>
              <button
                type="submit"
                className="mt-4 rounded-md rounded-br-xl bg-white/5  text-white hover:bg-white/15 hover:text-white transition duration-300 px-7 py-3  font-oxanium font-medium backdrop-blur-md shadow-md"
              >
                Send Message on WhatsApp 
               <FaWhatsapp className="inline-block ml-3 size-5" />
              </button>
            </form>
          </div>

          {/* Get in Touch (Right) */}
          <div
            className="bg-white/5 p-6 rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-300 hover:shadow-black/30 max-h-full"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 10px, 68% 10px, 70% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)",
              backgroundColor: "rgb(44,44,44)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h2 className="text-white text-lg font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BiEnvelope className="text-purple-400 mt-1 size-6" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-md font-semibold">
                    <a href="mailto:sathwarauday24@gmail.com">sathwarauday24@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-purple-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-md font-semibold">+91 93160 24754</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-purple-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-md font-semibold">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;