"use client";

import { ContactItems } from "../hero";

import useDate from "~/lib/useDate";

export default function Footer() {
  const nevadaTime = useDate();
  return (
    <footer className="border-t-[2px] border-dotted border-zinc-700 py-4">
      <div className="container pb-96">Casey Kennedy</div>
      <div className="container grid grid-cols-6">
        <div className="col-span-2 self-end">©☻</div>
        <div className="col-span-2 self-end text-zinc-400">nv {nevadaTime}</div>
        <div className="col-span-2 self-end">
          <ContactItems
            title="Contact"
            items={["Github", "Dribbble", "LinkedIn"]}
          />
        </div>
      </div>
    </footer>
  );
}
