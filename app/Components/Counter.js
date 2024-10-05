"use client";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [happyUsers, setHappyUsers] = useState(0);
  const [casesResolved, setCasesResolved] = useState(0);
  const [expertLawyers, setExpertLawyers] = useState(0);
  const [specialities, setSpecialities] = useState(0);

  useEffect(() => {
    const duration = 2000; // Duration for the animation

    const incrementCounter = (setCounter, targetValue, startValue = 0) => {
      const incrementTime = Math.floor(duration / (targetValue - startValue));
      const counterInterval = setInterval(() => {
        startValue += 1;
        setCounter(startValue);
        if (startValue >= targetValue) {
          clearInterval(counterInterval);
        }
      }, incrementTime);
    };

    // Increment counters with the specified target values
    incrementCounter(setHappyUsers, 600, 0); // From 0 to 600
    incrementCounter(setCasesResolved, 500, 0); // From 0 to 500
    incrementCounter(setExpertLawyers, 400, 0); // From 0 to 400
    incrementCounter(setSpecialities, 300, 0); // From 0 to 300
  }, []);

  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12  mt-8 overflow-hidden">
        <div className="bg-sky-600">
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto relative top-[3rem] ">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 items-center border-b relative  border-gray-400 rounded-lg shadosw-lg p-8 bg-gray-50">
              {/* Happy Users */}
              <div className="text-center p-4 lg:border-r-2">
                <h2 className="text-2xl font-bold text-[#000]">
                  {happyUsers.toLocaleString()}+
                </h2>
                <p className="text-gray-500">Happy Users</p>
              </div>

              {/* Cases Resolved */}
              <div className="text-center p-4 lg:border-r-2">
                <h2 className="text-2xl font-bold text-[#000]">
                  {casesResolved.toLocaleString()}+
                </h2>
                <p className="text-gray-500">Cases Resolved</p>
              </div>

              <div className="text-center p-4 lg:border-r-2">
                <h2 className="text-2xl font-bold text-[#000]">
                  {expertLawyers}+
                </h2>
                <p className="text-gray-500">Expert Lawyers</p>
              </div>

              <div className="text-center p-4 lg:border-r-2">
                <h2 className="text-2xl font-bold text-[#000]">
                  {specialities}+
                </h2>
                <p className="text-gray-500">Specialities</p>
              </div>

              <div className="text-center p- col-span-2 lg:col-span-1 flex  justify-center items-center">
                <img src="/images/google.webp" alt="Google Logo" className="h-14" />
                <div className="ml-4 text-left">
                  <div className="flex items-center">
                    <h2 className="text-2xl font-bold text-[#000]">4.4/5</h2>
                    <div className="ml-2 flex">
                      {/* Star icons */}
                      <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.454a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.375-2.454a1 1 0 00-1.176 0l-3.375 2.454c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.535 9.384c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                      <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.454a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.375-2.454a1 1 0 00-1.176 0l-3.375 2.454c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.535 9.384c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">16k+ Happy Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
