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
    var style : string = isPrimary ? "bg-green-600 text-white" : "bg-white outline outline-1 outline-green-600";
    return (
        <button onClick={onClickHandler} className={"rounded-3xl px-5 py-2 w-1/2 h-1/2 " + style}>{text}</button>
    )
}