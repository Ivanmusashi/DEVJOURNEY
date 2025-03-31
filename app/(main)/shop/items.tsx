"use client";

import Image from "next/image";
import { Button } from "@components/ui/button";
import { useTransition } from "react";
import { refillHearts, buyOneHeart, buyTwoHearts } from "@/actions/user-progress"; 
import { POINTS_TO_REFILL } from "@/constants";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({ hearts, points }: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) return;
    
    startTransition(async () => {
      try {
        await refillHearts();
      } catch {
        console.error("Something went wrong, please try again");
      }
    });
  };

  const onBuyOneHeart = () => {
    if (pending || hearts >= 5 || points < 50) return;

    startTransition(async () => {
      try {
        await buyOneHeart();
      } catch {
        console.error("Something went wrong, please try again");
      }
    });
  };

  const onBuyTwoHearts = () => {
    if (pending || hearts > 3 || points < 90) return;

    startTransition(async () => {
      try {
        await buyTwoHearts();
      } catch {
        console.error("Something went wrong, please try again");
      }
    });
  };

  return (
    <ul className="w-full shadow-md flex flex-col gap-4">
    

      {/* Buy 1 Heart */}
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2 border-cyan-200 rounded-2xl bg-slate-800">
        <Image src="/heart.png" alt="One Heart" width={60} height={60}  />
        <div className="flex-1">
          <p className="text-cyan-700 text-lg lg:text-xl font-bold">1 Heart</p>
          <p className="text-slate-400 text-sm">Purchase one additional heart</p>
        </div>
        <Button onClick={onBuyOneHeart} disabled={pending || hearts >= 5 || points < 50} className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-xl shadow-md transition">
          {hearts >= 5 ? "Full" : (
            <div className="flex items-center gap-x-2">
              <Image src="/point.png" alt="Points" height={20} width={20} className="rounded-full" />
              <p className="text-white font-medium">50</p>
            </div>
          )}
        </Button>
      </div>

      {/* Buy 2 Hearts */}
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2 border-cyan-200 rounded-2xl bg-slate-800">
        <div className="relative w-16 h-16">
          <Image src="/two.png" alt="Two Hearts" width={60} height={60} />
          
        </div>
        <div className="flex-1">
          <p className="text-cyan-700 text-lg lg:text-xl font-bold">2 Hearts</p>
          <p className="text-slate-400 text-sm">Purchase two additional hearts</p>
        </div>
        <Button onClick={onBuyTwoHearts} disabled={pending || hearts > 3 || points < 90} className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-xl shadow-md transition">
          {hearts > 3 ? "Not Enough Space" : (
            <div className="flex items-center gap-x-2">
              <Image src="/point.png" alt="Points" height={20} width={20} className="rounded-full" />
              <p className="text-white font-medium">90</p>
            </div>
          )}
        </Button>
      </div>

        {/* Refill Hearts */}
        <div className="flex items-center w-full px-2 py-1 gap-x-2 border-t-2 border-cyan-200 rounded-2xl bg-slate-800">
        <Image src="/5hearts.png" alt="Hearts" width={80} height={80} />
        <div className="flex-1">
          <p className="text-cyan-700 text-lg lg:text-xl font-bold">Refill Hearts</p>
          <p className="text-slate-400 text-sm">Fill all hearts to maximum</p>
        </div>
        <Button onClick={onRefillHearts} disabled={pending || hearts === 5 || points < POINTS_TO_REFILL} className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2  rounded-xl shadow-md transition">
          {hearts === 5 ? "Full" : (
            <div className="flex items-center gap-x-2">
              <Image src="/point.png" alt="Points" height={20} width={20} className="rounded-full" />
              <p className="text-white font-medium">{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
    </ul>
  );
};
