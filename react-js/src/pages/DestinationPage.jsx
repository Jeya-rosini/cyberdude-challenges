import { Link } from "react-router-dom";


const DestinationPage = () => {
    return <div className="m-10">
        <h4 className="text-3xl font-bold font-cabin text-center p-4 m-2 tracking-wider bg-[url('../src/assets/image/destination.png')] bg-contain bg-no-repeat">Your Destination is here</h4>
            <div className="grid grid-rows-4">
            <div className="flex justify-normal items-center space-x-4 p-2 rounded w-full hover:bg-slate-100">
            <img src="../src/assets/image/manali.jpg" alt="manali" className="rounded w-32 h-32"></img>
                <div className="space-y-2">
                <h4 className="text-2xl font-bold font-cabin tracking-wider">Manali</h4>
                    <p className="italic font-cabin tracking-wider">
                    Where mountains speaks and the river sings
                </p>
                <button className="bg-[#393E46] p-2 rounded hover:bg-[#ffd369] hover:text-black text-white font-bold font-cabin tracking-wider">Navigate</button>
                   </div>
            </div>
            <div className="flex justify-normal items-center space-x-4 p-2 rounded w-full hover:bg-slate-100">
            <img src="../src/assets/image/chirrapunji.jpg" alt="manali" className="rounded w-32 h-32"></img>
                <div className="space-y-2">
                <h4 className="text-2xl font-bold font-cabin tracking-wider">Chirrapunji</h4>
                    <p className="italic font-cabin tracking-wider">
                    The rainest place all over the world
                </p>
                <button className="bg-[#393E46] p-2 rounded hover:bg-[#ffd369] hover:text-black text-white font-bold font-cabin tracking-wider">Navigate</button>
                   </div>
            </div>
            <div className="flex justify-normal items-center space-x-4 p-2 rounded w-full hover:bg-slate-100">
            <img src="../src/assets/image/jaipur.jpg" alt="manali" className="rounded w-32 h-32"></img>
                <div className="space-y-2">
                <h4 className="text-2xl font-bold font-cabin tracking-wider">Jaipur</h4>
                    <p className="italic font-cabin tracking-wider">
                    The city of joy and happiness
                </p>
                <button className="bg-[#393E46] p-2 rounded hover:bg-[#ffd369] hover:text-black text-white font-bold font-cabin tracking-wider">Navigate</button>
                   </div>
            </div>
            <div className="flex justify-normal items-center space-x-4 p-2 rounded w-full hover:bg-slate-100">
            <img src="../src/assets/image/chikmagalur.jpg" alt="manali" className="rounded w-32 h-32"></img>
                <div className="space-y-2">
                <h4 className="text-2xl font-bold font-cabin tracking-wider">Chikmagalur</h4>
                    <p className="italic font-cabin tracking-wider">
                   Trek through the clouds
                </p>
                <button className="bg-[#393E46] p-2 rounded hover:bg-[#ffd369] hover:text-black text-white font-bold font-cabin tracking-wider">Navigate</button>
                   </div>
            </div>
            </div>
    </div>
}

export default DestinationPage