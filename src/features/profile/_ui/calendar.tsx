"use client";

import { Calendar } from "@/shared/ui/calendar";
import * as React from "react";
import { modifiersClassNames } from "../_model/modifiers";

export function CalendarWidget({
    selected,
    onSelect,
    modifiers,
}: {
    selected: Date | undefined;
    onSelect: React.Dispatch<React.SetStateAction<Date | undefined>>;
    modifiers: Record<string, Date[]>;
}) {
    return (
        <div className="w-full">
            <Calendar
                mode="single"
                selected={selected}
                onMonthChange={onSelect}
                className="rounded-[10px] bg-white shadow-md"
                modifiers={modifiers}
                modifiersClassNames={modifiersClassNames}
                toDate={new Date()}
            />
        </div>
    );
}
