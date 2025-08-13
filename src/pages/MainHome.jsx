import { Outlet } from "react-router";
import { Navbar } from "../components/navBar";

const MainHome = ()=>{


    return(
        <>
        <div id="bodymain">
            <Navbar/>
            {/* <Outlet/> */}
        </div>
        </>
    )
}
export default MainHome;