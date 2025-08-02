"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  children,
  className,
  background = true,
  minSize = 0.4,
  maxSize = 1,
  animationDuration = 1,
  amount = 20,
  perspective = false,
  color = "#ffffff",
}: {
  children?: React.ReactNode;
  className?: string;
  background?: boolean;
  minSize?: number;
  maxSize?: number;
  animationDuration?: number;
  amount?: number;
  perspective?: boolean;
  color?: string;
}) => {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const sparklesArray = [];
    for (let i = 0; i < amount; i++) {
      sparklesArray.push(generateSparkle());
    }
    setSparkles(sparklesArray);
  }, [amount]);

  const generateSparkle = () => {
    const size = Math.random() * (maxSize - minSize) + minSize;
    const duration = Math.random() * animationDuration + animationDuration / 2;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const zIndex = Math.random() * 10 - 5;
    return {
      id: Math.random(),
      size,
      duration,
      left,
      top,
      zIndex,
    };
  };

  return (
    <div className={cn("relative w-full", className)}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: sparkle.left + "%",
            top: sparkle.top + "%",
            width: sparkle.size + "px",
            height: sparkle.size + "px",
            background: color,
            borderRadius: "50%",
            animation: `sparkle ${sparkle.duration}s linear infinite`,
            zIndex: perspective ? sparkle.zIndex : undefined,
          }}
        />
      ))}
      {children}
    </div>
  );
};
