'use client';
import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useMotionValue,
  AnimatePresence,
  Transition,
  Variant,
} from 'framer-motion';
import { cn } from '@/lib/utils';

type CursorProps = {
  children: React.ReactNode;
  className?: string;
  attachToParent?: boolean;
  transition?: Transition;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
  onPositionChange?: (x: number, y: number) => void;
};

function isTouchDevice() {
  // Check if device supports touch events or pointer with touch capability
  return (
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      // For some browsers that support PointerEvent
      (window.PointerEvent && navigator.maxTouchPoints > 0))
  );
}

export function Cursor({
  children,
  className,
  attachToParent,
  variants,
  transition,
  onPositionChange,
}: CursorProps) {
  const cursorX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  );
  const cursorY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  );
  const cursorRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(
    !attachToParent && !isTouchDevice()
  );

  useEffect(() => {
    if (isTouchDevice()) {
      // On touch devices: show native cursor and don't track mouse
      document.body.style.cursor = 'auto';
      setIsVisible(false);
      return;
    }

    if (!attachToParent) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }

    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      onPositionChange?.(e.clientX, e.clientY);
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      // Reset cursor style when unmounting
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, onPositionChange, attachToParent]);

  useEffect(() => {
    if (isTouchDevice()) {
      // Do nothing on touch devices
      return;
    }

    const handleVisibilityChange = (visible: boolean) => {
      setIsVisible(visible);
    };

    if (attachToParent && cursorRef.current) {
      const parent = cursorRef.current.parentElement;
      if (parent) {
        const onEnter = () => {
          parent.style.cursor = 'none';
          handleVisibilityChange(true);
        };
        const onLeave = () => {
          parent.style.cursor = 'auto';
          handleVisibilityChange(false);
        };

        parent.addEventListener('mouseenter', onEnter);
        parent.addEventListener('mouseleave', onLeave);

        return () => {
          parent.removeEventListener('mouseenter', onEnter);
          parent.removeEventListener('mouseleave', onLeave);
        };
      }
    }
  }, [attachToParent]);

  if (isTouchDevice()) {
    // Don't render cursor component on touch devices
    return null;
  }

  return (
    <motion.div
      ref={cursorRef}
      className={cn('pointer-events-none fixed left-0 top-0 z-50', className)}
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            transition={transition}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
