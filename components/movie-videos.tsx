import {Badge} from "@/components/ui/badge";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";

interface IVideoProps {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}


async function getVideos(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);


    return (
        <div className=" mx-auto rounded-xl bg-[#14161F] max-w-[1200px] w-[80vw] p-4 border-2 border-white border-opacity-30">
            <Badge className="ml-4 font-semibold text-xl h-5 min-w-12 bg-gray-700 p-4 rounded-xl">예고편</Badge>
            <ScrollArea className="rounded border-gray-200 border-opacity-50 mt-5 p-4">
                <div className="flex w-max space-x-4">
                    {videos.slice(0,4).map((video:IVideoProps) => (
                        <iframe
                            key={video.id}
                            src={`https://youtube.com/embed/${video.key}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={video.name}
                        />
                    ))}
                </div>

                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}