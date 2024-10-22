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
import { Profile } from "@/features/profile/_ui/profile";

export const ProfileMenu = () => {
    const { session, setOpen, open } = useMenu();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            {!open && (
                <SheetTrigger asChild>
                    <Menu
                        size={30}
                        strokeWidth="1.75px"
                        className="cursor-pointer min-[800px]:opacity-0 min-[800px]:cursor-default min-[800px]:pointer-events-none transition-opacity"
                    />
                </SheetTrigger>
            )}
            {open && (
                <SheetClose asChild>
                    <Plus
                        size={30}
                        strokeWidth="1.75px"
                        className="cursor-pointer rotate-45 min-[800px]:opacity-0 min-[800px]:cursor-default min-[800px]:pointer-events-none transition-opacity"
                    />
                </SheetClose>
            )}

            <SheetContent
                aria-describedby={undefined}
                side={"right"}
                className="w-full bg-gray-light border-0 top-[50px] min-[800px]:hidden max-[800px]:top-[75px]"
            >
                <SheetHeader className="hidden">
                    <SheetTitle />
                </SheetHeader>
                <div className="flex flex-col gap-5 justify-center content-center sm:px-6">
                    <div className="flex gap-2 font-semibold">
                        {session.data && <Profile />}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};
