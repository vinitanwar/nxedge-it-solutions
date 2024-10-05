import Image from 'next/image';

export default function Blogdetails() {
  return (
    <div className="container mx-auto mt-10 p-4 flex flex-col lg:flex-row gap-12 lg:px-28">
      {/* Left Side: Image, Heading, Content */}
      <div className="lg:w-2/3 space-y-6">
        <Image
          src="/images/services/img4.webp"
          alt="Blog Image"
          width={800}
          height={350}
          className="w-full h-[350px] object-cover rounded-xl shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Your Blog Heading
        </h1>
        <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <p>
            This is the main content of your blog. You can write multiple paragraphs here. Start by sharing an intriguing introduction that captivates the reader's attention. Explain the context or background of the topic you're discussing, and set the tone for the rest of the article.
          </p>
          <p>
            Dive deeper into the core subject matter, providing valuable insights, research, or anecdotes that enhance the reader's understanding. Make sure to keep the content engaging, and avoid jargon that might confuse the audience. Remember, the goal is to inform and entertain.
          </p>
          <p>
            Conclude with a strong closing paragraph that summarizes the key points discussed in the article. Encourage readers to take action, whether it's to explore more on the topic, share the article, or engage with your services. A compelling call to action can be highly effective here.
          </p>
        </div>
      </div>

      {/* Right Side: Sticky Contact Form */}
      <div className="lg:w-1/3 h-[100%] lg:sticky top-24 p-8 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}
