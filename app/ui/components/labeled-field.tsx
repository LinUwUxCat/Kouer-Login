import { ChangeEventHandler } from "react"
import TextField from "./textfield"

export default function LabeledField({
    label,
    type,
    setContent,
    isValid
}: {
    label: string,
    type: "text" | "password",
    setContent : ChangeEventHandler,
    isValid : boolean
}){
    return (
        <div className="labeled-field flex flex-col w-[60%] mb-5">
            <span className="font-normal text-slate-400 ml-3">{label}</span>
            <TextField type={type} setContent={setContent} isValid={isValid}/>
        </div>
    )
}