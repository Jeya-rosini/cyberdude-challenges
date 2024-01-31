import React from "react";
import TheNavbar from "../components/TheNavBar";
import TheSidebar from "../components/TheSideBar";
import {Outlet} from "react-router-dom"

const Guest = () => {
    return (
        <>
            <TheNavbar />
            <TheSidebar/>
            <Outlet />
            
        </>
    )
}

export default Guest