"use client";

import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Marquee */}
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Volume Icon */}
      <div className="absolute bottom-4 right-4 text-white opacity-70 hover:opacity-100 cursor-pointer z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9l-2 2H4v2h3l2 2m6-6v6m0-6a3 3 0 013 3 3 3 0 01-3 3"
          />
        </svg>
      </div>

      {/* Local CSS for marquee */}
      <style jsx>{`
        .marquee {
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Page;