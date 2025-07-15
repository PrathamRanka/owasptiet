// src/components/LazyWrapper.tsx
"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export const LazyWrapper = ({
  children,
  threshold = 0.25,
  rootMargin = "200px",
}: {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
  });

  return <div ref={ref}>{inView ? children : null}</div>;
};
