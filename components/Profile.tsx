import Image from "next/image";
import NonProfile from "@/components/Non-Profile";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

interface IProfileProps {
    id: number;
    name: string;
    profile_path: string;
}

async function getProfile(id:string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}/credits`);
    return response.json();
}

export default async function Profile({id}:{id:string}) {
    const profiles = await getProfile(id);

    return (
        <Carousel className="w-full flex gap-4 my-3 touch-auto overflow-x-auto py-5">
            <CarouselContent>
                {profiles.map((profile:IProfileProps) => profile.profile_path === null ? <NonProfile key={profile.id}/> : (
                    <CarouselItem key={profile.id} className="basis-1/10">
                        <Image
                            className="rounded-sm"
                            width={100}
                            height={200}
                            src={profile.profile_path}
                            alt={profile.name}/>
                        </CarouselItem>)
                )
                }
            </CarouselContent>
        </Carousel>
    );
}