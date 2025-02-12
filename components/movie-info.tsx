import Image from "next/image";
import StarRating from "@/components/StarRating";
import Button from "@/components/Button";
import Gerers from "@/components/Gerers";
import {Suspense} from "react";
import Profile from "@/components/Profile";

interface GeresProps {
    id:number;
    name:string;
}

async function getMovie(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
    return response.json();
}


export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-[1200px] w-[80vw] min-h-[70vh] md:px-5 rounded-2xl bg-[#13161F] shadow-2xl  scrollbar-hide">
            <div className="lg:col-span-2 relative items-end max-lg:mx-auto">
                <Image
                    width={400}
                    height={700}
                    src={movie.poster_path}
                    alt={movie.title}
                    placeholder="empty"
                    priority
                    className="max-lg:w-screen h-auto max-h-full rounded-2xl lg:h-[100vh] md:h-[60vh] sm:h-[50vh]
                    xl:absolute xl:left-20
                    lg:absolute lg:-top-20 lg:left-13
                    md:relative md:-top-20
                    sm:relative "
                />
            </div>

            <div className="lg:col-span-2 md:col-span-1 sm:col-span-1">
                <div className="p-4 flex flex-col gap-y-4">
                    <h1 className="uppercase font-semibold text-5xl my-4">{movie.title}</h1>
                    <StarRating vote_average={movie.vote_average}/>
                    <div className="flex justify-start items-start ">
                        {movie.genres.map((genre:GeresProps) => <Gerers key={genre.id} name={genre.name}/>)}
                    </div>
                </div>
                <p className="p-4 text-xl">{movie.overview}</p>
                <div className="px-4">
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Profile id={id}/>
                    </Suspense>
                </div>
                <div className="flex justify-start gap-2 mb-10 pl-4">
                    <Button className="bg-red-500 text-white" text={"Watch"}/>
                    <Button className="bg-gray-400 text-white" text={"Info"}/>
                </div>
            </div>
        </div>
    )
}
