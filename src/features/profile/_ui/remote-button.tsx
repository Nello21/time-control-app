"use client";

import { Button } from "@/shared/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/ui/sheet";
import { MonitorCheck, MonitorX, Plus } from "lucide-react";
import { useState } from "react";
import { useAddArrival } from "../_model/use-add-arrival";

export const RemoteButton = ({
    id,
    uid,
    isgo,
    addType,
    date,
}: {
    id: string;
    uid: string | undefined;
    isgo: string | undefined;
    addType: string | undefined;
    date: { start: string; end: string };
}) => {
    const [open, setOpen] = useState(false);

    const { mutate, isPending } = useAddArrival({ isgo, id, date });

    const closeSheet = () => {
        if (open) {
            setOpen(false);
        }
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                {isgo && addType && isgo === "1" && addType === "1" ? (
                    <Button className="flex flex-row gap-2 bg-red-light text-white hover:bg-red-red-800 transition-color">
                        <MonitorX />
                        <span>Завершить удаленную работу</span>
                    </Button>
                ) : (
                    <Button className="flex flex-row gap-2 bg-green-dark text-white hover:bg-green-green-800 transition-color">
                        <MonitorCheck />
                        <span>Выйти на удаленную работу</span>
                    </Button>
                )}
            </SheetTrigger>

            <SheetContent
                aria-describedby={undefined}
                side={"bottom"}
                className="bg-white border-0"
            >
                <SheetHeader className="flex flex-row justify-between">
                    <SheetTitle className="w-fit">Подтверждение</SheetTitle>
                    <SheetClose asChild onClick={closeSheet}>
                        <Plus
                            size={25}
                            strokeWidth="1.75px"
                            className="cursor-pointer rotate-45 transition-opacity text-black space-y-2 > :not([hidden]) ~ :not([hidden])"
                        />
                    </SheetClose>
                </SheetHeader>
                <div className="flex flex-col items-center gap-4">
                    {isgo && addType && isgo === "1" && addType === "1" ? (
                        <span>Завершить удаленную работу?</span>
                    ) : (
                        <span>Выйти на удаленную работу?</span>
                    )}
                    <div className="flex flex-row gap-2 w-full justify-center">
                        <Button
                            onClick={closeSheet}
                            className="max-w-[175px] w-full bg-gray-light text-black"
                        >
                            Нет
                        </Button>
                        <Button
                            className="max-w-[175px] w-full bg-blue-dark text-white"
                            onClick={() => {
                                if (isgo === "1") {
                                    mutate({ uid, inouttype: 2 });
                                } else {
                                    mutate({ uid, inouttype: 1 });
                                }
                                closeSheet();
                            }}
                            disabled={isPending}
                        >
                            Да
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};
