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
        <div className="grid grid-cols-4 mx-auto w-[80vw] h-[70vh] rounded-2xl bg-gray-700 shadow-2xl ">
            <div className="col-span-2 relative">
                <Image
                    width={400}
                    height={700}
                    src={movie.poster_path}
                    alt={movie.poster_path}
                    className="h-[76vh] absolute rounded-2xl -top-20 left-16"
                />
            </div>
            <div className="col-span-2">
                <div>
                    <h1 className="uppercase">{movie.title}</h1>
                    <StarRating vote_average={movie.vote_average}/>
                </div>
                <p>{movie.overview}</p>
                <div className="flex justify-start gap-2">
                    <Button className="bg-red-500 text-white" text={"Watch"}/>
                    <Button className="bg-gray-400 text-white" text={"Info"}/>
                </div>
            </div>
        </div>
    )
}