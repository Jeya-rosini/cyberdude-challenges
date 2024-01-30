import suggestion from "../components/form";
import { useParams } from "react-router-dom";

const ContactPage = () => {
    const {name} = useParams();
console.log(name);

    return <div className="max-w-6xl mx-auto mt-5 p-6 shadow-lg shadow-neutral-200 h-fit bg-[url('https://static.photocdn.pt/images/articles/2019/07/19/nature_photography_tips_for_beginners.jpg')] bg-cover bg-no-repeat rounded">
        <div className="bg-neutral-100 bg-opacity-55 p-2 rounded"> 
        <h4 className="text-4xl text-black font-bold font-cabin tracking-wide text-center"><span className="text-[#ffd369]">Suggestions</span> here</h4>
        <div className="text-center m-4">
            <span className="text-xl font-medium font-cabin tracking-wide">Hai {name} 👋🏻, Kindly give your sugestions</span>
            </div>
            {suggestion()}
        </div>
        
    </div>
}

export default ContactPage