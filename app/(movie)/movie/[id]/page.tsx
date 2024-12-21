import {Suspense} from "react";
import MovieInfo from "@/components/movie-info";
import Profile from "@/components/Profile";

export default async function MovieDetail({
                                       params
                                   }: {
    params: Promise<{ id: string }>
}){
    const {id} = await params;

    return <div className="mx-auto">
        <div>
            <Suspense fallback={<div>loading...</div>}>
                <MovieInfo id={id}/>
            </Suspense>
        </div>
        <div className="mx-auto w-[80%]">
            <Suspense fallback={<div>loading...</div>}>
                <Profile id={id}/>
            </Suspense>
        </div>

    </div>
}