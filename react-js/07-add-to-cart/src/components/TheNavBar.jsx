import { Link } from 'react-router-dom';

const TheNav = () => {
    return ( 
        <div className="p-8 bg-[#450920] font-raleway flex justify-between items-center space-x-3">
            <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" className="stroke-white animate-bounce"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M9 9L18 4H30L39 9L43 25L35 29V44H13V29L5 25L9 9Z"/><path d="M18 4L24 14.5"/><path d="M30 4L24 14.5L13 29"/></g></svg>
                <h3 className="text-white font-extrabold text-5xl tracking-wide">Trendyhub</h3>
            </div>
            <div className="flex items-center space-x-8 text-white font-semibold tracking-wide text-lg">
                <span><Link to={'/'} className="hover:text-[#FFA5AB] hover:underline-offset-8 hover:underline">Home</Link></span>
                <span><Link to={'/cart'} className="hover:text-[#FFA5AB] hover:underline-offset-8 hover:underline">Cart</Link></span>
                <span><Link to="https://github.com/Jeya-rosini/cyberdude-challenges" target='blank' className="hover:text-[#FFA5AB] hover:underline-offset-8 hover:underline">GitHub</Link></span>
                <span><Link to="https://www.linkedin.com/in/jeya-rosini-a4255421a/" target='blank' className="hover:text-[#FFA5AB] hover:underline-offset-8 hover:underline">LinkedIn</Link></span>      
            </div>
        </div>
    )
}

export default TheNav