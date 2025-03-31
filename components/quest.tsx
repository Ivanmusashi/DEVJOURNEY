import Image from "next/image";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { quests } from "@/constants";
import { Progress } from "@components/ui/progress";

type Props = {
    points: number;
}

export const Quest = ({ points }: Props) => {
    return (
        <div className=" p-5 space-y-5 shadow-sm bg-transparent backdrop-blur-sm">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <Image 
                        src="/point.png"
                        alt="Quest"
                        width={28}
                        height={28}
                        className="object-contain"
                    />
                    <h3 className="font-bold text-lg text-cyan-300">Quests</h3>
                </div>
                <Link href="/quest">
                    <Button 
                        size="xs" 
                        variant="phantom"
                        className="text-xs font-medium transition-all hover:scale-105">
                        View all
                    </Button>
                </Link>
            </div>
            
            <ul className="w-full space-y-4">
                {quests.slice(0, 3).map((quest, index) => {
                    const progress = (points / quest.value) * 100;
                    const cappedProgress = Math.min(100, progress);
                    
                    return (
                        <div 
                            className={`flex items-center w-full py-3 gap-x-3 ${
                                index !== 0 ? "border-t border-gray-100" : ""
                            }`} 
                            key={quest.title}
                        >
                            <div className="p-1.5 bg-blue-50/50 rounded-full">
                                <Image 
                                    src="/point.png"
                                    alt="Points"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2 w-full">
                                <div className="flex justify-between items-center">
                                    <p className="text-neutral-700 text-sm font-medium">{quest.title}</p>
                                    <span className="text-xs font-medium text-blue-600">{Math.round(cappedProgress)}%</span>
                                </div>
                                <Progress 
                                    value={cappedProgress} 
                                    className="h-2 bg-gray-100/70 rounded-full" 
                                />
                            </div>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}