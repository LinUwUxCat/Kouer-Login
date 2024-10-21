export default function TextField({
    type
}: {
    type: string
}) {
    return (
        <input type={type} className="rounded-xl"/>
    )
}