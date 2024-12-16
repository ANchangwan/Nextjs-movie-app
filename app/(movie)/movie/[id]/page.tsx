import {Suspense} from "react";
import MovieVideos from "@/components/movie-videos";
import MovieInfo from "@/components/movie-info";

export default async function MovieDetail({
                                       params
                                   }: {
    params: Promise<{ id: string }>
}){
    const {id} = await params;

    return <div>
        <h1>movie detail</h1>
        <Suspense fallback={<div>loading...</div>}>
            <MovieVideos id={id} />
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
            <MovieInfo id={id} />
        </Suspense>
    </div>
}