import { useState } from "react"

const AlertSuccess = () => {
    const [close, setClose] = useState(false);

    const closeAlert = () => {
setClose(!close)
    }

    return (
        <div className={'flex justify-between items-center space-x-2 bg-green-400 bg-opacity-75 text-white m-5 p-3 rounded' + (close ? 'block' : 'hidden')} onClick={closeAlert}>
            <div className="flex items-center space-x-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><defs><mask id="ipSSuccess0"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path fill="#fff" stroke="#fff" d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z"/><path stroke="#000" d="m17 24l5 5l10-10"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSuccess0)"/></svg>
<p className="text-lg font-semibold">Great Job! You done a big step my choosing us😃</p>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="hover:cursor-pointer hover:fill-red-600 fill-white"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
            </div>
        </div>
    )
}

export default AlertSuccess