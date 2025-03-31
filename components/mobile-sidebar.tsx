"use client";
import * as React from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const MobileSidebar = () => {
  return (
    <Sheet>
      {/* Hamburger Button */}
      <SheetTrigger asChild>
        <button className="lg:hidden p-2">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>

      {/* Sidebar with Custom Transition */}
      <SheetContent side="left" className="p-0 w-[256px] bg-transparent fixed top-0 left-0 h-auto">
        <motion.div
          initial={{ x: "-100%" }} // Starts off-screen to the left
          animate={{ x: "0%" }} // Slides in to the right
          exit={{ x: "-100%" }} // Slides out when closed
          transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth effect
          className="w-[256px] bg-blue-500 text-white h-auto fixed top-0 left-0 shadow-lg"
        >
          {/* Sidebar Header with Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <h1 className="text-2xl font-extrabold text-indigo-900 tracking-wide">
              devJourney
            </h1>
            {/* Close Button */}
            <SheetTrigger asChild>
              <button className="text-white hover:text-gray-300">
                <X className="h-6 w-6" />
              </button>
            </SheetTrigger>
          </div>

          {/* Sidebar Content */}
          <Sidebar />
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
