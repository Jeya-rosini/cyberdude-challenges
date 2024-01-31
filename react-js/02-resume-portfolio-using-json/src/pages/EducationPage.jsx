import resume from "../data/resume.json"
import TheSidebar from "../components/TheSideBar";

const EducationPage = () => {
    return <div>
        <div className="w-6xl flex space-x-4">
            <TheSidebar />
            <div>
                <div className="flex items-center text-xl text-[#ee9b00] font-bold space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#ee9b00" d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778z" /><path fill="#ee9b00" d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z" /></svg>
                    <h4 className="underline underline-offset-4">Education</h4>
                </div>
                <div className="m-2 p-2">
                    <ul>
                        <li className="flex items-center space-x-2 pb-2">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M23 6.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm-.5 6a6.52 6.52 0 0 0 1.5-.174v4.924a.75.75 0 0 1-.15.45l-.001.001l-.001.002l-.003.004l-.009.01l-.015.02l-.01.013l-.086.101a5.328 5.328 0 0 1-.317.33c-.277.267-.69.614-1.25.958C16.037 20.329 14.339 21 12 21c-2.339 0-4.036-.67-5.159-1.361a7.427 7.427 0 0 1-1.25-.957a5.317 5.317 0 0 1-.316-.33a2.682 2.682 0 0 1-.124-.15L5.15 18.2a.75.75 0 0 1-.15-.45v-5.557l-2-1.307v5.364a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .358-.64l8.05-5.16a3.872 3.872 0 0 1 2.059-.613a6.468 6.468 0 0 0-.717 1.621a2.373 2.373 0 0 0-.532.254L3.63 9.506l7.071 4.62c.79.515 1.809.515 2.598 0l2.202-1.44c.63.204 1.301.314 1.999.314m-3.38 2.381a3.875 3.875 0 0 1-4.24 0L6.5 13.173v4.296a5.934 5.934 0 0 0 1.127.893C8.536 18.92 9.964 19.5 12 19.5s3.464-.58 4.373-1.139a5.935 5.935 0 0 0 1.127-.892v-4.296z"/></svg>
                            </div>
                            <div>
                                <p className="font-semibold text-white">{resume[0].EducationUg.Degree} - passed out at<span className="text-[#ee9b00]"> {resume[0].EducationUg.Year}</span></p>
                            </div>
                        </li>
                        <li className="flex items-center space-x-2 pb-2">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M23 6.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm-.5 6a6.52 6.52 0 0 0 1.5-.174v4.924a.75.75 0 0 1-.15.45l-.001.001l-.001.002l-.003.004l-.009.01l-.015.02l-.01.013l-.086.101a5.328 5.328 0 0 1-.317.33c-.277.267-.69.614-1.25.958C16.037 20.329 14.339 21 12 21c-2.339 0-4.036-.67-5.159-1.361a7.427 7.427 0 0 1-1.25-.957a5.317 5.317 0 0 1-.316-.33a2.682 2.682 0 0 1-.124-.15L5.15 18.2a.75.75 0 0 1-.15-.45v-5.557l-2-1.307v5.364a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .358-.64l8.05-5.16a3.872 3.872 0 0 1 2.059-.613a6.468 6.468 0 0 0-.717 1.621a2.373 2.373 0 0 0-.532.254L3.63 9.506l7.071 4.62c.79.515 1.809.515 2.598 0l2.202-1.44c.63.204 1.301.314 1.999.314m-3.38 2.381a3.875 3.875 0 0 1-4.24 0L6.5 13.173v4.296a5.934 5.934 0 0 0 1.127.893C8.536 18.92 9.964 19.5 12 19.5s3.464-.58 4.373-1.139a5.935 5.935 0 0 0 1.127-.892v-4.296z"/></svg>
                            </div>
                            <div>
                                <p className="font-semibold text-white">{resume[0].EducationPg.PgDegree} - passed out at<span className="text-[#ee9b00]"> {resume[0].EducationPg.PgYear}</span></p>
                            </div>
                        </li>
</ul>
                </div>
            </div>
</div>
    </div>
}

export default EducationPage