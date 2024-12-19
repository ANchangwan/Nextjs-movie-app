"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useCallback, useEffect, useState} from "react";


export default function Header() {
    const pathname = usePathname();
    const [isHidden, setIsHidden] = useState(false);
    const scrollThreshold = 50; // Adjust this value to the desired scroll point
    const pathName = (path:string, ...rest: string[]) =>{
        return pathname === path ? rest : "";
    }


    const handleScroll = useCallback(() => {
        if (window.scrollY > scrollThreshold) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    }, [scrollThreshold]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [handleScroll]);

    return(
        <nav className={`flex justify-center items-center gap-4 bg-gray-400 font-semibold
        rounded-3xl shadow-md hover:shadow-lg hover:scale-110 w-48 h-12 mx-auto my-6
        transition-transform duration-150 ease-in-out fixed top-8 left-2/4 right-0
        z-10 ${isHidden ? "hidden" : ""}
        `}>
            <Link href="/">Home{pathName("/", " 🔥")}</Link>
            <Link href="/about-us">About {pathname === "/about-us" ? "🔥" : ""}</Link>
        </nav>
    )
}