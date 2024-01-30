import carousel from "../components/carousel"

const HomePage = () => {
    return <div>
        <div>
    {carousel()}
            <div className="m-4 p-2 text-center font-cabin tracking-wider">
                <h5 className="font-bold text-4xl">Why <span className="text-[#FFD369]">Wander ?</span></h5>
                <p className="first-letter:text-3xl text-xl p-2">Wandering, walking, trekking - helps to make better conclusion, give new ideas and insightfulness. Making your body and mind feel fresh and healthy. Prevent from Heart Disease. Strengthen relationships </p>
            </div>
            <div className="m-4">
                <h5 className="font-bold font-cabin tracking-wider text-4xl text-center">Why <span className="text-[#ffd369]">WanderLust ?</span></h5>
                <div className="flex justify-center items-center space-x-4">
                <div><img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-adventurous-clipart-cartoon-guy-hiking-and-trekking-on-the-mountains-vector-png-image_11069267.png" alt="trekking" className="w-80 h-32 object-contain"></img></div>
                <div>
                        <p className="font-cabin tracking-wider text-xl text-left">WanderLust gives the exploring options of your choice. Description of each and every place with map locations attached.
                        WanderLust guided you with expertise in all fields of travelling</p>
                </div>
                </div>
            </div>
       </div>
    </div>
}
export default HomePage