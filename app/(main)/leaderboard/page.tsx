import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getTopTenUsers } from "@/db/queries";
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import Image from "next/image";

import { Separator } from "@components/ui/separator";
import {Avatar, AvatarImage} from "@components/ui/avatar";
import {Quest} from "@/components/quest";
import {DailyTip} from "@/components/daily-tip";



const LeaderboardPage = async()=>{
    const userProgressData = getUserProgress();
    const  leaderboardData = getTopTenUsers();

    const[
        userProgress,
         leaderboard
        ]= await Promise.all([
        userProgressData,
        leaderboardData,
    ])

    if(!userProgress || !userProgress.activeCourse){
        redirect("/courses");
    }
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
           <StickyWrapper>
            <UserProgress
            activeCourse={userProgress.activeCourse}
            hearts={userProgress.hearts}
            points={userProgress.points}
          
            />
<DailyTip />
             <Quest points={userProgress.points}/>
           </StickyWrapper>
<FeedWrapper>
<FeedWrapper>
    <div className="w-full flex flex-col items-center max-w-3xl mx-auto p-6 rounded-xl">
        <div className="bg-cyan-50/50 p-4 rounded-full mb-2">
            <Image 
                src="/podium.png"
                alt="Leaderboard"
                width={90}
                height={90}
                className=" object-cover shadow-sm"
            />
        </div>
        
        <h1 className="text-center font-bold text-cyan-400 text-3xl my-4 tracking-tight">Leaderboard</h1>
        <p className="text-neutral-500 text-center text-lg mb-8">See where you stand among other learners in the community</p>

        <Separator className="mb-6 h-0.5 rounded-full w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent"/>
        
        <div className="w-full space-y-2">
            {leaderboard.map((userProgress, index) => (
                <div
                    key={userProgress.userId}
                    className={`flex items-center w-full p-3 px-6 rounded-xl transition-all bg-bg-cyan-50/30 shadow-sm hover:bg-cyan-50/10`}
                >
                    <div className={`flex justify-center items-center font-bold h-8 w-8 rounded-full mr-3 ${
                        index === 0 ? "bg-cyan-100 text-cyan-800" : 
                        index === 1 ? "bg-cyan-50 text-cyan-700" : 
                        index === 2 ? "bg-cyan-50 text-cyan-700" :
                        "bg-gray-50 text-gray-600"
                    }`}>
                        {index + 1}
                    </div>  
                    
                    <Avatar className={`border-2 h-12 w-12 mr-6 ${
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
                    
                    <p className="font-bold text-white flex-1">{userProgress.userName}</p>
                    
                    <div className="flex items-center bg-cyan-100/70 px-3 py-1 rounded-full">
                        <p className="text-cyan-700 font-medium">{userProgress.points} XP</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</FeedWrapper>
</FeedWrapper>
        </div>
    )
}
export default LeaderboardPage;