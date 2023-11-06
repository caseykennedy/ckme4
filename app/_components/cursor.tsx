"use client";

import { useContext } from "react";

import Img from "./img";

import { MouseContext } from "~/context/mouse-context";
import { cn } from "~/utils";
import useMousePosition from "~/utils/useMousePosition";

export default function Cursor() {
  const { x, y } = useMousePosition();
  const { cursorType } = useContext(MouseContext);
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={cn(
          `pointer-events-none fixed left-0 top-0 z-50 hidden h-4 w-4 translate-x-4 translate-y-4 items-center justify-center rounded-full bg-white text-black opacity-0 mix-blend-difference ease-in sm:flex`,
          {
            hidden: cursorType.type === "hidden",
            "opacity-1": x > 0 && y > 0,
            "h-12 w-fit translate-x-3 translate-y-3 px-6 mix-blend-normal":
              cursorType.type === "hover",
            "h-52 w-52 -translate-x-2 -translate-y-2":
              cursorType.type === "figure",
          },
        )}
      >
        {cursorType?.text ?? ""}
        {cursorType?.figure && (
          <div>
            <Img
              src={cursorType.figure}
              fill={true}
              alt="Project thumbnail"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        )}
      </div>
    </>
  );
}
