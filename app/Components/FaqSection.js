"use client";
import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What conditions does the General Medicine department treat?",
      answer:
        "Our department handles various medical conditions, offering comprehensive care from diagnostics to treatment.",
    },
    {
      question: "How does the department handle emergencies?",
      answer:
        "We are equipped to manage emergencies, including heart attacks, strokes, and other critical conditions.",
    },
    {
      question: "What are the services offered by the General Medicine department?",
      answer:
        "Our services include diagnostics, treatment for chronic diseases, and preventive care.",
    },
  ];
  return (
    <section className="px-4 md:px-8 lg:px-20 py-4 md:py-8  bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* FAQ Text Section */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-5">
              <h6 className="text-purple-700 font-semibold uppercase tracking-wide">
                Frequently Asked Questions
              </h6>
              <h3 className="text-xl sm:text-2xl md:text-2xl xl:text-4xl font-bold text-gray-900 leading-tight">
                Find Answers to Your Questions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Have questions? We're here to help! Browse through the most common inquiries below.
              </p>
            </div>
            <div className="space-y-4 lg:space-y-6">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`border-b pb-4 transition-all duration-500 ease-in-out rounded-lg ${
            activeIndex === index
              ? "bg-purple-50 border-purple-500 shadow-lg"
              : "border-gray-300"
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer p-4 rounded-lg hover:bg-purple-100 transition-colors duration-300"
            onClick={() => toggleAccordion(index)}
            role="button"
            aria-expanded={activeIndex === index}
            aria-controls={`faq-${index}`}
          >
            <div className="flex items-center space-x-3">
              <FaQuestionCircle className="text-xl sm:text-2xl text-purple-600" />
              <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                {faq.question}
              </h4>
            </div>
            <span
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              {activeIndex === index ? (
                <FaChevronUp className="text-xl sm:text-2xl text-purple-600" />
              ) : (
                <FaChevronDown className="text-xl sm:text-2xl text-gray-600" />
              )}
            </span>
          </div>
          {/* Conditionally rendering the answer */}
          {activeIndex === index && (
            <div
              id={`faq-${index}`}
              className="mt-4 px-4 text-gray-700 text-sm sm:text-base transition-opacity duration-500 opacity-100"
            >
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/faq.webp"
              alt="FAQ Image"
              className="w-full  max-w-44 rounded-full lg:max-w-[100%] object-cover lg:rounded-lg shadow-xl"
              width={600}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600 via-transparent to-transparent opacity-60 rounded-lg"></div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
