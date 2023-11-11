import { PlusIcon } from "@radix-ui/react-icons";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function ProfileCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusIcon />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Casey Kennedy</DialogTitle>
          <DialogDescription>Developer + Designer</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">a</div>
          <div className="grid grid-cols-4 items-center gap-4">b</div>
        </div>
        <DialogFooter>me@caseykennedy.me</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
