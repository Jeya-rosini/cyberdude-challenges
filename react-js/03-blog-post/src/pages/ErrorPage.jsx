import {Link, useRouteError} from "react-router-dom"

const ErrorPage = () => {

    const {status, statusText} = useRouteError();
    // console.log(status, statusText)

    return (
        <div className="max-w-4xl mx-auto mt-10 text-center p-4 space-y-4 bg-[#590d22] rounded">
            <div>
            <h4 className="text-white font-noto font-bold text-xl p-2">{status} {statusText} !</h4>
            <p className="italic text-white font-noto">Error : Please check your URL</p>
            </div>
            <div>
                <span><Link to={'/'} className="text-white hover:cursor-pointer underline underline-offset-4 hover:text-[#ff4d6d]">Go Back</Link></span>
            </div>
        </div>
    )
}

export default ErrorPage