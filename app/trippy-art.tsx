"use client";

import { useContext } from "react";

import Section from "~/components/ui/section";
import { MouseContext } from "~/context/mouse-context";

export default function TrippyArt() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <Section
      className=""
      onMouseEnter={() => cursorChangeHandler({ type: "hidden", text: "" })}
      onMouseLeave={() => cursorChangeHandler({ type: "default", text: "" })}
    >
      <iframe
        src="https://munro-art.vercel.app/?params=eyJzcGVlZCI6MC4xLCJub3JtYWxTY2FsZSI6MC40OSwic3RyZW5ndGgiOjEuMTYsInN0cmVuZ3RoU2NhbGUiOnsieCI6MC4xLCJ5IjowLjF9LCJkaXJlY3Rpb24iOnsieCI6LTEsInkiOi0xfSwic2NhbGluZyI6ImZpbGwiLCJpbWdTY2FsZSI6MC44LCJjYW52YXNCRyI6eyJyIjozMCwiZyI6MzAsImIiOjMwLCJhIjoxMDB9LCJpbnRyb0RlbGF5IjozLCJpbnRyb0R1cmF0aW9uIjo1LCJwYXVzZWQiOmZhbHNlLCJpbWFnZXMiOnsiYmciOiIvaW1hZ2VzL3NlbGVjdGlvbi9tY2dnZi5qcGciLCJub3JtYWwiOiIvaW1hZ2VzL2ZpbHRlcl9OUk0uanBnIn19"
        width="100%"
        height="100%"
        className="aspect-video"
      ></iframe>
    </Section>
  );
}
