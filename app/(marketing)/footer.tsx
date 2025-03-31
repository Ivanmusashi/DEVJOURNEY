import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full p-2 bg-black bg-opacity-50 backdrop-blur-md border-t border-gray-700">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full text-white">
          <Image src="/logo.jpg" alt="javascript" height={32} width={40} className="mr-4 rounded-md" />
          JavaScript
        </Button>
        <Button size="lg" variant="ghost" className="w-full text-white">
          <Image src="/logo.jpg" alt="java" height={32} width={40} className="mr-4 rounded-md" />
          Java
        </Button>
        <Button size="lg" variant="ghost" className="w-full text-white">
          <Image src="/logo.jpg" alt="python" height={32} width={40} className="mr-4 rounded-md" />
          Python
        </Button>
        <Button size="lg" variant="ghost" className="w-full text-white">
          <Image src="/logo.jpg" alt="C++" height={32} width={40} className="mr-4 rounded-md" />
          C++
        </Button>
        <Button size="lg" variant="ghost" className="w-full text-white">
          <Image src="/logo.jpg" alt="html-css" height={32} width={40} className="mr-4 rounded-md" />
          HTML-CSS
        </Button>
      </div>
    </footer>
  );
};