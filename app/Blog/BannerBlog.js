import Image from 'next/image';

export default function BlogBanner() {
  return (
    <section className="relative w-full h-[300px] bg-gray-900">
      <div className="absolute inset-0">
        <Image 
          src="/images/About/blogbanner.webp" 
          alt="About Us Banner"
          fill 
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>
      <div className="relative flex items-center justify-center w-full h-full pl-5">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Blog</h1>
          <p className="mt-4 text-xl">Learn more about our mission and values.</p>
        </div>
      </div>
    </section>
  );
}
