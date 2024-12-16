import wait from "@/utils/wait";

export default async function Detail({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    await wait(2000);
    return <h1>My Page {id}</h1>
}