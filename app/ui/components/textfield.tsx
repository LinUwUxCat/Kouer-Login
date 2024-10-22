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
                            "outline outline-1 outline-red-500"
    console.log(classes)
    return (
        <input type={type} className={`${classes} font-light rounded-xl bg-slate-100`} onChange={setContent}/>
    )
}