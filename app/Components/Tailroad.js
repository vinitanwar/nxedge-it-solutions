import React from "react";

const Tailroad = () => {
    const services = [
        {
            title: "Our Value",
            descriptionn: "Explore Our Unique Value Proposition & How We Drive Business Growth",
            description: "We’re committed to delivering exceptional value to our clients. We understand that every business is unique and provide a personalized approach to every project we undertake.",
            icon: "🚀",
            image: null,
        },
        {
            title: "Our Mission",
            descriptionn: "We strive to be more than just a service provider; we aim to be a trusted partner",
            description: "By staying true to our mission and values, we are committed to helping businesses of all sizes achieve their goals and realize their potential.",
            icon: "🎯",
            image: null,
        },
        {
            title: "Our Vision",
            descriptionn: "We aspire to create a world where every business owner feels empowered",
            description: "By staying true to our vision and values, we are committed to driving positive change and shaping a brighter future for businesses and communities.",
            icon: "🌟",
            image: null,
        },
    ];

    return (
        <div className="py-16 px-4 md:px-12 lg:px-20 bg-gray-100 overflow-hidden">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-gray-800 text-center mb-4 lg:mb-8 leading-tight">
                Tailored Solutions, Proven Results, <br />
                And Exceptional Service
            </h3>
            <p className="text-center mb-4 lg:mb-16 text-base  md:text-lg text-gray-600">
                We pride ourselves on delivering a value proposition <br />
                that exceeds expectations. Our approach is centered on understanding your business inside out.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`relative p-5 lg:p-8 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-6 hover:shadow-2xl ${
                            index === 0
                                ? "text-black border border-transparent"
                                : "text-indigo-600 text-gray-900 border border-gray-200"
                        }`}
                    >
                        <div className="relative z-10 flex items-center justify-center mb-6">
                            <span className="text-4xl lg:text-6xl">{service.icon}</span>
                        </div>
                        <h3 className={`relative z-10 text-xl lg:text-2xl font-bold mb-4 ${index === 0 ? "text-indigo-600" : "text-indigo-600"}`}>
                            {service.title}
                        </h3>
                        {service.image && (
                            <img
                                src={service.image}
                                alt={service.title}
                                width={150}
                                className="rounded-full mx-auto mb-6"
                            />
                        )}
                        <h4 className="text-base lg:text-lg font-semibold mb-4 text-gray-700">{service.descriptionn}</h4>
                        <p className="text-sm lg:text-base leading-relaxed text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tailroad;
