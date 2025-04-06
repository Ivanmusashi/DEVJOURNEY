"use client";
import * as React from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { motion } from "framer-motion";

const MobileSidebar = () => {
  return (
    <Sheet>
     
      <SheetTrigger asChild>
        <button className="lg:hidden p-2">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>

      
      <SheetContent side="left" className="p-0 w-[256px] bg-transparent fixed top-0 left-0 h-auto">
        <motion.div
          initial={{ x: "-100%" }} 
          animate={{ x: "0%" }} 
          exit={{ x: "-100%" }} 
          transition={{ duration: 0.6, ease: "easeInOut" }} 
          className="w-[256px] bg-blue-500 text-white h-auto fixed top-0 left-0 shadow-lg"
        >
         
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <h1 className="text-2xl font-extrabold text-indigo-900 tracking-wide">
              devJourney
            </h1>
           
            <SheetTrigger asChild>
              <button className="text-white hover:text-gray-300">
                <X className="h-6 w-6" />
              </button>
            </SheetTrigger>
          </div>

          <Sidebar />
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
