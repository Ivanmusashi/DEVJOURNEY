"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();
  useEffect(() => setIsClient(true), []);

const onClick = () => {
  close();
  router.push("/store");
};

  if (!isClient) {
    return null;
  }
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/sad.png" alt="mascot" width={80} height={80} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            you ran out of hearts
          </DialogTitle>
          <DialogDescription className="text-center text-base">
  purchase them in the store
</DialogDescription>
<Button
  variant="primary"
  className="mt-4 w-full"
  size="lg"
  onClick={() => {
    close(); 
    router.push("/shop");
  }}
>
  Go to Shop
</Button>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
         
            <Button
              variant="primaryOutline"
              className="w-full"
              size="lg"
              onClick={close}
            >
              no thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};