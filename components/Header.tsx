"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";



export default function Header() {
    const pathname = usePathname();


    return(
        <nav className="flex justify-center items-center gap-4 bg-gray-400 font-semibold
        rounded-3xl shadow-md hover:shadow-lg hover:scale-110 w-48 h-8 mx-auto my-6
        transition-transform duration-150 ease-in-out fixed top-2 right-0 left-0
        ">
            <Link   href="/">Home{pathname === "/" ? "🔥" : ""}</Link>
            <Link href="/about-us">About {pathname === "/about-us" ? "🔥" : ""}</Link>
        </nav>
    )
}