import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({
  title,
  id,
  imageSrc,
  onClick,
  disabled,
  active,
}: Props) => {
  return (
    <div
    onClick={() => onClick(id)}
    className={cn(
      "h-full relative backdrop-blur-md bg-white/10   rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-between p-6 min-h-[230px] min-w-[200px] overflow-hidden",
      disabled && "pointer-events-none opacity-50"
    )}
  >
    {/* Glass overlay with subtle gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl z-0"></div>
    
    {/* Glow effect in background */}
    <div className="absolute -inset-1 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
    
    <div className="min-h-[24px] w-full flex items-center justify-end relative z-10">
      {active && (
        <div className="rounded-md bg-green-500 flex items-center justify-center p-1.5 shadow-[0_0_10px_rgba(34,197,94,0.5)]">
          <Check className="text-white stroke-[4] h-4 w-4" />
        </div>
      )}
    </div>
    
    <div className="relative group p-1 z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur-md rounded-lg group-hover:opacity-40 transition-opacity duration-300"></div>
      <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={75}
        className="rounded-lg object-cover border border-white/20 relative z-10 shadow-md group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    
    <p className="text-white font-bold mt-4 text-center relative z-10 text-shadow-glow group-hover:text-glow transition-all duration-300">
      {title}
    </p>
  </div>
  );
};