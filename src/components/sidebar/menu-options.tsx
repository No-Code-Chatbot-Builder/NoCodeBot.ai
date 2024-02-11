"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ChevronsUpDown, Menu, Settings } from "lucide-react";
import clsx from "clsx";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import Link from "next/link";
import { useModal } from "@/providers/modal-provider";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import InviteAFriend from "./invite-friend";
import PersonalDetails from "./personal-details";

type SidebarOption = {
  heading: string;
  items: { name: string }[];
};

type Props = {
  defaultOpen?: boolean;
  sidebarOpt: SidebarOption[];
  id: string;
};

const MenuOptions = ({ id, sidebarOpt, defaultOpen }: Props) => {
  const { setOpen } = useModal();
  const [isMounted, setIsMounted] = useState(false);

  const openState = useMemo(
    () => (defaultOpen ? { open: true } : {}),
    [defaultOpen]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet modal={false} {...openState}>
      <SheetTrigger
        asChild
        className="absolute left-4 top-4 z-[100] md:!hidden flex"
      >
        <Button variant="outline" size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        showX={!defaultOpen}
        side={"left"}
        className={clsx("backdrop-blur-xl fixed top-0 border-r-[1px] p-6", {
          "hidden md:inline-block z-0 w-[300px]": defaultOpen,
          "inline-block md:hidden z-[100] w-full": !defaultOpen,
        })}
      >
        <div className="flex flex-col h-full">
          <nav className="flex flex-col justify-between h-full">
            <Popover>
              <PopoverTrigger>
                <div className="flex flex-row justify-center items-center md:w-[250px] w-full p-4 mb-10 gap-4">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={"/assets/ncbai.svg"}
                      alt="Sidebar Logo"
                      fill
                      className="rounded-md object-contain"
                    />
                  </div>

                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-xl font-semibold">NoCodeBot.ai</h1>
                    <p className="text-muted-foreground text-xs">Workspace 1</p>
                  </div>
                  <div>
                    <ChevronsUpDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent>Workspaces</PopoverContent>
            </Popover>
            <Command className="rounded-lg overflow-visible bg-transparent">
              <CommandInput placeholder="Search..." />
              <CommandList className="py-4 overflow-visible">
                <CommandEmpty>No Results Found</CommandEmpty>
                {sidebarOpt.map((sidebarOption) => (
                  <React.Fragment key={sidebarOption.heading}>
                    <div className="px-4 py-2" key={sidebarOption.heading}>
                      <h3 className="text-sm text-primary">
                        {sidebarOption.heading}
                      </h3>
                    </div>
                    <CommandGroup className="overflow-visible">
                      {sidebarOption.items.map((item) => (
                        <CommandItem
                          key={item.name}
                          className="md:w-[250px] w-full text-muted-foreground p-2 "
                        >
                          <Link
                            href={"/dashboard"}
                            className="flex items-center gap-4 rounded-md transition-all"
                          >
                            <Settings />
                            <span>{item.name}</span>
                          </Link>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </React.Fragment>
                ))}
              </CommandList>
            </Command>

            <div>
              <InviteAFriend />
              <PersonalDetails />
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuOptions;
