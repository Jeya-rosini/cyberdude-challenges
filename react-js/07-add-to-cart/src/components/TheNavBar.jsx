import { Link } from 'react-router-dom';

const TheNav = () => {
    return ( 
        <div className="p-8 bg-[#450920] font-raleway flex justify-between items-center space-x-3">
            <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512" className='fill-[#ffffff]'><path d="M416 0c-16 0-128 32-128 176v112c0 35.3 28.7 64 64 64h32v128c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32M64 16C64 7.8 57.9 1 49.7.1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16v134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0S96.8 6.3 96.1 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152h-.6l.3-.7z"/></svg>
                <h3 className="text-white font-extrabold text-5xl tracking-wide">Trendyhub</h3>
            </div>
            <div className="flex items-center space-x-8 text-white font-semibold tracking-wide text-lg">
                <span><Link to={'/'} className="hover:text-[#FFA5AB] hover:underline-offset-8 hover:underline">Home</Link></span>
                <span><Link to={'/cart'} className="hover:text-[#FFA5AB] hover:underline-offset-8 hover:underline">Cart</Link></span>
                <span><Link to="https://github.com/Jeya-rosini/cyberdude-challenges/tree/main/react-js/07-add-to-cart" target='blank' className="hover:text-[#FFA5AB] hover:underline-offset-8 hover:underline">GitHub</Link></span>
                <span><Link to="https://www.linkedin.com/in/jeya-rosini-a4255421a/" target='blank' className="hover:text-[#FFA5AB] hover:underline-offset-8 hover:underline">LinkedIn</Link></span>      
            </div>
        </div>
    )
}

export default TheNav