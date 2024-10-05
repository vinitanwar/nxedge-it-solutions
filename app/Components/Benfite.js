import React from 'react';
import Link from 'next/link';

const Benfite = () => {
    const projects = [
        {
            category: 'Expert website design and development services to create visually stunning, user-friendly websites that drive business growth.',
            title: 'Website Design & Development',
            imgSrc: "/images/services/websitedesgin.webp"
        },
        {
            category: 'Enhance your online presence with our expert SEO services, driving targeted traffic and boosting your search rankings.',
            title: 'SEO',
            imgSrc: "/images/services/seo.webp"
        },
        {
            category: 'Boost your online visibility and drive targeted traffic with our expert PPC advertising services, tailored for results.',
            title: 'PPC Advertising',
            imgSrc: "/images/services/ppc.webp"
        },
        {
            category: 'Boost your brand\'s online presence with targeted social media marketing strategies that engage and convert your audience effectively.',
            title: 'Social Media Marketing',
            imgSrc: "/images/services/media.webp"
        },
        {
            category: 'Boost your brand visibility and engagement through strategic content marketing tailored to captivate and convert your audience.',
            title: 'Content Marketing',
            imgSrc: "/images/services/content.webp"
        },
        {
            category: 'Boost your business with targeted email campaigns that engage, convert, and drive customer loyalty effortlessly.',
            title: 'Email Marketing',
            imgSrc: "/images/services/email.webp"
        },
    ];

    return (
        <section className="px-3 md:p-12 lg:p-0 lg:px-8 xl:p-24 bg-gray-50 overflow-hidden">
            <div className=" mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-xl md-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        Benefits of SEO & Digital Marketing
                    </h2>
                    <p className="text-gray-700 max-w-xl mx-auto text-sm md:text-base">
                        By investing in strategic SEO and digital marketing initiatives, businesses can unlock a myriad of benefits.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`relative group transform transition duration-500 hover:scale-105`}
                            style={{ animationDelay: `${index * 300}ms`, animationName: 'fadeInUp' }}
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <img src={project.imgSrc} alt={project.title} className="w-full h-48 md:h-64 object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h4 className="text-white text-lg md:text-xl font-semibold mb-2">
                                        {project.title}
                                    </h4>
                                    <span className="text-white text-center text-sm md:text-base">{project.category}</span>
                                    <Link href="/service" className="mt-4 text-white font-semibold underline text-sm md:text-base">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benfite;
