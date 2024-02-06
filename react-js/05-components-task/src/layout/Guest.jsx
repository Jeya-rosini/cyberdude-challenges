import TheNavbar from "../components/TheNavbar";
import { Outlet } from "react-router-dom";

const Guest = () => {
    return ( 
        <>
            <TheNavbar />
            <Outlet/>
        </>
    )
}

export default Guest