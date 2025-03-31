import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import Image from "next/image";
import { quests } from "@/constants";
import { Leaderboard } from "@/components/leaderboard";

const QuestPage = async () => {
  const userProgress = await getUserProgress();

  if (!userProgress?.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
        <Leaderboard />
      </StickyWrapper>

      <FeedWrapper>
        <div className="w-full flex flex-col items-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="bg-cyan-50 p-4 rounded-full mb-2 shadow-sm">
            <Image
              src="/point.png"
              alt="Quest"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>

          {/* Title & Description */}
          <h1 className="text-center font-bold text-cyan-400 text-3xl my-4 tracking-tight">
            Quests
          </h1>
          <p className="text-neutral-500 text-center text-lg mb-8">
            Complete quests by earning points
          </p>

          {/* Quest List */}
          <ul className="w-full space-y-3">
            {quests.map((quest) => {
              const progress = Math.min(100, (userProgress?.points / quest.value) * 100);

              return (
                <div
                  key={quest.title}
                  className="flex items-center w-full p-5 gap-x-5 border border-gray-100 rounded-xl shadow-sm hover:shadow transition-all"
                >
                  {/* Quest Icon */}
                  <div className="flex-shrink-0 bg-cyan-50 p-3 rounded-full">
                    <Image
                      src="/point.png"
                      alt="Points"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>

                  {/* Quest Content */}
                  <div className="flex flex-col gap-y-3 w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-neutral-700 text-lg font-bold">{quest.title}</p>
                      <div className="px-3 py-1 bg-cyan-100 rounded-full">
                        <span className="text-sm font-medium text-cyan-700">
                          {Math.round(progress)}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-cyan-500 h-full rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default QuestPage;
