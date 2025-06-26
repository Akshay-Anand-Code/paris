"use client";

import React, { useRef, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import SocialIcons from "@/components/ui/SocialIcons";

const Page = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setMuted(false);
        videoRef.current.play();
      }
    }, 100);
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const Ticker = ({ position }: { position: "top" | "bottom" }) => (
    <div className={`ticker ${position}`}>
      <div className="ticker-track">
        <div className="ticker-content">
          {Array(50)
            .fill("contract")
            .map((text, index) => (
              <span key={`${position}-${index}`} className="mr-10">
                {text}
              </span>
            ))}
        </div>
        <div className="ticker-content">
          {Array(50)
            .fill("address")
            .map((text, index) => (
              <span key={`${position}-dup-${index}`} className="mr-10">
                {text}
              </span>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">

      {confirmed && (
        <>
          <Ticker position="top" />
          <Ticker position="bottom" />
          <button
            onClick={handleToggleMute}
            className="absolute top-20 right-4 z-50 bg-black bg-opacity-60 text-white p-2 rounded-full shadow hover:bg-opacity-80 transition"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <FiVolumeX className="w-7 h-7" />
            ) : (
              <FiVolume2 className="w-7 h-7" />
            )}
          </button>
        </>
      )}

      {!confirmed ? (
        <div className="absolute inset-0">
          <img
            src="/fatNiga1.PNG"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm"></div>
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/Final.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center space-y-7">
        {!confirmed ? (
          <>
            <img src="/Ntitle.png" className="w-2/3" />
            <img
              src="/nbuys.PNG"
              onClick={handleConfirm}
              className="w-[200px] cursor-pointer hover:brightness-110 transition-transform duration-300 transform hover:scale-110"
            />
          </>
        ) : (
          <>
            <img src="/title.png" className="w-1/2" />
            <SocialIcons />
          </>
        )}
      </div>

      <style jsx global>{`
        .ticker {
          position: absolute;
          width: 100%;
          overflow: hidden;
          background: black;
          color: #00ff99;
          font-family: monospace;
          font-size: 20px;
          border-top: 1px solid #222;
          border-bottom: 1px solid #222;
          z-index: 50;
          height: 65px;
          display: flex;
          align-items: center;
        }

        .ticker.top {
          top: 0;
        }

        .ticker.bottom {
          bottom: 0;
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 350s linear infinite;
        }

        .ticker-content {
          display: flex;
        }

        .ticker-content span {
          margin-right: 50px;
        }

        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
