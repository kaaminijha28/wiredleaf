"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const animationClass = animate
    ? "animate-border-gradient"
    : "";

  return (
    <div className={cn("relative p-[1px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 opacity-75 blur-xl transition-all group-hover:opacity-100",
          animationClass
        )}
      />
      <div
        className={cn(
          "relative bg-black rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
