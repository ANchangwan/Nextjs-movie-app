"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";




export default function Header() {
    const pathname = usePathname();
    const pathName = (path:string, ...rest: string[]) =>{
        return pathname === path ? rest : "";
    }
    return(
        <nav className="flex justify-center items-center gap-4 bg-gray-400 font-semibold
        rounded-3xl shadow-md hover:shadow-lg hover:scale-110 w-48 h-12 mx-auto my-6
        transition-transform duration-150 ease-in-out fixed top-8 left-2/4 right-0
        -z-10
        ">
            <Link href="/">Home{pathName("/", " 🔥")}</Link>
            <Link href="/about-us">About {pathname === "/about-us" ? "🔥" : ""}</Link>
        </nav>
    )
}