import Link from "next/link";

interface MovieProps {
    id: string,
    title: string,
    poster_path: string,
}

export default function Movie({ id, title, poster_path }: MovieProps) {
    return (
        <div
            className="rounded-2xl bg-gray-800 shadow-2xl hover:z-50 opacity-70 hover:opacity-100 hover:scale-125
        transition duration-300 ease-in-out flex flex-col justify-center items-center"
        >
            <Link className="flex flex-col justify-center items-center" href={`/movie/${id}`}>
                <img className="w-full h-3/4 rounded-2xl" src={poster_path} alt={title} />
                <h1 className="text-center font-semibold py-5">{title}</h1>
            </Link>
        </div>
    );
}

