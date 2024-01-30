import { Link } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import DestinationPage from "../pages/DestinationPage"
import ContactPage from "../pages/ContactPage"

const footer = () => {
    return <div className="bg-black text-white p-4 mt-10">
 <div className="flex justify-between items-center space-x-6">
            <div className="flex flex-col space-y-6 items-center">
            <div class="flex justify-between items-center space-x-1"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-white"><path d="M19.3 16.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2l1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07A8 8 0 0 0 15 4.59V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"/></svg>
         <h3 class="text-white font-bold text-2xl font-cabin tracking-widest">Wander<span className="text-[#FFD369]">Lust</span></h3>
                </div>
                <div className="flex justify-center items-center space-x-2">
               <Link to="#" target="blank"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" className="fill-white hover:fill-[#ffd369] hover:cursor-pointer"><path d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67M15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89m-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59m3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z"/></svg></Link>
                <Link to="https://github.com/Jeya-rosini" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-white hover:fill-[#ffd369] hover:cursor-pointer"><path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1c-.1-.6-.5-1.2-1-1.5c-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1a2.2 2.2 0 0 0 1.3 1a2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4c-2.2-.3-4.6-1.2-4.6-5c0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0c2-1.3 2.8-1 2.8-1c.3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4a10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2" clip-rule="evenodd"/></svg></Link>
                <Link to="https://www.linkedin.com/in/jeya-rosini-a4255421a/" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20" className="fill-white hover:fill-[#ffd369] hover:cursor-pointer"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"/></svg></Link>
                </div>
          </div>
            <div class="grid grid-cols-2 gap-y-12 gap-x-4 text-md font-cabin tracking-wider p-4 m-4">
                <div className="list-none">
                    <li><span><Link to={'/'} className="hover:text-[#ffd369] hover:cursor-pointer">Home</Link></span></li>
                    <li> <span><Link to={'/about'} className="hover:text-[#ffd369] hover:cursor-pointer">About</Link></span></li>
                    <li> <span><Link to={'/destination'} className="hover:text-[#ffd369] hover:cursor-pointer">Destination</Link></span></li>
                    <li> <span><Link to={'/contact'} className="hover:text-[#ffd369] hover:cursor-pointer">Contact</Link></span></li>
                </div>
                <div className="list-none">
                    <li><Link to="/" className="hover:text-[#ffd369] hover:cursor-pointer">Privacy Policy</Link></li>
                    <li><Link to='/' className="hover:text-[#ffd369] hover:cursor-pointer">Terms and Conditions</Link></li>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center mt-10 p-2 font-cabin font-bold tracking-wider">
            <span className="flex items-center gap-x-1">copyright<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10" /><path d="M14.83 14.83a4 4 0 1 1 0-5.66" /></g></svg></span>
            <p>, 2024<Link to="https://github.com/Jeya-rosini" target="blank"><span className="italic text-[#FFD369] hover:underline-offset-2 hover:cursor-pointer hover:underline"> Jeya Rosini .H</span></Link> , All rights reserved</p>
        </div>
    </div>
}

export default footer