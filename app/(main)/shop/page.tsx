import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import Image from "next/image";
import { Items } from "./items";
import { Quest } from "@components/quest";
import { Leaderboard } from "@/components/leaderboard";
import { DailyTip } from "@/components/daily-tip";

const ShopPage = async() => {
    const userProgress = await getUserProgress();

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress activeCourse={userProgress.activeCourse} hearts={userProgress.hearts} points={userProgress.points} />

                <DailyTip />
                <Leaderboard />
                <Quest points={userProgress.points} />
            </StickyWrapper>
            
            <FeedWrapper>
                <div className="w-full flex flex-col items-center max-w-3xl mx-auto">
                    <Image src="/shopping-bag.png" alt="Shop" width={90} height={90} />
                    <h1 className="text-center font-bold text-cyan-300 text-3xl my-4 tracking-tight">Shop</h1>
                    <p className="text-white text-center text-lg mb-8">Spend your points on amazing items</p>
                    <div className="w-full p-2 rounded-xl">
                        <Items hearts={userProgress.hearts} points={userProgress.points} />
                    </div>
                </div>
            </FeedWrapper>
        </div>
    );
};

export default ShopPage;
