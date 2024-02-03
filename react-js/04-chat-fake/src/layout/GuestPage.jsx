import { Outlet } from "react-router-dom";
import TheNav from "../component/TheNavbar";

const Guest = () => {
    return (
        <>
            <TheNav />
            <Outlet/>
        
        </>
    )
}

export default Guest