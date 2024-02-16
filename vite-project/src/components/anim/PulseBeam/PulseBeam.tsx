"use client";

import React from "react";
import { AvatarImage } from "../..";

const grad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
};

const grad2 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
};

const grad3 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
};

const grad4 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%",
  },
};

const grad5 = {
  initial: {
    x1: "-40%",
    x2: "-10%",
    y1: "0%",
    y2: "20%",
  },
};

const PulseBeam = () => {
  return (
    <div className="flex h-screen w-screen relative items-center justify-center antialiased bg-slate-950 overflow-hidden">
      <AvatarImage />
      <div className="absolute inset-0 flex items-center justify-center">
        <SVGs />
      </div>
    </div>
  );
};

export const SVGs = () => {
  return (
    <svg
      width="858"
      height="434"
      viewBox="0 0 858 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0"
    >
      <path
        d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="var(--slate-800)"
      />
      <path
        d="M568 200H841C846.523 200 851 195.523 851 190V40"
        stroke="var(--slate-800)"
      />
      <path
        d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="var(--slate-800)"
      />
      <path
        d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="var(--slate-800)"
      />
      <path
        d="M380 168V17C380 11.4772 384.477 7 390 7H414"
        stroke="var(--slate-800)"
      />

      {/* Gradient Beams */}

      <path
        d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="url(#grad1)"
      />
      <path
        d="M568 200H841C846.523 200 851 195.523 851 190V40"
        stroke="url(#grad2)"
      />
      <path
        d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="url(#grad3)"
      />
      <path
        d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="url(#grad4)"
      />
      <path
        d="M380 168V17C380 11.4772 384.477 7 390 7H414"
        stroke="url(#grad5)"
      />

      <defs>
        <linearGradient
          id="grad5"
          x1={grad5.initial.x1}
          x2={grad5.initial.x2}
          y1={grad5.initial.y1}
          y2={grad5.initial.y2}
        >
          <GradientColors />
        </linearGradient>
        <linearGradient
          id="grad1"
          x1={grad1.initial.x1}
          x2={grad1.initial.x2}
          y1={grad1.initial.y1}
          y2={grad1.initial.y2}
        >
          <GradientColors />
        </linearGradient>
        <linearGradient
          id="grad2"
          x1={grad2.initial.x1}
          x2={grad2.initial.x2}
          y1={grad2.initial.y1}
          y2={grad2.initial.y2}
        >
          <GradientColors />
        </linearGradient>
        <linearGradient
          id="grad3"
          x1={grad3.initial.x1}
          x2={grad3.initial.x2}
          y1={grad3.initial.y1}
          y2={grad3.initial.y2}
        >
          <GradientColors />
        </linearGradient>
        <linearGradient
          id="grad4"
          x1={grad4.initial.x1}
          x2={grad4.initial.x2}
          y1={grad4.initial.y1}
          y2={grad4.initial.y2}
        >
          <GradientColors />
        </linearGradient>
      </defs>
      <circle
        cx="851"
        cy="34"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="770"
        cy="427"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="142"
        cy="427"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="6.5"
        cy="398.5"
        r="6"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="420.5"
        cy="6.5"
        r="6"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
    </svg>
  );
};
const GradientColors = () => {
  return (
    <>
      <stop stopColor="#18CCFC" stopOpacity="0"></stop>
      <stop stopColor="#18CCFC"></stop>
      <stop offset="0.325" stopColor="#6344F"></stop>
      <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
    </>
  );
};

export { PulseBeam };
