import Link from "next/link";

interface MovieProps {
    id: string,
    title: string,
    poster_path: string,
}

export default function Movie({ id, title, poster_path }: MovieProps) {
    return (
        <div
            className="rounded-2xl bg-gray-600 opacity-100 hover:opacity-70 hover:scale-125
        transition duration-300 ease-in-out flex flex-col justify-center items-center"
        >
            <Link href={`/movie/${id}`}>
                <img className="w-full rounded-2xl" src={poster_path} alt={title} /> {/* 이미지 너비 조정 */}
                <h1 className="text-center font-semibold py-5">{title}</h1>
            </Link>
        </div>
    );
}
