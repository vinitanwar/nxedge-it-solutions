import Link from 'next/link';
import React from 'react';

const ContactUs = () => {
  const contacts = [
    {
      country: 'India',
      office: 'Registered Office',
      address: '1400 Avery Ranch Blvd, Ste C200 Austin,Texas-78717',
      email: 'timesheet@nxedgesol.com',
      phone: '+91-512-640-6568',
      image: '/images/itly.webp',
    },
    {
      country: 'Italy',
      office: 'Registered Office',
      address: '1400 Avery Ranch Blvd, Ste C200 Austin,Texas-78717',
      email: 'invoice@nxedgesol.com',
      phone: '+91-512-640-6568',
      image: '/images/india.webp',
    },
    {
      country: 'United States',
      office: 'Registered Office',
      address: '1400 Avery Ranch Blvd, Ste C200 Austin,Texas-78717',
      email: 'hiring@nxedgesol.com',
      phone: '+91-512-640-6568',
      image: '/images/usa.webp',
    },
  ];

  return (
    <>
      <section className="lg:py-16 px-5 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-6 bg-gradient-to-r py-8 px-5 lg:p-8 shadow-xl rounded-lg relative">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-6 text-black">Contact Info</h3>
              <p className="mb-6 text-gray-800 text-sm md:text-base">
                We're here to help! If you have any questions or would like to discuss how our SEO and digital marketing services can benefit your business, reach out below.
              </p>
              <ul className="space-y-8">
                <li className="flex items-center lg:items-start space-x-4">
                  <img src='/images/location.webp' className="animate-bounce w-10 h-10" />
                  <div>
                    <h5 className="text-base lg:text-lg font-semibold text-black">Address</h5>
                    <p className="text-sm lg:text-base text-gray-800">1400 Avery Ranch Blvd, Ste C200 Austin,Texas-78717</p>
                  </div>
                </li>
                <li className="flex items-center lg:items-start space-x-4">
                  <img src='/images/mail.webp' className="animate-bounce w-10 h-10" />
                  <div>
                    <h5 className="text-base lg:text-lg font-semibold text-black">Email</h5>
                    <p className="text-sm lg:text-base text-gray-800">
                      <a href="mailto:hiring@nxedgesol.com" className="text-sky-600 hover:text-sky-800 hover:underline">hiring@nxedgesol.com</a>
                    </p>
                  </div>
                </li>
                <li className="flex items-center lg:items-start space-x-4">
                  <img src='/images/phone-call.webp' className="animate-bounce w-10 h-10" />
                  <div>
                    <h5 className="text-base lg:text-lg font-semibold text-black">Phone</h5>
                    <p className="text-sm lg:text-base text-gray-800">
                      <a href="tel:+91-512-640-6568" className="text-sky-600 hover:text-sky-800 hover:underline">+91-512-640-6568</a>
                    </p>
                  </div>
                </li>
              </ul>
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img src="/images/contact-bg.svg" className="w-full h-full object-cover" alt="Background" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-6 bg-white p-6 md:p-8 shadow-xl rounded-lg">
              <div className="mb-6">
                <h4 className="text-lg md:text-2xl font-bold text-gray-800">Get In Touch</h4>
                <p className="text-gray-600 text-sm md:text-base mt-4">
                  Feel free to reach out to us with your inquiries or requests. We're ready to assist you!
                </p>
              </div>
              <form id="contact-form" method="POST" action="" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" name="contact-name" id="contact-name" placeholder="Your name" className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none text-sm md:text-base" />
                  <input type="email" name="contact-email" id="contact-email" placeholder="Your email" className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none text-sm md:text-base" />
                  <input type="tel" name="contact-phone" id="contact-phone" placeholder="Phone number" className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none text-sm md:text-base" />
                  <select name="course" id="course-select" className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none text-sm md:text-base">
                    <option value="services">Select Service</option>
                    <option value="gnm">Germany</option>
                  </select>
                </div>
                <textarea name="contact-message" id="contact-message" cols="30" rows="4" placeholder="Your message" className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none text-sm md:text-base"></textarea>
                <button type="submit" className="w-full bg-sky-600 text-white p-3 rounded-lg font-bold hover:bg-sky-700 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img className="w-full h-48 object-cover" src={contact.image} alt={`${contact.country} image`} />
                <div className="p-6">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{contact.country}</h2>
                  <p className="text-sm md:text-base text-gray-600 mb-2">{contact.office}</p>
                  <p className="text-sm md:text-base text-gray-700 mb-2">{contact.address}</p>
                  <p className="text-sm md:text-base text-gray-700 mb-2">{contact.email}</p>
                  <p className="text-sm md:text-base text-gray-700">{contact.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Google Map */}
      <section className="flex justify-center items-center p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29250838.18065772!2d61.0245165611659!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e1!3m2!1sen!2sin!4v1724756841187!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96"
        ></iframe>
      </section>
    </>
  );
};

export default ContactUs;
