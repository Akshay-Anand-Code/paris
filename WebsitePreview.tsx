import React from "react";

const WebsitePreview: React.FC = () => {
  return (
    <div className="relative overflow-auto bg-gradient-to-b from-black to-gray-900 text-white min-h-screen font-ntf font-bahnschrift">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/section-mid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 backdrop-blur-sm backdrop-brightness-[0.5] min-h-screen">
        <nav className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-6">
            <img src="https://wegic.ai/logo.svg" alt="Wegic" className="h-6" />
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">User Cases</a>
            <div className="relative">
              <a href="#" className="hover:underline font-bold">Wegic Ultra</a>
              <span className="absolute -top-2 -right-4 bg-green-500 text-black text-xs px-1 rounded">NEW</span>
            </div>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Pricing</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">🌐 English ▾</div>
            <a href="/login" className="text-sm hover:underline">Log in</a>
            <a href="/signup">
              <button className="bg-white text-black font-semibold px-4 py-2 rounded-md">
                Build Your Site
              </button>
            </a>
          </div>
        </nav>

        <section className="text-center mt-20 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Magic Your Site<br />Chat by Chat
          </h1>

          <div className="mt-10 max-w-2xl mx-auto">
            <div className="bg-gray-800 border border-gray-600 rounded-md p-4 text-sm flex items-center justify-center">
              👋 Hey! We're Wegic. Chat with us, share your website vision, and we'll build it in 1 minute.
            </div>

            <div className="bg-white text-black mt-4 rounded-md p-4">
              <textarea
                className="w-full outline-none resize-none text-sm"
                rows={2}
                placeholder="A design website focused on creative transformation, providing professional design solutions for businesses and individuals."
              ></textarea>

              <div className="flex space-x-2 mt-4">
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
                  Build Via Chat
                </button>
                <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm">
                  Build Via Link
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-8 gap-4 text-sm">
            {[
              "🎓 Online education platform",
              "🛒 E-commerce product page",
              "🎮 Game community",
              "🖼️ Product display page",
              "🎨 Design studio"
            ].map((useCase, index) => (
              <span
                key={index}
                className="bg-black border border-gray-700 px-4 py-1 rounded-full"
              >
                {useCase}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebsitePreview;
