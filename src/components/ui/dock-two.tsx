import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

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
          "relative group p-3 sm:p-2 rounded-lg",
          "hover:bg-white/10 transition-colors duration-300",
          className
        )}
      >
        <Icon className="w-6 h-6 sm:w-5 sm:h-5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]" />
        <span
          className={cn(
            "absolute -top-8 left-1/2 -translate-x-1/2",
            "px-2 py-1 rounded text-xs",
            "bg-black/80 text-white",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity whitespace-nowrap pointer-events-none"
          )}
        >
          {label}
        </span>
      </motion.button>
    );
  }
);
DockIconButton.displayName = "DockIconButton";

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full flex items-center justify-center p-2", className)}
      >
        <motion.div
          initial="initial"
          animate="animate"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variants={floatingAnimation as any}
          className={cn(
            "flex flex-row gap-2 p-3 sm:p-2 rounded-2xl relative",
            // Black glassmorphism effect
            "bg-black/30 backdrop-blur-xl",
            "border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]",
            // Depth glow
            "before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/5 before:pointer-events-none",
            "hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-300",
            "w-fit"
          )}
        >
          {items.map((item) => (
            <DockIconButton key={item.label} {...item} />
          ))}
        </motion.div>
      </div>
    );
  }
);
Dock.displayName = "Dock";

export { Dock };
