"use client";

import React, { useRef, useState } from "react";

const Page = () => {
  const [confirmed, setConfirmed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play();
      }
    }, 100);
  };

  const Ticker = ({ position }: { position: "top" | "bottom" }) => (
    <div className={`ticker ${position}`}>
      <div className="ticker-track">
        <div className="ticker-content">
          {Array(50)
            .fill("adfasdfafR8MtAkaadfjaldfjasasdfldfjdcnFxYt9pump")
            .map((text, index) => (
              <span key={`${position}-${index}`} className="mr-10">
                {text}
              </span>
            ))}
        </div>
        <div className="ticker-content">
          {Array(50)
            .fill("adfasdfafR8MtAkaadfjaldfjasasdfldfjdcnFxYt9pump")
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
          muted
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
            <img
              src="/nbuyg.PNG"
              className="w-[200px] cursor-pointer hover:brightness-110 transition-transform duration-300 transform hover:scale-110"
            />
            <div className="flex gap-6">
              <img
                src="/x.png"
                className="w-[100px] h-[100px] hover:scale-110 cursor-pointer"
              />
              <img
                src="/attach.png"
                className="w-[100px] h-[100px] hover:scale-110 cursor-pointer"
              />
              <img
                src="/mask.png"
                className="w-[100px] h-[100px] hover:scale-110 cursor-pointer"
              />
            </div>
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
          height: 32px;
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
