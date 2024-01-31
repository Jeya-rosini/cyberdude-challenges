import { Link } from "react-router-dom"
import AboutPage from "../pages/AboutPage";
import EducationPage from "../pages/EducationPage";
import ContactPage from "../pages/ContactPage";
import SkillsPage from "../pages/SkillsPage";
import ExperiencePage from "../pages/ExperiencePage";
import TheButton from "./TheButton";

const TheSidebar = () => {
    return <div>
   <div className="max-h-screen w-64 px-3 py-4 my-4 bg-[#e9d8a6] rounded">
      <ul className="space-y-2 font-medium">
         <li>
            <Link to="/"className="flex items-center p-2 rounded-lg hover:cursor-pointer hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="fill-[#9b2226]"><defs><mask id="ipSInfo0"><g fill="none"><path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"/><path fill="#000" fill-rule="evenodd" d="M24 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.5 34V20h-2M21 34h7"/></g></mask></defs><path d="M0 0h48v48H0z" mask="url(#ipSInfo0)"/></svg>
               <span className="flex-1 ms-3 whitespace-nowrap text-lg text-black">About</span>
            </Link>
         </li>
         <li>
            <Link to="/education" className="flex items-center p-2 rounded-lg hover:cursor-pointer hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#9b2226" d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778z"/><path fill="#9b2226" d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z"/></svg>
               <span className="flex-1 ms-3 whitespace-nowrap text-lg text-black">Education</span>
            </Link>
         </li>
         <li>
            <Link to="/skills" className="flex items-center p-2 rounded-lg hover:cursor-pointer hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="fill-[#9b2226]"><path d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8c0 20.4 7.1 38.4 17.5 50.9L99.7 157L84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5c-8.5 11.5-14.9 27.5-19.4 45.8c-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7c-4-18.5-10.2-34.4-18.7-45.9c-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1c0-39.2-24.8-68.8-52.4-68.8c-2.9 0-4.7-.1-5.2-.1M440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31s31-13.77 31-31s-13.8-31-31-31M311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9c0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9c0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9c0-3.07.3-6.08.8-9zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31m0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31"/></svg>
               <span className="flex-1 ms-3 whitespace-nowrap text-lg text-black">Skills</span>
            </Link>
         </li>
         <li>
            <Link to="/experience" className="flex items-center p-2 rounded-lg hover:cursor-pointer hover:bg-slate-100">
               <svg className="flex-shrink-0 w-5 h-5 fill-[#9b2226]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap text-lg text-black">Experience</span>
            </Link>
         </li>
         <li>
            <Link to="/contact" className="flex items-center p-2 rounded-lg hover:cursor-pointer hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-[#9b2226]"><path d="M20 0H4v2h16zM4 24h16v-2H4zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9S10.76 6.75 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5z"/></svg>
               <span className="flex-1 ms-3 whitespace-nowrap text-lg text-black">Contact</span>
            </Link>
         </li>
            </ul>
            <TheButton/>
   </div>

    </div>
}

export default TheSidebar