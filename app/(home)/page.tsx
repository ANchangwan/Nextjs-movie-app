import Movie from "@/components/movie";

interface IMovieProps {
    id: string;
    title: string;
    poster_path: string;
}

async function getMovie() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    const data = await response.json();
    return data;
}

export default async function Home() {
    const datas = await getMovie();

    return (
        <div className="w-4/5 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {datas.map((data: IMovieProps) => (
                        <Movie
                            key={data.id}
                            id={data.id}
                            poster_path={data.poster_path}
                            title={data.title}
                        />
                ))}
            </div>
        </div>
    );
}


