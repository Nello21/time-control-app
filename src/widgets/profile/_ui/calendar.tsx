"use client";

import { Calendar } from "@/shared/ui/calendar";
import * as React from "react";

export function CalendarWidget() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <div className="w-full">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-[10px] bg-white shadow-md"
            />
        </div>
    );
}
