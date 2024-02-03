import { Link } from "react-router-dom";

const TheNavbar = () => {
    return (
        <div className="flex items-center justify-between m-2 p-4 bg-[#590d22] rounded">
            <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#ffffff" d="M4 24h10v2H4zm0-6h10v2H4zm22-4H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M6 6v6h20V6zm20 22h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6v-6z"/></svg>
                <h2 className="text-3xl text-white font-extrabold font-noto">Fake Blog</h2>
            </div>
            <div className="space-x-4 text-white font-noto text-xl font-medium">
                <span><Link to={ '/'} className="hover:cursor-pointer hover:text-[#ff758f]">Home</Link></span>
                <span><Link to="#" className="text-white font-noto hover:text-[#ff758f]">About</Link></span>
                <span><Link to="https://github.com/Jeya-rosini/cyberdude-challenges" target="blank" className="rounded p-2 bg-[#fff0f3] text-black hover:bg-[#ff758f]">GitHub</Link></span>
            </div>
        </div>
    )
}

export default TheNavbar