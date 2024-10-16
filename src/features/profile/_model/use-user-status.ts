import { useProfilePlan } from "@/entity/user/_queries";
import { useEffect, useState } from "react";
import { modifiersClassNames } from "./modifiers";
import { WorksPlan } from "@/entity/user/_domain/types";

export const useUserStatus = ({ tabnum }: { tabnum: string }) => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const currentDate = new Date();

    const startOfMonth = date
        ? new Date(date.getFullYear(), date.getMonth(), 1)
        : new Date();

    let endOfMonth;

    if (
        date?.getFullYear() === currentDate.getFullYear() &&
        date.getMonth() === currentDate.getMonth()
    ) {
        endOfMonth = currentDate;
    } else {
        endOfMonth = date
            ? new Date(date.getFullYear(), date.getMonth() + 1, 0)
            : new Date();
    }

    const formattedStartDate = startOfMonth.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    const formattedEndDate = endOfMonth.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const { data, isError, isLoading } = useProfilePlan({
        id: tabnum,
        date: { start: formattedStartDate, end: formattedEndDate },
    });

    console.log("intervals", formattedStartDate, formattedEndDate);
    console.log("data", data?.data);

    const [modifiers, setModifiers] = useState<Record<string, Date[]>>({});

    useEffect(() => {
        if (data) {
            const newModifiers: Record<string, Date[]> = {
                "0": [],
                "1": [],
                "2": [],
                "3": [],
                "4": [],
                "5": [],
            };

            data.data.forEach((day: WorksPlan) => {
                const { WORKDATE, DAYTYPE } = day;

                const formattedDate = new Date(WORKDATE);

                if (newModifiers[DAYTYPE]) {
                    newModifiers[DAYTYPE].push(formattedDate);
                }
            });

            setModifiers(newModifiers);
        }
    }, [data]);

    console.log("modifiers", modifiers);

    return { data, date, setDate, isError, isLoading, modifiers };
};
