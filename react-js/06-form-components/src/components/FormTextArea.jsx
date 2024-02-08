import { useState } from "react"

const FormTextArea = ({id, placeholder, value, handleOnSubmit,required }) => {

    return (
        <div className="mt-2">
        <label htmlFor="dedication" className="text-lg font-semibold text-white">Dedication to</label>
        <textarea  id={id}
              name={id}
        placeholder={placeholder}
        value={value}
              onChange={handleOnSubmit}
              required
        className="outline-none p-2 w-full rounded mt-2"></textarea>
    </div>
    )
}

export default FormTextArea