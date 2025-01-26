import Link from "next/link";
import Image from "next/image";
import SkeletonCard from "@/components/SkeletonCard";



interface MovieProps {
    id: string;
    title?: string;
    poster_path?: string;
}

export default function Movie({ id, title, poster_path }: MovieProps) {


    return (
        <div
            className="rounded-2xl bg-gray-800 shadow-2xl hover:z-50 opacity-70 hover:opacity-100 hover:scale-125
        transition duration-300 ease-in-out mx-auto p-6"
        >
                <Link className="flex flex-col justify-center items-center" href={`/movie/${id}`}>
                    {poster_path ?
                       <>
                        <Image width={500} height={500} className="w-full h-3/4 object-cover rounded-2xl"
                            src={poster_path} alt={title || "null"}/>
                        <h1 className="text-center font-semibold py-5 mt-4">{title}</h1>
                       </> : <SkeletonCard/>}
                </Link>

        </div>
    );
}

