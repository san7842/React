import React from "react";
import bgvideo from '../assets/video/bg1.mp4'

const Background = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      {/* 🖤 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🌟 Content On Top */}
      <div className="relative z-10 text-white p-8 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
          Unlimited Movies & Shows
        </h1>
        <div className="w-full mt-2 mb-6">
          <p className="font-bold text-white text-lg text-center">
            This is movies home
          </p>
        </div>
      </div>
    </div>
  );
};

export default Background;
