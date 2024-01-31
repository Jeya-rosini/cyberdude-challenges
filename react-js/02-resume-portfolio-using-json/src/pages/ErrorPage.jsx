import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {data, status, statusText} = useRouteError();
    return (
        <div>
            <div className="bg-[#005f73] max-w-2xl mx-auto rounded font-cabin tracking-wider mt-10 p-10">
            <div className="flex items-center space-x-4 text-white italics">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" className="fill-red-600"><path fill-rule="evenodd" d="M8 14.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m1-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd" /></svg>
                    <span className="text-4xl">{status} {statusText}</span>
            </div>
            <div className="text-white text-lg font-cabin font-bold p-8">
                    <p>{data}</p>
                </div>
                <Link to='/' className="underline underline-offset-4 font-cabin tracking-wider text-lg text-[#FFD369] hover:cursor-pointer hover:text-white">Go Home</Link>
           </div>
        </div>
    );
};

export default ErrorPage