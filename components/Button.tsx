export default function Button({ text, className }: { text: string, className?: string }) {
    return <button className={`${className} rounded-xl text-center px-14 font-semibold py-2`}>{text}</button>;
}
