import suggestion from "../components/form"

const ContactPage = () => {
    return <div className="max-w-6xl m-5 p-6 shadow-lg shadow-neutral-200 h-screen bg-[url('https://static.photocdn.pt/images/articles/2019/07/19/nature_photography_tips_for_beginners.jpg')] bg-cover bg-no-repeat rounded">
        <div className="bg-neutral-100 bg-opacity-55 p-2 rounded"> 
        <h4 className="text-4xl text-black font-bold font-cabin tracking-wide text-center"><span className="text-[#ffd369]">Suggestions</span> here</h4>
        {suggestion()}
        </div>
        
    </div>
}

export default ContactPage