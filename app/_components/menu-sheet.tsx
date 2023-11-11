import { useEffect, useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function MenuSheet() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [open]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <PlusIcon className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose>a</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
