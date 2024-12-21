export default function Gerers({ name }: { name: string }) {
    return (
        <div className="p-2 max-h-8 bg-gray-500 rounded-xl flex justify-center items-center mr-2 ring-1 ring-amber-50 outline-amber-50">
            <h2 className="font-semibold uppercase text-[11px] text-center whitespace-nowrap overflow-hidden text-ellipsis">{name}</h2>
        </div>
    )
}
