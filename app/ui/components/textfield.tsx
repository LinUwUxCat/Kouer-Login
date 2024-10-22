import { ChangeEventHandler } from "react";

export default function TextField({
    type,
    isValid,
    setContent,
}: {
    type: string,
    isValid : boolean
    setContent : ChangeEventHandler,
}) {

    var classes = isValid ? 
                            "" :
                            "outline outline-2 outline-red-500"
    console.log(classes)
    return (
        <input type={type} className={`${classes} font-light rounded-3xl bg-slate-100 h-12 focus:border focus:border-gray-500 focus:outline-none p-4`} onChange={setContent}/>
    )
}