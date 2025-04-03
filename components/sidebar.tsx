"use client";
import { X, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import Image from "next/image"; // ✅ Import Next.js Image

type Props = {
  className?: string;
  onClose?: () => void;
};

const Sidebar = ({ className, onClose }: Props) => {
  return (
    <aside
      className={cn(
        "bg-[#0A0F1D] h-screen w-[256px] text-white p-4 fixed top-0 left-0 z-50 flex flex-col",
        "max-[256px]:hidden", // Hide below 475px
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          {/* ✅ Use next/image with absolute path */}
          <Image src="/logo1.jpg" height={40} width={40} alt="Logo" />
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            devJourney
          </h1>
        </div>
      </Link>     
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/reading-book.png" />
      {/* <SidebarItem label="Lesson" href="/lessonPage" iconSrc="/open-book (1).png" />*/}
        <SidebarItem label="Ide" href="/ide" iconSrc="/ide.png" />
        <SidebarItem label="Coding game" href="/coding-game" iconSrc="/coding.png" />
        <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/podium.png" />
        <SidebarItem label="Quest" href="/quest" iconSrc="/paper.png" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shopping-bag.png" />
        <SidebarItem label="Help & Support" href="/help" iconSrc="/faq.png" />
      </div>    
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </aside>
  );
};
export default Sidebar;
