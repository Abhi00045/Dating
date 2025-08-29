import React from "react";
import Man from "../Styles/hero-men.png";
import Woman from "../Styles/hero-woman.png";
import gsap from "gsap";
import { useEffect , useRef } from "react";

const HeroSection = () => {

  const manRef  = useRef(null);
  const womanRef = useRef(null);

  useEffect(()=>{

    const tl = gsap.timeline();

    tl.from(manRef.current, {
      x:0,
      duration:1.2 ,
      ease:"power3.out"
        })

     tl.from(womanRef.current, {
      x:0,
      duration:1.2 ,
      ease:"power3.out"
        })    
  },[])

  return (
    <>
      <style>{`
        #section_love {
          /* border: 2px solid black; */
        height: 100vh;
        width: 100%;
        }
        #image {
          width: 800px;
        }
        #image1 {
          width: 800px;
        }
        #image-desc {
        position: absolute;  
          display: flex;
          flex-direction: row;
          gap:10px;
          align-items: end;
        }
      `}</style>

      <div id="section_love">
        <h1 id="hero-text" >
         Your Move,<br />Your Movement</h1>
         
        <div id="image-desc">
          <img id="image" src={Man} alt="man" ref={manRef} />
          <img id="image1" src={Woman} alt="woman" ref={womanRef} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
