"use client";

import Link from "next/link";
import { ThumbsUp,ThumbsDown,PartyPopper } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage?: number;
};

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage = 0, 
}: Props) => {
  const spacing = 60;
  const indentationLevel = index % 2 === 0 ? 0 : 1; 
  const rightPosition = indentationLevel * spacing;
  

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? ThumbsUp : isLast ? PartyPopper :ThumbsDown;
  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <div>
      <Link
        href={href}
        aria-disabled={locked}
        style={{ pointerEvents: locked ? "none" : "auto" }}
      >
        <div
          className="relative"
          style={{
            right: `${rightPosition}px`,
            marginTop: isFirst && !isCompleted ? 60 : 24,
          }}
        >
          {current ? (
            <div className="h-[102px] w-[102px] relative">
              <div 
                className="absolute -top-6 -left-2.5 px-3 py-2.5 border-2 font-bold uppercase text-sky-600 bg-white rounded-lg shadow-lg animate-bounce tracking-wide z-10"
              >
                Start
                <div
                  className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"
                />
              </div>
              <CircularProgressbarWithChildren
                value={Number.isNaN(percentage) ? 0 : percentage}
                styles={{
                  path: { stroke: "#00BCD4" },
                  trail: { stroke: "#333333" },
                }}
              >
                <Button
                  size="rounded"
                  variant={locked ? "locked" : "abyss"}
                  className="h-[70px] w-[70px] border-b-8"
                >
                  <Icon
                    className={cn(
                      "h-10 w-10",
                      locked
                        ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                        : "fill-primary-foreground text-primary-foreground",
                      isCompleted && "fill-none stroke-[4]"
                    )}
                  />
                </Button>
              </CircularProgressbarWithChildren>
            </div>
          ) : (
            <Button
            size="rounded"
            variant={locked ? "locked" : "abyss"}
            className="h-[70px] w-[70px] border-b-8"
          >
            <Icon
              className={cn(
                "h-10 w-10",
                locked
                  ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                  : "fill-primary-foreground text-primary-foreground",
                isCompleted && "fill-none stroke-[4]"
              )}
            />
          </Button>
          )}
        </div>
      </Link>
    </div>
  );
};