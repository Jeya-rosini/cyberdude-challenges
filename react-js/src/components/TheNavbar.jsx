import { Link } from "react-router-dom"
import HomePage from "../pages/HomePage"
import DestinationPage from "../pages/DestinationPage"
import ContactPage from "../pages/ContactPage"

const TheNavbar = () => {
    return <div className="flex justify-between items-center bg-black text-white p-4">
        <div className="flex justify-center items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-white"><path d="M19.3 16.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2l1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07A8 8 0 0 0 15 4.59V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"/></svg>
         <h3 class="text-white text-4xl font-extrabold font-cabin tracking-widest">Wander<span className="text-[#FFD369]">Lust</span></h3>
        </div>  
        <div className="flex justify-center items-center space-x-8 text-lg font-cabin tracking-wider">
           <span><Link to={'/'} className="hover:cursor-pointer hover:text-[#ffd369] hover:underline hover:underline-offset-4">Home</Link></span>
           <span><Link to={'/about'} className="hover:cursor-pointer hover:text-[#ffd369] hover:underline hover:underline-offset-4">About</Link></span>
           <span><Link to={'/destination'} className="hover:cursor-pointer hover:text-[#ffd369] hover:underline hover:underline-offset-4">Destination</Link></span>
           <span><Link to={'/contact'} className="hover:cursor-pointer hover:text-[#ffd369] hover:underline hover:underline-offset-4">Contact</Link></span>
        </div>
    </div>
}

export default TheNavbar