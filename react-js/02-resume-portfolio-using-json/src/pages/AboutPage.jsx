import TheSidebar from "../components/TheSideBar";
import resume from "../data/resume.json"

const AboutPage = () => {
    return <div>
        <div className="w-6xl flex justify-center space-x-4">
        <TheSidebar/>
            <div>
                <div>
                <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="fill-[#ee9b00]"><defs><mask id="ipSInfo0"><g fill="none"><path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"/><path fill="#000" fill-rule="evenodd" d="M24 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.5 34V20h-2M21 34h7"/></g></mask></defs><path d="M0 0h48v48H0z" mask="url(#ipSInfo0)"/></svg>
                <h4 className="font-bold text-xl text-[#ee9b00] underline underline-offset-4">About</h4>
            </div>
                <p className="text-white p-4 text-lg font-semibold">{ resume[0].About}</p>
                </div>
                <div>
                    <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><path fill="#ee9b00" d="m11 16.5l-1 3.1h2z" class="clr-i-solid clr-i-solid-path-1"/><path fill="#ee9b00" d="M30.3 3h-16v5h4v2h-13c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h1v5.1l6.3-5.1h6.7v-7h11c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3M13.1 22.9l-.5-1.6H9.5l-.6 1.6H6.5L9.8 14h2.4l3.3 8.9zM28.3 15v2c-1.3 0-2.7-.4-3.9-1c-1.2.6-2.6.9-4 1l-.1-2c.7 0 1.4-.1 2.1-.3c-.9-.9-1.5-2-1.8-3.2h2.1c.3.9.9 1.6 1.6 2.2c1.1-.9 1.8-2.2 1.9-3.7h-6V8h3V6h2v2h3.3l.1 1c.1 2.1-.7 4.2-2.2 5.7c.7.2 1.3.3 1.9.3" class="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    <h4 className="font-bold text-xl text-[#ee9b00] underline underline-offset-4">Languages</h4>
                    </div>
                    <div>
                        <ul className="p-2 text-white font-bold tex-lg">
                            <li>{ resume[0].Language.English}</li>
                            <li>{ resume[0].Language.Hindi}</li>
                            <li>{ resume[0].Language.Tamil}</li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
}

export default AboutPage