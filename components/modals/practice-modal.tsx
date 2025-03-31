"use client";


import Image from "next/image";
import { useEffect, useState } from "react";
import { usePracticeModal } from "@/store/use-practice-modal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";

export const PracticeModal = () => {
  
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();
  useEffect(() => setIsClient(true), []);



  if (!isClient) {
    return null;
  }
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/logo.jpg" alt="Hearts" width={100} height={100} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
          Practice Lesson
          </DialogTitle>
          <DialogDescription className="text-center text-base">
           use practice lesson to regain hearts and points.
            you cannot loose hearts ans points in practice lesson.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
           
            <Button
              variant="ghost"
              className="w-full"
              size="lg"
              onClick={close}
            >
              I understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};