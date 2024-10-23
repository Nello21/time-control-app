"use client";

import { Calendar } from "@/shared/ui/calendar";
import { modifiersClassNames } from "../_model/modifiers";
import { useRef } from "react";
import { useCalendarTooltip } from "../_model/use-calendar-tooltip";

export function CalendarWidget({
    id,
    selected,
    onSelect,
    modifiers,
}: {
    id: string;
    selected: Date | undefined;
    onSelect: React.Dispatch<React.SetStateAction<Date | undefined>>;
    modifiers: Record<string, Date[]>;
}) {
    const calendarRef = useRef<HTMLDivElement>(null);
    const { tooltip, opacity, handleDayMouseClick } = useCalendarTooltip({
        id: id,
        ref: calendarRef,
    });

    return (
        <div className="w-full relative" ref={calendarRef}>
            <Calendar
                mode="single"
                selected={selected}
                onMonthChange={onSelect}
                onDayClick={handleDayMouseClick}
                className="rounded-[10px] bg-white shadow-md"
                modifiers={modifiers}
                modifiersClassNames={modifiersClassNames}
                toDate={new Date()}
            />

            {tooltip && (
                <div
                    className={`absolute px-3 py-2 rounded-md z-20 drop-shadow-2xl ${tooltip.bg} ${opacity} transition-opacity select-none pointer-events-none`}
                    style={{
                        left: tooltip.x,
                        top: tooltip.y,
                    }}
                >
                    <span className="text-base font-medium text-white">
                        {tooltip.text}
                    </span>
                    <div
                        className={`absolute w-[14px] h-[14px] ${tooltip.bg} transform rotate-45 top-[32px] left-[25px] z-20`}
                    ></div>
                </div>
            )}
        </div>
    );
}
