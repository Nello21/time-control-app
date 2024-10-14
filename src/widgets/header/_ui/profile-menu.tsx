"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/ui/sheet";
import { Menu, Plus } from "lucide-react";
import { useMenu } from "../_model/use-menu";
import { LogoutBtn } from "./logout-btn";
import { Profile } from "@/features/profile/_ui/profile";

export const ProfileMenu = () => {
    const { closeSheet, session, setOpen, open } = useMenu();
    const opacity = open ? 100 : 0;
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            {!open && (
                <SheetTrigger asChild>
                    <Menu
                        size={30}
                        strokeWidth="1.75px"
                        className="cursor-pointer md:opacity-0 md:cursor-none transition-opacity"
                    />
                </SheetTrigger>
            )}
            {open && (
                <SheetClose>
                    <Plus
                        size={30}
                        strokeWidth="1.75px"
                        className="cursor-pointer rotate-45 md:opacity-0 md:cursor-none transition-opacity"
                    />
                </SheetClose>
            )}

            <SheetContent
                aria-describedby={undefined}
                side={"right"}
                className="w-full bg-gray-light border-0 top-[50px] md:hidden"
            >
                <SheetHeader className="hidden">
                    <SheetTitle />
                </SheetHeader>
                <div className="flex flex-col gap-4">
                    <div
                        className="flex gap-2 items-center font-semibold"
                        onClick={() => closeSheet()}
                    >
                        <Profile />
                    </div>

                    <LogoutBtn />
                </div>
            </SheetContent>
        </Sheet>
    );
};
