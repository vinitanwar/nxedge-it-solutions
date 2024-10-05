import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <>
      <section className='about-main  overflow-hidden '>
    
        <div className="flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-20 py-4 md:py-8  relative overflow-hidden">
          {/* Left Image Section */}
          <div className="w-full h-fit lg:w-1/3 lg:mb-0 relative">
            <div className="relative   flex md:block justify-center group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/about-img1.webp"
                alt="About Image 1"
                width={300}  // Reduced for phone screens
                height={220}  // Reduced for phone screens
                className="object-cover w-[80%]  md:w-full"
              />
              <Image
                src="/images/star1.webp"
                alt="Star Element"
                width={60}  // Reduced for phone screens
                height={60}  // Reduced for phone screens
                className="absolute hidden  md:block bottom-0 left-0 rotate-cstm"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-5/12 px-2 mt-5 md:mt-0 md:px-4 lg:px-8 text-center lg:text-left">
            <div className="relative">
              <div className="absolute -top-10 -left-10 transform rotate-12 opacity-50 mb-5 hidden md:block">
                <Link href="/about">
                  <div className="relative rotate-cstm hidden lg:block">
                    <Image
                      src="/images/elements4.webp"
                      alt="Element 4"
                      width={90}  // Reduced for phone screens
                      height={90}  // Reduced for phone screens
                      className="transform transition-transform duration-300 hover:rotate-45"
                    />
                    <Image
                      src="/images/arrow.svg"
                      alt="Arrow"
                      width={30}  // Reduced for phone screens
                      height={15}  // Reduced for phone screens
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </Link>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] xl:leading-[54px] font-bold mb-4 lg:mb-5 text-black">
                Comprehensive SEO & Digital Marketing Solutions
              </h2>
              <p className="text-sm md:text-md text-black mb-4 lg:mb-6">
                Welcome to SEOC, your trusted partner for comprehensive SEO and digital marketing solutions. Leverage our expertise and innovative strategies to navigate the digital landscape with confidence.
              </p>
              <Link href="/about">
                <p className="bg-blue-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                  <span className="ml-2">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </p>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full hidden md:block lg:w-1/4 lg:mt-0 relative">
            <div className="relative flex justify-center lg:block group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/about-img2.webp"
                alt="About Image 2"
                width={250}  // Reduced for phone screens
                height={220}  // Reduced for phone screens
                className="object-cover w-[80%] md:w-full mt-10 md:mt-10 lg:mt-40"
              />
              <Image
                src="/images/elements5.webp"
                alt="Element 5"
                width={100}  // Reduced for phone screens
                height={100}  // Reduced for phone screens
                className="absolute  hidden md:block top-0 right-0 rotate-cstmm opacity-60"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
