import Image from 'next/image';

export default function ContactBanner() {
  return (
    <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-gray-900">
      <div className="absolute inset-0">
        <Image 
          src="/images/About/contactbaner.webp" 
          alt="About Us Banner"
          fill
          quality={100}
          className="object-cover opacity-70"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center w-full h-full text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">Learn more about our mission and values.</p>
        <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg max-w-2xl">
          Whether you have a question, need assistance, or want to partner with us, we are here to help. 
          Get in touch with our team and let’s start a conversation about how we can help grow your business.
        </p>
        {/* <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm sm:text-base md:text-lg font-semibold">
          Get In Touch
        </button> */}
      </div>
    </section>
  );
}
