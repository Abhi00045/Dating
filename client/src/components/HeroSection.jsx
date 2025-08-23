import React from "react";
import Man from "../Styles/hero-men.png";
import Woman from "../Styles/hero-woman.png";

// Import Google Font in index.html:
// <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex ">
      
      {/* Left Man */}
      <img
      id="Image-man"
        src={Man}
        alt="Blindfolded Man"
        className="absolute bottom-0 max-h-[600px] object-contain"
      />



      {/* Center Content */}
      <div className="text-center">
        <h1
          className="text-5xl lg:text-6xl font-extrabold text-black leading-tight"
          style={{ fontFamily: "'Fredoka One', cursive" }}
        >
          Your Move,<br />Your Moment
        </h1>

      </div>

{/* Right Woman */}
      <img
      id="Image-woman"
        src={Woman}
        alt="Blindfolded Woman"
        className="absolute  bottom-0 max-h-[600px] "
      />
    </section>
  );
};

export default HeroSection;
