"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetProps extends React.ComponentPropsWithoutRef<typeof Dialog.Root> {
  children: React.ReactNode;
}

export function Sheet({ children, ...props }: SheetProps) {
  return <Dialog.Root {...props}>{children}</Dialog.Root>;
}

export function SheetTrigger({ children, ...props }: React.ComponentPropsWithoutRef<typeof Dialog.Trigger>) {
  return <Dialog.Trigger {...props}>{children}</Dialog.Trigger>;
}

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof Dialog.Content> {
  side?: "left" | "right" | "top" | "bottom";
}

export function SheetContent({ children, className, side = "right", ...props }: SheetContentProps) {
  const sideClasses = {
    left: "left-0",
    right: "right-0",
    top: "top-0",
    bottom: "bottom-0",
  };

  return (
    <Dialog.Portal>
      {/* Overlay: Blur only on small screens */}
      <Dialog.Overlay className="fixed inset-0 bg-black/30 max-md:backdrop-blur-sm" />
      
      {/* Sidebar */}
      <Dialog.Content
        className={cn(
          "fixed top-0 h-full w-80 bg-white shadow-lg transition-transform",
          sideClasses[side], 
          className
        )}
        {...props}
      >
        {/* Mobile Header with Close Button */}
        <div className="md:hidden flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <Dialog.Close className="text-gray-600 hover:text-gray-900">
            <X className="h-6 w-6" />
          </Dialog.Close>
        </div>

        {/* Sidebar Content */}
        {children}
        
        {/* Default Close Button (for desktop) */}
        <Dialog.Close className="hidden md:block absolute right-4 top-4">
          <X className="h-5 w-5" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
