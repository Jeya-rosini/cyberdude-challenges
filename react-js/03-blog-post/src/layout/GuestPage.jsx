import { Outlet } from "react-router-dom";
import TheNavbar from "../component/TheNavbar";


const GuestPage = () => {
    return (
        <>
            <TheNavbar />
            <Outlet/>
        </>
    )
}

export default GuestPage