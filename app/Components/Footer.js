import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const useFulLink = [
    {
      heading: " Home",
      link: "/",
    },
    {
      heading: "Our Blog",
      link: "/Blog",
    },
    {
      heading: " About Us",
      link: "/about",
    },
    {
      heading: " Service",
      link: "/AllService/iosApplicationDevelopment",
    },
    {
      heading: " Contact Us",
      link: "/about",
    },
  ];
  const serviceLink = [
    {
      heading: " Website Design ",
      link: "/AllService/EcoomWebsite",
    },
    {
      heading: " Mobile and App Development ",
      link: "/AllService/androidapplicationdevelopment",
    },
    {
      heading: " Digital Marketing       ",
      link: "/AllService/socialMediaMarketingService",
    },
    {
      heading: "  Design & Branding ",
      link: "/AllService/corporateStationeryDesign",
    },
    {
      heading: "Web-Application-development ",
      link: "/AllService/WebApplicationdevelopment",
    },
    {
      heading: "  Ios App Development ",
      link: "/AllService/iosApplicationDevelopment",
    },
  ];
  return (
    <>
      <footer className="bg-gray-50 text- py-6 md:py-12 overflow-hidden">
        <div className="px-4 md:px-8 lg:px-20 py-4 md:py-4 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="">
                <img
                  src="/images/logo.webp"
                  alt="Blazity Logo"
                  className="h-6 lg:h-12 w-auto"
                />
              </div>
              <p className="text-black pb-3">
                At NX Edge Solutions, we are dedicated to delivering innovative
                web application development services tailored to the unique
                needs of startups, small and medium-sized businesses, and large
                enterprises.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Links</h3>
              <ul className="space-y-2 text-black ">
                {useFulLink.map((elm, index) => (
                  <Link href={elm.link}>
                    <li
                      className="flex items-center text-base pb-3"
                      key={index}
                    >
                      {elm.heading}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Services</h3>
              <ul className="flex flex-col gap-2 text-black">
                {serviceLink.map((service, index) => (
                  <Link href={service.link}>
                    <li
                      className=" cursor-pointer flex items-center text-sm pb-3"
                      key={index}
                    >
                      <MdArrowForwardIos className="mr-2 text-[#333]" />
                      {service.heading}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold" title="ss">
                Get in Touch
              </h3>

              <ul className="flex flex-col gap-2 text-black">
                <li className="flex items-center  text-sm pb-3">
                  <div className="flex  items-center">
                    <IoLocation className="mr-2 text-[#333]" />
                    <h4>Address</h4>
                  </div>
                  <p></p>
                </li>
                <li className="flex items-center  text-sm pb-3">
                  <FaPhoneAlt className="mr-2 text-[#333]" />
                  <span className="text-black">+91-512-640-6568</span>
                </li>
                <li className="flex items-center  text-sm ">
                  <FaEnvelope className="mr-2 text-[#333]" />
                  <span className="text-black">timesheet@nxedgesol.com</span>
                </li>
                <li className="flex items-center  text-sm ">
                  <FaFacebook className="mr-2 text-[#333]" />
                  <span>www.faceBook.com</span>
                </li>
                <Link href="https://www.linkedin.com/company/nxedge-solutions/">
                  <li className="flex items-center  text-sm ">
                    <FaLinkedin className="mr-2 text-[#333]" />
                    <span>www.Linkdin.com</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="main-icon-wstp ">
        <Link href="tel:(778) 669-1725">
          <button class="buttons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              viewBox="0 0 32 32"
              height="32"
              fill="none"
              class="svg-icon"
            >
              <path
                stroke-width="2"
                stroke-linecap="round"
                stroke="#fff"
                fill-rule="evenodd"
                d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>

        <Link href="https://api.whatsapp.com/send?phone=+91-512-640-6568&amp;text=Effective SEO Strategies for Growth">
          <button className="Btn">
            <span className="svgContainer">
              <svg
                viewBox="0 0 448 512"
                fill="white"
                height="1.6em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
            </span>
            <span className="BG"></span>
          </button>
        </Link>
      </div>

      <div className=" bg-[#F8F9FA] space-y-5 text-black px-4 lg:px-20 lg:py-10 md:py-5  ">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col gap-4 text-center md:text-start">
            <h4 className="text-lg md:text-2xl font-bold">
              Top App Development Companies
            </h4>
            <p>
              We design and develop custom mobile applicationsfor{" "}
              <br className="hidden md:block" /> IOS, Android & Hybrid
              platforms.
            </p>
            <div class="flex items-center justify-start  gap-3 mb-4">
              <p class="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text text-lg">
                Follow Us:
              </p>
              <Link href="https://www.facebook.com/" target="_blank">
                <svg
                  class="w-7 h-7 rounded bg-[#4243c9] text-white p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="currentColor"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </Link>
              <Link href="https://x.com/" target="_blank">
                <svg
                  class="w-7 h-7 rounded bg-[#4243c9] text-white p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </Link>
              <Link href="https://in.linkedin.com/" target="_blank">
                <svg
                  class="w-7 h-7 rounded bg-[#4243c9] text-white p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="w-7 h-7 rounded bg-[#4243c9] text-white p-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7 2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </Link>

              <a
                href="https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about"
                target="_blank"
              >
                <svg
                  class="w-7 h-7 rounded bg-[#4243c9] text-white p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM232.001 338.804V173.197L371.945 256l-139.944 82.804z"></path>
                </svg>
              </a>
              <Link href="https://github.com/" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="w-7 h-7 rounded bg-[#4243c9] text-white p-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.79.61-3.38-1.35-3.38-1.35-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.23-.26-4.57-1.11-4.57-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.03A9.52 9.52 0 0112 7.36c.85.01 1.7.11 2.5.32 1.91-1.3 2.75-1.03 2.75-1.03.55 1.39.2 2.43.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.67-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.012 10.012 0 0022 12c0-5.52-4.48-10-10-10z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <ul className="grid grid-cols-4 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
              <li className=" ">
                <a href="/">
                  <img
                    src="/images/BATCHES/1FooterBatches.png"
                    alt="badges"
                  />
                </a>
              </li>
              <li className="">
                <a href="/">
                  <img
                    src="/images/BATCHES/2FooterBatches.png"
                    alt="badges"
                  />
                </a>
              </li>
              <li className="">
                <a href="/">
                  <img
                    src="/images/BATCHES/3FooterBatches.png"
                    alt="badges"
                  />
                </a>
              </li>
              <li className="">
                <a href="/">
                  <img
                    src="/images/BATCHES/4FooterBatches.png"
                    alt="badges"
                    
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p>Copyright © 2017 Nx Edge Solutions.</p>
          <p>Made within ❤️ Chandigarh</p>
          <div className="space-x-0 md:space-x-6 flex-row space-y-4 md:space-y-0">
            <span>Privacy & Policy</span>
            <span>Faq</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
