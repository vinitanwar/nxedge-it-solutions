import Image from 'next/image';

const WorkProcessSection = () => {
    return (
        <>
            <section className="work-main bg-red-400 px-4 md:px-8 lg:px-20 py-4 md:py-8 overflow-hidden">
                <p className="text-center text-lg sm:text-xl md:text-2xl mt-4 md:mt-8 mb-3">Work Process</p>
                <h1 className="text-center text-black text-xl md:text-2xl  lg:text-3xl font-bold mb-4 sm:mb-6">
                    Work Process: Why Partner with SEOC? <br className="hidden lg:block" />
                    Your Path to SEO & Digital Marketing Success
                </h1>
                <div className="work2-section-area" id="work">
                    <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 md:py-8 lg:mt-20">

                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            {/* Left Image Section */}
                            <div className="w-[15rem] md:hidden lg:block  lg:p-4 mb-6 lg:mb-0 md:w-fit lg:w-[25rem] xl:w-[35rem]  ">
                                <div className="work-images">
                                    <Image 
                                        src="/images/work-img1.webp" 
                                        alt="Work Process Image" 
                                        width={600} 
                                        height={400} 
                                        className="w-full  object-cover"
                                    />
                                </div>
                            </div>
                            {/* Right Content Section */}
                            <div className="w-full  flex flex-col items-center  lg:w-1/2 lg:p-4">
                                {/* Strategy Development Section */}
                                <div className="work-content p-3 sm:p-4 md:p-5 bg-blue-400 mb-4 lg:mb-6 pl-3 sm:pl-4 lg:pl-8 rounded-lg">
                                    <h2 className="mb-2 sm:mb-3 font-bold text-md sm:text-lg md:text-xl lg:text-2xl text-white">Strategy Development</h2>
                                    <p className="text-sm sm:text-base text-white">
                                        Based on our findings, we develop customized digital marketing strategies tailored to your business objectives.
                                    </p>
                                </div>
                                
                                {/* Second Content Box */}
                                <div className="work-content p-3 sm:p-4 md:p-5 bg-pink-400 mb-4 lg:mb-6 pl-3 sm:pl-4 lg:pl-8 rounded-lg">
                                    <h2 className="mb-2 sm:mb-3 font-bold text-md sm:text-lg md:text-xl lg:text-2xl text-white">Execution & Implementation</h2>
                                    <p className="text-sm sm:text-base text-white">
                                        Our team puts the strategy into action with precision and efficiency to achieve your business goals.
                                    </p>
                                </div>

                                {/* Third Content Box */}
                                <div className="work-content p-3 sm:p-4 md:p-5 bg-red-300 pl-3 sm:pl-4 lg:pl-8 rounded-lg">
                                    <h2 className="mb-2 sm:mb-3 font-bold text-md sm:text-lg md:text-xl lg:text-2xl text-white">Results & Optimization</h2>
                                    <p className="text-sm sm:text-base text-white">
                                        We continuously monitor and optimize your campaigns to ensure long-term success and sustainable growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkProcessSection;
