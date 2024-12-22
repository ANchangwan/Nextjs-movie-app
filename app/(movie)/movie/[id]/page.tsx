import {Suspense} from "react";
import MovieInfo from "@/components/movie-info";


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
    </div>
}