"use client";

import { Calendar } from "@/shared/ui/calendar";
import * as React from "react";

type AttendanceRecord = {
    date: Date;
    present: boolean;
};

export function CalendarWidget() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    const attendanceData: AttendanceRecord[] = [
        { date: new Date(2024, 9, 2), present: true },
        { date: new Date(2024, 9, 5), present: false },
        { date: new Date(2024, 9, 10), present: true },
        // Другие даты
    ];

    const modifiers = {
        present: attendanceData
            .filter((record) => record.present)
            .map((record) => record.date),
        absent: attendanceData
            .filter((record) => !record.present)
            .map((record) => record.date),
    };

    return (
        <div className="w-full">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-[10px] bg-white shadow-md"
                modifiers={modifiers}
                modifiersClassNames={{
                    present: "bg-green-light rounded-2xl",
                    absent: "bg-red-light rounded-2xl",
                }}
                toDate={new Date()}
            />
        </div>
    );
}
