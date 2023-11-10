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
          `pointer-events-none fixed left-0 top-0 z-50 hidden h-4 w-4 translate-x-4 translate-y-4 items-center justify-center rounded-full bg-white text-black opacity-0 ease-in sm:flex`,
          {
            "opacity-1": x > 0 && y > 0,
            "h-12 w-fit translate-x-3 translate-y-3 px-6 mix-blend-normal":
              cursorType.type === "hover",
            "h-6 w-6 bg-zinc-400": cursorType.type === "link",
            " h-[179px] w-[270px] translate-x-5 translate-y-5 rounded-lg":
              cursorType.type === "figure",
            "mix-blend-normal sm:hidden": cursorType.type === "hidden",
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
              className="h-full w-full rounded object-cover"
            />
          </div>
        )}
      </div>
    </>
  );
}
