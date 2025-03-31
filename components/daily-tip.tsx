"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { dailyTips } from "@/constants";

export const DailyTip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState({ id: 0, title: "", description: "" });

  useEffect(() => {
    // Get a random tip each day
    // Use the day of year as a seed for consistent random selection per day
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    
    // Generate a 0-1 random number using the day as seed
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    
    // Get a random index between 0 and the length of the tips array
    const randomIndex = Math.floor(seededRandom(dayOfYear) * dailyTips.length);
    setCurrentTip(dailyTips[randomIndex]);
  }, []);

  return (
    <div className="p-5 space-y-5 shadow-sm bg-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold text-lg text-cyan-300">Daily Tip</h3>
        <Button
          size="xs"
          variant="phantom"
          className="text-xs font-medium transition-all hover:scale-105"
          onClick={() => setIsOpen(true)}
        >
          View details
        </Button>
      </div>

      <div className="p-4 bg-blue-50/30 rounded-lg">
        <h4 className="text-sm font-medium text-white mb-2">
          Tip: {currentTip.title}
        </h4>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Today's Tip</DialogTitle>
          </DialogHeader>
          
          <div className="p-4 bg-blue-50/30 rounded-lg">
            <h4 className="text-base font-medium text-white mb-3">
              {currentTip.title}
            </h4>
            <p className="text-sm text-white">{currentTip.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};