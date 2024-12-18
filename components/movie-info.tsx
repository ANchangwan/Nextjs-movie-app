import Image from "next/image";
import StarRating from "@/components/StarRating";
import Button from "@/components/Button";


async function getMovie(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
    return response.json();
}


export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-[80vw] max-w-[1200px] h-[70vh] md:h-[80vh] lg:h-[70vh] rounded-2xl bg-[#13161F] shadow-2xl">
            <div className="lg:col-span-2 relative items-end">
                <Image
                    width={400}
                    height={700}
                    src={movie.poster_path}
                    alt={movie.title}
                    className="h-[76vh] lg:h-[76vh] md:h-[60vh] sm:h-[50vh] absolute lg:rounded-2xl lg:-top-20 lg:left-16 md:rounded-lg md:-top-10 md:left-8 sm:rounded-md sm:-top-5 sm:left-4"
                />
            </div>
            <div className="lg:col-span-2 md:col-span-1 sm:col-span-1">
                <div className="p-4">
                    <h1 className="uppercase">{movie.title}</h1>
                    <StarRating vote_average={movie.vote_average}/>
                </div>
                <p className="p-4">{movie.overview}</p>
                <div className="flex justify-start gap-2 p-4">
                    <Button className="bg-red-500 text-white" text={"Watch"}/>
                    <Button className="bg-gray-400 text-white" text={"Info"}/>
                </div>
            </div>
        </div>
    )
}
