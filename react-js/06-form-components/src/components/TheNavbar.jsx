import { Link } from "react-router-dom";

const TheNavbar = () => {
    return (
        <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/027/827/386/large_2x/piano-musical-paper-sheets-book-isolated-on-landscape-template-free-photo.jpeg')] bg-no-repeat m-4 p-4 rounded bg-cover flex justify-between items-center space-x-1">
            <div className="flex items-center space-x-3 bg-[#6E7582] p-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14" className="fill-none stroke-[#F39189]"><g  strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="7" x="4.5" y="6.5" rx="1"/><path d="M2 7.5v3m10-3v3m-10-2H1A.5.5 0 0 1 .5 8V7A6.5 6.5 0 0 1 7 .5h0A6.5 6.5 0 0 1 13.5 7v1a.5.5 0 0 1-.5.5h-1M7 9v1"/></g></svg>
                <h2 className="text-4xl font-bold text-[#F39189] font-protest tracking-wider">Music Box</h2>
            </div>
            <div className="bg-[#6E7582] p-1 flex items-center space-x-4">
                    <span>
                      <Link to={'/home'} >Home</Link>
                    </span>
                    <span>
                        <Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"/></svg></Link>
                    </span>
            </div>
        </div>
    )
}

export default TheNavbar