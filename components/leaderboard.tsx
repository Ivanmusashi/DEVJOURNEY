import {getTopTenUsers } from "@/db/queries";
import Image from "next/image";
import { Separator } from "@components/ui/separator";
import {Avatar, AvatarImage} from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import Link from "next/link";

export const Leaderboard = async()=>{
    const leaderboardData = getTopTenUsers();
    const[   
        leaderboard
    ]= await Promise.all([  
        leaderboardData,
    ])  
    
    
    const topThree = leaderboard.slice(0, 3);
   
    const remainingUsers = leaderboard.slice(3);
    
    return (
        <div className="w-full flex flex-col items-center max-w-3xl mx-auto p-3 rounded-xl">
            
            <div className="flex items-center justify-center gap-2 mb-1.5">
                <Image 
                    src="/podium.png"
                    alt="Leaderboard"
                    width={32}
                    height={32}
                    className="object-cover shadow-sm"
                />  
                <h1 className="font-bold text-cyan-400 text-lg tracking-tight">Leaderboard</h1>
                <Link href="/leaderboard">
                    <Button 
                        size="xs" 
                        variant="phantom"
                        className="text-xs font-medium transition-all hover:scale-105">
                        View all
                    </Button>
                </Link>
            </div>
            
            <Separator className="mb-1 h-0.5 rounded-full w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent"/>
            
            <div className="w-full space-y-1">
              
                {topThree.map((userProgress, index) => (
                    <div
                        key={userProgress.userId}
                        className={`flex items-center w-full p-1.5 px-3 rounded-xl transition-all bg-bg-cyan-50/30 shadow-sm hover:bg-cyan-50/10`}
                    >
                        <div className={`flex justify-center items-center font-bold h-8 w-8 rounded-full mr-1 ${
                            index === 0 ? "bg-cyan-100 text-cyan-800" : 
                            index === 1 ? "bg-cyan-50 text-cyan-700" : 
                            index === 2 ? "bg-cyan-50 text-cyan-700" :
                            "bg-gray-50 text-gray-600"
                        }`}>
                            {index + 1}
                        </div>      
                                  
                        <p className="font-bold text-neutral-500 text-sm flex-1">{userProgress.userName}</p>
                        <Avatar className={`border-1 h-6 w-6 mr-3 ${
                            index === 0 ? "border-cyan-400 bg-cyan-500" : 
                            index === 1 ? "border-cyan-300 bg-cyan-400" : 
                            index === 2 ? "border-cyan-300 bg-cyan-400" :
                            "border-gray-200 bg-white"
                        }`}>
                            <AvatarImage
                                className="object-cover"
                                src={userProgress.userImageSrc}
                            />
                        </Avatar>
                    </div>
                ))}
                
              
                {remainingUsers.map((userProgress, index) => (
                    <div
                        key={userProgress.userId}
                        className={`flex items-center w-full p-1 px-4 rounded-xl transition-all bg-bg-cyan-50/30 shadow-sm hover:bg-cyan-50/10`}
                    >
                        <div className="flex justify-center items-center font-bold h-8 w-8 rounded-full mr-1 bg-gray-50 text-gray-600">
                            {index + 4}
                        </div>      
                                  
                        <p className="font-bold text-neutral-500 text-sm flex-1">{userProgress.userName}</p>
                        <Avatar className="border-1 h-6 w-6 mr-3 border-gray-200 bg-white">
                            <AvatarImage
                                className="object-cover"
                                src={userProgress.userImageSrc}
                            />
                        </Avatar>
                    </div>
                ))}
            </div>
        </div>
    )
}