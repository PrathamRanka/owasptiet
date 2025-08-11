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

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, onClick, className }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          "relative group p-3 rounded-none cursor-none", // cursor-none here
          "hover:bg-white/10 transition-colors duration-300",
          className
        )}
        aria-label={label}
      >
        <Icon className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]" />
        <span
          className={cn(
            "absolute top-full left-1/2 -translate-x-1/2 mt-1",
            "px-2 py-1 rounded text-xs",
            "bg-black/80 text-white",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity whitespace-nowrap pointer-events-none" // pointer-events-none here is good
          )}
        >
          {label}
        </span>
      </button>
    );
  }
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "fixed w-full flex items-center justify-center bg-black shadow-md cursor-none", // cursor-none here to hide cursor on whole dock
          className
        )}
      >
        <div className="flex flex-row gap-6 p-4 max-w-screen-xl w-full px-6 justify-center mx-auto">
          {items.map((item) => (
            <DockIconButton key={item.label} {...item} />
          ))}
        </div>
      </nav>
    );
  }
);


export { Dock };
