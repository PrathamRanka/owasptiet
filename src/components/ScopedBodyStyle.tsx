"use client";
import { useEffect } from "react";

export default function ScopedBodyStyle({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const originalBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#000"; // or your dark shade

    return () => {
      document.body.style.backgroundColor = originalBg;
    };
  }, []);

  return <>{children}</>;
};
