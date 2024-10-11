"use client";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import Image from "next/image";


import Swal from 'sweetalert2'
const ContactUs = () => {
  // const contacts = [
  //   {
  //     country: 'India',
  //     office: 'Registered Office',
  //     address: '1400 Avery Ranch Blvd, Ste C200 Austin, Texas-78717',
  //     email: 'timesheet@nxedgesol.com',
  //     phone: '+91-512-640-6568',
  //     image: '/images/india.webp',
  //   },
  //   {
  //     country: 'Italy',
  //     office: 'Registered Office',
  //     address: '1400 Avery Ranch Blvd, Ste C200 Austin, Texas-78717',
  //     email: 'invoice@nxedgesol.com',
  //     phone: '+91-512-640-6568',
  //     image: '/images/italy.webp',
  //   },
  //   {
  //     country: 'United States',
  //     office: 'Registered Office',
  //     address: '1400 Avery Ranch Blvd, Ste C200 Austin, Texas-78717',
  //     email: 'hiring@nxedgesol.com',
  //     phone: '+91-512-640-6568',
  //     image: '/images/usa.webp',
  //   },
  // ];

  // const [formSubimitAlert, setFormSubmitAlert] = useState(false);
  // const [formLoader,setFormLoader]=useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    userEmail: "invoice@nxedgesol.com",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://sendingmail-6znv.onrender.com/sendmail"; // Replace with your actual API endpoint
    const data = new URLSearchParams();

    // Use the formData values instead of hardcoded values
    data.append("S_name", formData.name);
    data.append("S_phone", formData.phone);
    data.append("message", formData.message);
    data.append("S_email", formData.email);
    data.append("userEmailsir", formData.userEmail);
    data.append("S_services", formData.course);


    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // URL-encoded form data
        },
        body: data.toString(), // Send the URL-encoded string
      });
    

      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      })


      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText); // Handle error
      }
    } catch (error) {
      console.error("Network error:", error); // Handle network error
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
      userEmail: "shubham.developerr@gmail.com",
    });


    setFormLoader(true);
  };

  // useEffect(()=>{
  //  const altertMssg= setTimeout(() => {
  //     setFormSubmitAlert(false)
  //   },2000);
  //   const loader=setTimeout(() => {
  //     setFormLoader(false)
  //   }, 1000);
  //   return ()=>clearTimeout(altertMssg,loader)
  // })
  return (
    <>
      <div className="mx-8 lg:mx-32 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white text-center border-2 py-10 shadow-lg">
            <div className="flex items-center mb-4">
              <Image
                src="/images/email.webp"
                alt="Email Icon"
                width={70}
                height={70}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold my-3">Email Address</h3>
            <p>
              <a href="mailto:hiring@nxedgesol.com">hiring@nxedgesol.com</a> <br />
              <a href="mailto:timesheet@nxedgesol.com.com">timesheet@nxedgesol.com</a>
            </p>
          </div>

          <div className="bg-white text-center border-2 py-10 shadow-lg">
            <div className="flex items-center mb-4">
              <Image
                src="/images/phone.webp"
                alt="Phone Icon"
                width={70}
                height={70}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold my-3">Phone Number</h3>
            <p>
            +91-512-640-6568
            </p>
          </div>

          <div className="bg-white text-center border-2 py-10 shadow-lg">
            <div className="flex items-center mb-4">
              <Image
                src="/images/map.webp"
                alt="Office Icon"
                width={70}
                height={70}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold my-3">Office Address</h3>
            <p>
            1400 Avery Ranch Blvd, Ste C200 Austin,Texas-78717
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 sm:pb-8 lg:px-32 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
            <section className="lg:col-span-6 flex justify-center items-center p-4 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.254660711403!2d-97.81051952463716!3d30.485542674704366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d676a4f8fbb%3A0xe30c779f09a81ffc!2s1400%20Avery%20Ranch%20Blvd%20c200%2C%20Cedar%20Park%2C%20TX%2078613%2C%20USA!5e0!3m2!1sen!2sin!4v1728540444926!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </section>

            <div className="lg:col-span-6 bg-white p-8 shadow-lg rounded-lg flex flex-col h-full">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800">
                  Get In Touch
                  
                </h4>
                <p className="text-gray-600 mt-4">
                  We're here to help! If you have any questions or would like to
                  discuss how our services can benefit your business,
                </p>
              </div>
              <form
                id="contact-form"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6 flex-grow"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    id="contact-phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                    required
                  />
                  <select
                    name="course"
                    id="course-select"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                  >
                    <option value="services">Services</option>
                    <option value="WebSite-Design">WebSite Design</option>
                    <option value="mobile-app-development">
                      Mobile App & Development
                    </option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="seo">Design & Branding</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  id="contact-message"
                  cols="30"
                  rows="4"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                  required
                ></textarea>
                {/* {formSubimitAlert && <div className="bg-sky-100 py-4 px-10 rounded-xl space-y-2">
                 
                  <p className="text-xs"> Your message has been sent.Thank you!</p>
                  
                </div>}
              {formLoader&& <div className="flex justify-start items-center px-10">
             <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-blue-500"></div>
            </div>}  */}

                <button
                  type="submit"
                  className="w-full bg-sky-600 text-white p-3 rounded-lg font-bold hover:bg-sky-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
