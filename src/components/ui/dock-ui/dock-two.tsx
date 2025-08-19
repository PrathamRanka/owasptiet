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
  showLabelAlways?: boolean;
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
  ({ icon: Icon, label, onClick, className, showLabelAlways }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        whileHover={!showLabelAlways ? { scale: 1.1, y: -5 } : {}}
        onClick={onClick}
        className={cn(
          "relative group p-[0.5rem] sm:p-[0.75rem] rounded-lg flex items-center",
          showLabelAlways ? "justify-start gap-[1rem]" : "justify-center",
          "hover:bg-white/10 transition-colors duration-300",
          className
        )}
      >
        <Icon className="w-[1.25rem] h-[1.25rem] sm:w-[1.25rem] sm:h-[1.25rem] text-white" />

        {showLabelAlways && (
          <span className="text-white text-lg">{label}</span>
        )}

        {!showLabelAlways && (
          <span
            className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {label}
          </span>
        )}
      </motion.button>
    );
  }
);
DockIconButton.displayName = "DockIconButton";

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dockRef = React.useRef<HTMLDivElement>(null);

    // Lock body scroll when open
    React.useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    // Close on outside click
    React.useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        if (dockRef.current && !dockRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }
      if (isOpen) {
        document.addEventListener("click", handleClickOutside);
      }
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [isOpen]);

    return (
      <div
        ref={ref}
        className={cn("w-full flex items-center justify-center p-[0.5rem]", className)}
      >
        {/* Desktop Dock */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={floatingAnimation as any}
          className={cn(
            "hidden md:flex flex-row gap-[0.5rem] p-[0.75rem] rounded-2xl",
            "bg-black/30 backdrop-blur-xl",
            "border border-white/10 shadow-[0_0.25rem_1.875rem_rgba(0,0,0,0.8)]",
            "hover:shadow-[0_0.5rem_2.5rem_rgba(0,0,0,0.5)] transition-all duration-300",
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
            className="p-[0.5rem] rounded-lg bg-black/50 backdrop-blur-lg"
          >
            {isOpen ? (
              <X className="w-[1.5rem] h-[1.5rem] text-white" />
            ) : (
              <Menu className="w-[1.5rem] h-[1.5rem] text-white" />
            )}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={dockRef}
                key="dock-popup"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="
                  fixed top-[1.5rem] left-1/2 -translate-x-1/2 z-50
                  bg-black/80 backdrop-blur-xl
                  p-[0.5rem] rounded-2xl border border-white/10 shadow-lg
                  overflow-hidden
                "
              >
                <div className="flex flex-row gap-[0.5rem] sm:gap-[0.75rem]">
                  {items.map((item) => (
                    <DockIconButton
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        setIsOpen(false);
                      }}
                      className="p-[0.5rem]"
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
