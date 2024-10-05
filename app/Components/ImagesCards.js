import React from "react";

const ImagesCards = () => {
  const brands = [
    { name: "HORSEPOWER", image: "/images/services/img1.webp" },
    { name: "FIRESTONE", image: "/images/services/img2.webp" },
    { name: "ROADSTER", image: "/images/services/img3.webp" },
    { name: "CROSSOVER", image: "/images/services/img4.webp" },
    { name: "DRAFTING", image: "/images/services/img5.webp" },
    { name: "HORSEPOWER", image: "/images/services/img6.webp" },
    { name: "FIRESTONE", image: "/images/services/img7.webp" },
    { name: "FIRESTONE", image: "/images/services/img8.webp" },
  ];

  return (
    <section className="image-card hidden bg-gray-50  sm:py-8 lg:py-8 xl:py-16 overflow-hidden">
      <div className=" mx-auto px-3 sm:px-6 lg:px-10 xl:px-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4">
            Compatible With These Vehicle Brands
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Discover the wide range of vehicle brands that are compatible with our products.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="object-cover w-full h-40 sm:h-48"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center  transition-opacity duration-300">
                <h3 className="text-white text-base sm:text-lg font-semibold">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImagesCards;



// import React from "react";

// const ImagesCards = () => {
//   const brands = [
//     { name: "HORSEPOWER", image: "/images/services/img1.webp" },
//     { name: "FIRESTONE", image: "/images/services/img2.webp" },
//     { name: "ROADSTER", image: "/images/services/img3.webp" },
//     { name: "CROSSOVER", image: "/images/services/img4.webp" },
//     { name: "DRAFTING", image: "/images/services/img5.webp" },
//     { name: "HORSEPOWER", image: "/images/services/img6.webp" },
//     { name: "FIRESTONE", image: "/images/services/img7.webp" },
//     { name: "FIRESTONE", image: "/images/services/img8.webp" },
//   ];

//   return (
//     <section className="image-card bg-gray-50 py-16 ">
//       <div className="container mx-auto px-6 lg:px-20">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-bold text-black mb-4">
//             Compatible With These Vehicle Brands
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover the wide range of vehicle brands that are compatible with our products.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {brands.map((brand, index) => (
//             <div
//               key={index}
//               className="relative flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
//             >
//               <img
//                 src={brand.image}
//                 alt={brand.name}
//                 className="object-cover w-full h-48"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <h3 className="text-white text-lg font-semibold">{brand.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImagesCards;
