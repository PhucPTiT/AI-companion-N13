"use client"
import { cn } from "@/lib/utils";
import {Sparkles} from "lucide-react"
import { Poppins } from "next/font/google";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobileSidebar";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

const Navbar = () => {
    return (
        <div className="
            fixed
            w-full
            z-50
            flex
            justify-between
            items-center
            px-4
            py-2
            h-16
            border-b
            border-primary/10
            bg-secondary
        ">
            <div className="flex items-center">
                <MobileSidebar/>
                <Link href={"/"}>
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
                        companion.ai
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant="premium" size = "sm">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                </Button>
                <ModeToggle/>
                <UserButton/>
            </div>
        </div>
    );
}
 
export default Navbar;