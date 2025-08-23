// import { CiMenuBurger } from "react-icons/ci";
// import '../index.css'
// import "@fontsource/barriecito"; 
// import '@fontsource/abril-fatface';
// import { IoMdClose } from "react-icons/io";// defaults to weight 400
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";


// export const Navbar = ()=>{
//         const fullmenu = useRef(null);
//     const h1tag = useRef(null)
//     const menuclick = useRef(null)
//     const closeBut = useRef(null)


//     useGSAP(()=>{

//         const menuclicks = menuclick.current;
//         const closeButton = closeBut.current;

//         const tl = gsap.timeline();
//         tl.to("#fullmenu",{
//             right:0,
//             duration:0.5,
//         })
//         tl.from('#fullmenu h1',{
//             x:150,
//             duration:0.5,
//             stagger:0.2,
//             opacity:0
//         })
//         tl.from("#close",{
//             opacity:0,
//         })

//         tl.pause();
//         menuclicks.addEventListener("click" ,()=>{
//             tl.play();
//         })
//         closeButton.addEventListener("click" ,()=>{
//             tl.reverse();
//         })
//     },[])

//     return<>
//     <div id="navBar">
//                 <CiMenuBurger id="menu" ref={menuclick} size={36}
//                  />
//             </div>
//             <div id="fullmenu" ref={fullmenu} > 
//                   <h1 ref={h1tag}>Events</h1>
//                   <h1  ref={h1tag}>Gallery</h1>
//                   <h1  ref={h1tag}>Founders</h1>
//                   <h1  ref={h1tag}>Blog</h1>  

//                   <IoMdClose id="close" ref={closeBut} size={39} />
//             </div>
//     </>
// }