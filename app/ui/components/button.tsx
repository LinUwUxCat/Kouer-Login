'use client';

export default function Button({
    onClickHandler,
    text,
    isPrimary
}: {
    onClickHandler: React.MouseEventHandler,
    text: string,
    isPrimary : boolean
}){
    var style : string = isPrimary ? 
                    /*  Primary  */ "bg-green-600 hover:bg-green-500 text-white" : 
                    /* Secondary */ "bg-white hover:bg-green-100 outline outline-1 outline-green-600 text-green-600";
    return (
        <button onClick={onClickHandler} className={`rounded-3xl px-5 py-2 w-[60%] h-12 transition duration-200 font-medium mb-5 ${style}`}>{text}</button>
    )
}