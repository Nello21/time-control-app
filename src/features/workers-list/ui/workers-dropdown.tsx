"use client";

import * as React from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";
import { Separator } from "@/shared/ui/separator";
import { useWorkerFilterParams } from "../model/use-workers-filter-params";
import { Button } from "@/shared/ui/button";

export function WorkersDropdown() {
    const { dayTypeParams, handleDayTypeChange } = useWorkerFilterParams();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
                <Button size="icon" variant="ghost">
                    <SlidersHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56 bg-white border-0"
                side="bottom"
                sideOffset={10}
            >
                <DropdownMenuRadioGroup
                    value={dayTypeParams}
                    onValueChange={handleDayTypeChange}
                >
                    <DropdownMenuRadioItem value="all">
                        все
                    </DropdownMenuRadioItem>
                    <Separator />
                    <DropdownMenuRadioItem value="0">
                        на работе
                    </DropdownMenuRadioItem>
                    <Separator />

                    <DropdownMenuRadioItem value="1">
                        больничный
                    </DropdownMenuRadioItem>
                    <Separator />

                    <DropdownMenuRadioItem value="2">
                        отпуск
                    </DropdownMenuRadioItem>
                    <Separator />

                    <DropdownMenuRadioItem value="3">
                        командировка
                    </DropdownMenuRadioItem>
                    <Separator />

                    <DropdownMenuRadioItem value="4">
                        административный
                    </DropdownMenuRadioItem>
                    <Separator />

                    <DropdownMenuRadioItem value="5">
                        отсутствует
                    </DropdownMenuRadioItem>
                    <Separator />

                    <DropdownMenuRadioItem value="6">
                        на удаленной
                    </DropdownMenuRadioItem>
                    <Separator />

                    <DropdownMenuRadioItem value="7">
                        опаздывающие
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
