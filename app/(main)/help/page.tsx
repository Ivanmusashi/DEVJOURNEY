import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getTopTenUsers } from "@/db/queries";
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import Image from "next/image";
import { Separator } from "@components/ui/separator";
import { Avatar, AvatarImage } from "@components/ui/avatar";
import { Quest } from "@/components/quest";
import { Leaderboard } from "@/components/leaderboard";
import { DailyTip } from "@/components/daily-tip";
import Link from "next/link";

const HelpPage = async () => {
    const userProgressData = getUserProgress();
    const leaderboardData = getTopTenUsers();

    const [
        userProgress,
        leaderboard
    ] = await Promise.all([
        userProgressData,
        leaderboardData,
    ]);

    if (!userProgress || !userProgress.activeCourse) {
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
                <Leaderboard />
                <Quest points={userProgress.points} />

                
            </StickyWrapper>

            <FeedWrapper>
                
                <div className="py-6 text-center">
                    
                    <div className="flex justify-center py-4 m-4">
                        <Image src="/logo1.jpg" alt="DevJourney Logo" width={300} height={300} />
                    </div>

            
                    <div className="flex justify-center gap-8 py-4 m-4">
                        <Link href="https://facebook.com" target="_blank">
                            <Image src="/facebook (1).png" alt="Facebook" width={60} height={60} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <Image src="/twitter.png" alt="Twitter" width={60} height={60} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <Image src="/instagram.png" alt="Instagram" width={60} height={60} />
                        </Link>
                    </div>

                    <Separator />

                
                    <h1 className="text-xl font-semibold m-4">Support Us</h1>
                    <p className="text-gray-600 text-xl">Your donations help us improve the platform!</p>
                    <div className="flex justify-center gap-8 py-4">
                        <Link href="https://gcash.com" target="_blank">
                            <Image src="/gcash.png" alt="GCash" width={80} height={40} />
                        </Link>
                        <Link href="https://paypal.com" target="_blank">
                            <Image src="/paypal.webp" alt="PayPal" width={80} height={40} />
                        </Link>
                        <Link href="https://paymaya.com" target="_blank">
                            <Image src="/PayMayaLogo.jpg" alt="PayMaya" width={80} height={40} />
                        </Link>
                    </div>

                    <Separator />

            
                    <h1 className="text-xl font-semibold m-4">About Us</h1>
                    <p className="text-gray-600 px-4 py-2 text-xl">
                        DevJourney Chat is an interactive learning platform that helps students master programming languages through real-time collaboration, an integrated coding environment, and engaging challenges. Join us and level up your coding skills!
                    </p>
                </div>
            </FeedWrapper>
        </div>
    );
};

export default HelpPage;
