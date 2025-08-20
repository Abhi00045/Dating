import { Outlet } from "react-router";
import { Navbar } from "../components/navBar";
import DatingShowHero from "../components/hero";

const MainHome = ()=>{


    return(
        <>
        <div id="bodymain">
            <Navbar/>
            <DatingShowHero/>
            {/* <Outlet/> */}
        </div>
        </>
    )
}
export default MainHome;