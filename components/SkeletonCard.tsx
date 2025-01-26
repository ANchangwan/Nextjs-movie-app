import { Skeleton } from "@/components/ui/skeleton";
import { AiOutlinePicture } from "react-icons/ai";


export default function SkeletonCard(){
    return (
        <div className="flex justify-center min-h-52 flex-col space-y-2 min-w-40">
            <Skeleton className="flex flex-col justify-center items-center">
                <AiOutlinePicture className="size-3/4"/>
            </Skeleton>
            <div className="space-y-2">
                <Skeleton className="w-full h-2"/>
                <Skeleton className="w-full h-2"/>
            </div>
        </div>
    )
}