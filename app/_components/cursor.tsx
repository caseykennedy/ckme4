"use client";

import { useContext } from "react";

import { MouseContext } from "~/context/mouse-context";
import { cn } from "~/util";
import useMousePosition from "~/util/useMousePosition";

export default function Cursor() {
  const { x, y } = useMousePosition();
  const { cursorType } = useContext(MouseContext);
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={cn(
          `pointer-events-none fixed left-0 top-0 z-50 h-5 w-5 translate-x-[50%] translate-y-[50%] border-2 border-white text-white opacity-0 ease-out will-change-auto`,
          {
            "opacity-1": x > 0 && y > 0,
          },
        )}
      >
        {cursorType}
      </div>
      {/* <div
        className="pointer-events-none fixed left-[50%] top-[50%] z-50 h-3 w-3 translate-x-[50%] translate-y-[50%] bg-zinc-200"
        style={{ left: `${x}px`, top: `${y}px` }}
      /> */}
    </>
  );
}
