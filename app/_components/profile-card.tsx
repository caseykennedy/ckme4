import { PlusIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
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
        <PlusIcon className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="flex flex-row flex-nowrap items-center gap-4">
          {/* <div>
            <Avatar className="">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Casey Kennedy"
              />
              <AvatarFallback>CK</AvatarFallback>
            </Avatar>
          </div> */}
          <div>
            <DialogTitle>Casey Kennedy</DialogTitle>
            <DialogDescription>Developer + Designer</DialogDescription>
          </div>
        </DialogHeader>
        <div className="container"></div>
        <DialogFooter>me@caseykennedy.me</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
