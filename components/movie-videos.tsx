
async function getVideos(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    console.log(videos);
    return <h6>{}</h6>;
}