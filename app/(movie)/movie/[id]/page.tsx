import {Suspense} from "react";
import MovieInfo from "@/components/movie-info";
import Loader from "@/components/Loader";
import MovieVideos from "@/components/movie-videos";
import SimilarMovie from "@/components/getSimilarMovie";


export default async function MovieDetail({
                                       params
                                   }: {
    params: Promise<{ id: string }>
}){
    const {id} = await params;

    return (
        <div className="mx-auto w-[80%] ">
            <div>
                <Suspense fallback={<div>loading...</div>}>
                    <MovieInfo id={id}/>
                </Suspense>
            </div>
            <div className="mx-auto max-w-[1200px] w-[80vw]">
                <div className="mt-5">
                    <Suspense fallback={<Loader/>}>
                        <MovieVideos id={id}/>
                    </Suspense>
                </div>
                <div className="mt-5">
                    <Suspense fallback={<Loader/>}>
                        <SimilarMovie id={id}/>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}