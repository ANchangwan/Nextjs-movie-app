
import Movie from "@/components/movie";
import {Badge} from "@/components/ui/badge";

interface ISimilarMovie {
    id: string;
    title: string;
    poster_path: string;
}


async function getSimilarMovie(movieId: string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${movieId}/similar`);
    return response.json();
}

export default async function SimilarMovie({id}:{id:string}){
    const movies = await getSimilarMovie(id);

    return (
        <div>
            <Badge className="my-4 text-xl p-4 rounded-xl">비슷한 영화</Badge>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
                {movies.map((movie:ISimilarMovie) =>(<Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>))}
            </div>
        </div>
    )
}