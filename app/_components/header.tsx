import { MinusIcon } from "@radix-ui/react-icons";

import InfoMenu from "./info-menu";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full max-w-site px-2 pt-4 mix-blend-difference sm:px-5">
      <div className="container flex flex-row items-center justify-between">
        <h1 className="text-base leading-tight" aria-label="Casey Kennedy">
          ck
          <span className="hidden">Casey Kennedy</span>
        </h1>

        <div>
          <InfoMenu />
        </div>
      </div>
    </header>
  );
}
