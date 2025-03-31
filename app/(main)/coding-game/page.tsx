import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getTopTenUsers } from "@/db/queries";
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import Image from "next/image";

import { Separator } from "@components/ui/separator";
import {Avatar, AvatarImage} from "@components/ui/avatar";
import {Quest} from "@/components/quest";
import {Leaderboard} from "@/components/leaderboard";
import { DailyTip } from "@/components/daily-tip";


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
            hasActiveSubscription={false}
            />
        <DailyTip />
        <Leaderboard />
             <Quest points={userProgress.points}/>
           </StickyWrapper>
<FeedWrapper>
<div>
    coding game
</div>
</FeedWrapper>
        </div>
    )
}
export default LeaderboardPage;