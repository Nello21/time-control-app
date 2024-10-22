import { getUserCalendarDayInfo } from "@/entity/user/_actions/get-user-calendar-day-info";
import { useEffect, useState } from "react";
import { ActiveModifiers } from "react-day-picker";
import { bgColorsByDay, textByDay } from "./modifiers";

export const useCalendarTooltip = ({
    id,
    ref,
}: {
    id: string;
    ref: React.RefObject<HTMLDivElement>;
}) => {
    const [opacity, setOpacity] = useState("opacity-0");

    const [tooltip, setTooltip] = useState<{
        x: number;
        y: number;
        bg: string;
        text: string;
    } | null>(null);

    const handleDayMouseClick = async (
        day: Date,
        activeModifiers: ActiveModifiers,
        e: React.MouseEvent
    ) => {
        const formattedDate = day.toLocaleDateString("ru-RU");
        const dayData = await getUserCalendarDayInfo({
            id,
            today: formattedDate,
        });
        if (dayData && dayData[0]) {
            const dayType = dayData[0].DAYTYPE;

            const bg = bgColorsByDay[dayType];
            const text = textByDay[dayType];

            const containerRect = ref.current?.getBoundingClientRect();

            const x = e.clientX - (containerRect?.left ?? 0) - 30;
            const y = e.clientY - (containerRect?.top ?? 0) - 60;

            setTooltip({ x: x, y: y, bg, text });
            setOpacity("opacity-100");
        }
    };

    useEffect(() => {
        if (tooltip) {
            const timer = setTimeout(() => {
                setOpacity("opacity-0");
            }, 2250);

            return () => clearTimeout(timer);
        }
    }, [tooltip]);

    return { tooltip, opacity, handleDayMouseClick };
};
