"use client";

import React, { SVGProps } from "react";
import { Cursor } from "@/components/ui/cursor-ui"; // adjust path if needed

const MouseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={31}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#22c55e"
        fillRule="evenodd"
        stroke="#fff"
        strokeLinecap="square"
        strokeWidth={2}
        d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#22c55e" d="M0 0h26v31H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default function CustomCursor() {
  return (
    <Cursor>
      <MouseIcon />
    </Cursor>
  );
}
