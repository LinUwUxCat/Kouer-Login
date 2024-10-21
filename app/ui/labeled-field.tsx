import TextField from "./textfield"

export default function LabeledField({
    label,
    type
}: {
    label: string,
    type: "text" | "password"
}){
    return (
        <div className="labeled-field flex flex-col">
            {label}
            <TextField type={type}/>
        </div>
    )
}