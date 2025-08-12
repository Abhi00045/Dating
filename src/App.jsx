import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import arrow from './Styles/arrorw.png'
import "./index.css"

export default function App() {
  const mainRef = useRef(null);
  const cursor = useRef(null);

  useGSAP(() => {
    const mainElement = mainRef.current;
    const cursorElement = cursor.current;
     //this is mandotory for current changes
    const handleMouseMove = (dets) => {
      // const xGet = dets.x
      // const yGet = dets.y
      // console.log(xGet);
      
      gsap.to(cursorElement,{
        x: dets.x,
        y: dets.y,
        duration:3,
        ease:'power3.out'   
      })
    };
    mainElement.addEventListener("mousemove", handleMouseMove); //similar to js 
  }, []);

  return (
    <div
      ref={mainRef}
      id="mainRef"
      className="h-screen w-screen" //this is porbably main totally works with useRef
    >
        <img src={arrow} ref={cursor} className="w-13 fixed" alt="" />
        {/* <div ref={cursor} className="w-10 h-10 fixed bg-black rounded-xl"></div> */}
    </div>
    
  );
}
