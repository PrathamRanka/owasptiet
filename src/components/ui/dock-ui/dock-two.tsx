/* eslint-disable */
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon, Menu, X } from "lucide-react";

interface DockProps {
  className?: string;
  items: {
    icon: LucideIcon;
    label: string;
    onClick?: () => void;
  }[];
}

interface DockIconButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
} as const;

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, onClick, className }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
          "relative group p-3 sm:p-2 rounded-lg flex items-center gap-4 text-lg",
          "hover:bg-white/10 transition-colors duration-300",
          className
        )}
      >
        <Icon className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
        <span className="text-white">{label}</span>
      </motion.button>
    );
  }
);
DockIconButton.displayName = "DockIconButton";

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div ref={ref} className={cn("w-full flex items-center justify-center p-2", className)}>
        {/* Desktop Dock */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={floatingAnimation as any}
          className={cn(
            "hidden md:flex flex-row gap-2 p-3 sm:p-2 rounded-2xl",
            "bg-black/30 backdrop-blur-xl",
            "border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]",
            "hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-300",
            "w-fit"
          )}
        >
          {items.map((item) => (
            <DockIconButton key={item.label} {...item} />
          ))}
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-lg bg-black/50 backdrop-blur-lg"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-start p-8"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 p-2 bg-white/10 rounded-lg"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="mt-16 flex flex-col gap-6 w-full">
                  {items.map((item) => (
                    <DockIconButton
                      key={item.label}
                      {...item}
                      className="w-full justify-start text-2xl"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);
Dock.displayName = "Dock";

export { Dock };
