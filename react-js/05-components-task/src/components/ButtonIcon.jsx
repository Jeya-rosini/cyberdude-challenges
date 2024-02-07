import { Link } from "react-router-dom"

const ButtonIcon = () => {
    return (
        <div>
            <button >
                <Link to="#" className="bg-[#0B60B0] text-white flex items-center space-x-2 justify-center p-2 rounded hover:cursor-pointer hover:bg-[#40A2D8] hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q3.175 0 5.663 1.75t3.612 4.525q.175.425.013.85T20.7 9.7q-.4.125-.762-.075t-.513-.6q-.6-1.5-1.725-2.65T15 4.6V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h1q.425 0 .713.288T10 13v2H9l-4.8-4.8q-.075.45-.137.9T4 12q0 3.05 2.013 5.325t5.062 2.625q.4.05.663.338T12 21q0 .425-.288.713t-.687.237Q7.2 21.575 4.6 18.75T2 12m18.4 8.8l-2.5-2.5q-.525.3-1.125.5T15.5 19q-1.875 0-3.187-1.312T11 14.5q0-1.875 1.313-3.187T15.5 10q1.875 0 3.188 1.313T20 14.5q0 .675-.2 1.275t-.5 1.125l2.5 2.5q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275M15.5 17q1.05 0 1.775-.725T18 14.5q0-1.05-.725-1.775T15.5 12q-1.05 0-1.775.725T13 14.5q0 1.05.725 1.775T15.5 17" /></svg>
            <h3 className="font-bold text-xl">Explore</h3>
</Link>
        </button>
      </div>
    )
}

export default ButtonIcon