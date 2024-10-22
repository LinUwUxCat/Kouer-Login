import { ChangeEventHandler, useState } from "react";

export default function TextField({
    type,
    isValid,
    setContent,
}: {
    type: string,
    isValid : boolean
    setContent : ChangeEventHandler,
}) {
    const [actualType, setActualType] = useState(type)
    var toggle = <span onClick={togglePass} className="float-right relative ml-[-50px] mr-[20px] mt-[12.5px] select-none hover:cursor-pointer text-slate-400">O</span>;
    var classes = isValid ? 
                            "" :
                            "outline outline-2 outline-red-500"

    function togglePass(){
        if (type!="password")return;
        setActualType(actualType=="password"?"text":"password")
    }
    
    console.log(classes)
    return (
        <div>
            <input type={actualType} className={`${classes} font-light rounded-3xl bg-slate-100 h-12 w-full focus:border focus:border-gray-500 focus:outline-none p-4`} onChange={setContent}/>
            {type=="password"?toggle:""}
        </div>
    )
}