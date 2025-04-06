import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


type Props = {
  activeCourse: { imageSrc: string; title: string }; 
  hearts: number;
  points: number;
 
};

export const UserProgress = ({
  activeCourse,
  points,
  hearts,
 
}: Props) => {
 
  const isExternalImage = activeCourse.imageSrc?.startsWith("http");

  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
    
      <Link href="/courses">
        <Button variant="ghost">
          {isExternalImage ? (
        
            <Image
              src={activeCourse.imageSrc}
              alt={activeCourse.title}
              className="rounded-md border"
              width={32}
              height={32}
            />
          ) : (
            
            <Image
              src={activeCourse.imageSrc}
              alt={activeCourse.title}
              className="rounded-md border"
              width={32}
              height={32}
            />
          )}
        </Button>
      </Link>

    
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image src="/point.png" height={28} width={28} alt="Points" className="mr-2" />
          {points}
        </Button>
      </Link>

     
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image src="/heart.png" height={22} width={22} alt="Hearts" className="mr-2" />
          {hearts}
        </Button>
      </Link>
    </div>
  );
};