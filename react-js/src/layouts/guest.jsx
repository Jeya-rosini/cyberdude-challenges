import TheNavbar from "../components/TheNavbar";
import TheFooter from "../components/TheFooter"
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <>
    
                <TheNavbar/>
    
            <Outlet />
            <div>
            <TheFooter />
            </div>
        </>
    
    );
}

export default GuestLayout