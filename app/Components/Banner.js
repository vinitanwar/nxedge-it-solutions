import Image from "next/image";

const Banner = () => {
  return (
    <section className="banner-main relative overflow-hidden bg-gradient-to-b from-[#244e6d] to-[#102a44] pt-4 md:pt-0  md:pb-10">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2  gap-8 px-4 md:px-8 lg:px-20 py-4 md:py-8  items-center ">
        {/* Text content section */}
        <div className="text-center md:text-left border-gray-300  ">
          <h5 className="text-white bg-sky-500 inline-flex items-center px-3 sm:px-4 py-2 rounded-lg font-light text-xs sm:text-sm md:text-md mb-4">
            Top #1 SEO &amp; Marketing Agency
          </h5>
          <h1 className="text-white lg:leading-tight text-xl md:text-3xl lg:text-4xl xl:text-[48px] font-extrabold mb-6">
            <div className="split-line">Elevate Your Brand</div>
            <div className="split-line">
              With Expert SEO &amp; Digital Marketing
            </div>
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-lg">
            Welcome to SEOC, where we revolutionize your online presence through
            expert SEO and digital marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="contact.html"
              className="text-white bg-sky-500 px-5 py-3 rounded-full shadow-lg hover:bg-sky-600 transition-transform transform hover:scale-105 text-xs sm:text-sm"
            >
              Start Ranking Now <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
            <a
              href="contact.html"
              className="text-sky-600 bg-transparent px-5 py-3 rounded-full border border-sky-600 shadow-lg hover:bg-sky-100 transition-transform transform hover:scale-105 text-xs sm:text-sm"
            >
              Contact Now{" "}
              <i className="fa-solid hidden fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>

        {/* Image section */}
      <div className=" relative flex justify-center     ">
        <img src="/images/header-imgbg.png" alt="" className="max-w-[80%] absolute -z-30 "/>
        <img src="/images/header-img1Banner.png" alt="" className="max-w-[65%] w-full" />

        <img src="images/bannerIconSound.svg" alt="" className="absolute LightSoundAnime w-14 md:w-auto left-0" />
        <img src="images/BannerIccon2.svg" alt="" className="absolute LightSoundAnime w-14 md:w-auto right-0 top-24 md:top-60" />
        <img src="/images/animationMove.png" alt="" className=" BannerAnime absolute left-0 bottom-0 max-w-[20%] w-full"  />
      </div>
       
      </div>
    </section>
  );
};

export default Banner;
