"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
  label: string;
  iconSrc?: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      asChild
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px] flex items-center gap-x-3 px-4"
    >
      <Link href={href} className="flex items-center gap-x-3">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={label}
            height={32}
            width={32}
            className="mr-2"
          />
        )}
        {label}
      </Link>
    </Button>
  );
};
