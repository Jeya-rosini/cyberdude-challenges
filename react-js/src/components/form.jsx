import React from "react";

export default function suggestion() {

    function suggestion(formData) {
        const GuestName = formData.get("GuestName");
        console.log(GuestName);
    }
    return (
        <div className="m-4 p-2">
             <form action={suggestion}>
                <div className="space-y-2 mb-2">
                    <label for="GuestName" className="font-semibold font-cabin tracking-wider text-2xl">Your Name</label>
                <input name="GuestName" placeholder="Enter your name" className="w-full outline-none rounded p-2"/>
                </div>
                <div className="space-y-2 mb-2">
                    <lable for="message" className="font-semibold font-cabin tracking-wider text-2xl">Your Message</lable>
                <textarea className="p-2 w-full rounded h-56" placeholder="Enter your suggestion"></textarea>
                </div>
                <div className="space-y-2">
                <button type="submit" className="p-2 bg-[#ffd369] m-2 rounded font-semibold font-cabin tracking-wide hover:cursor-pointer hover:bg-white">Submit</button>
            </div>
        </form>
       </div>
    );
}