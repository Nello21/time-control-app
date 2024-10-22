import { useProfileAllInfo } from "@/entity/user/_queries";
import { useEffect, useState } from "react";
import { WorksPlan } from "@/entity/user/_domain/types";

export const useUserStatus = ({ tabnum }: { tabnum: string }) => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const now = new Date();

    const startOfMonth = date
        ? new Date(date.getFullYear(), date.getMonth(), 1)
        : new Date();

    let endOfMonth;

    if (
        date?.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth()
    ) {
        endOfMonth = now;
    } else {
        endOfMonth = date
            ? new Date(date.getFullYear(), date.getMonth() + 1, 0)
            : new Date();
    }

    const formattedStartDate = startOfMonth.toLocaleDateString("ru-RU");
    const formattedEndDate = endOfMonth.toLocaleDateString("ru-RU");

    const { data, isError, isLoading } = useProfileAllInfo({
        id: tabnum,
        date: { start: formattedStartDate, end: formattedEndDate },
    });

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

            data.data.plan.forEach((day: WorksPlan) => {
                const { WORKDATE, DAYTYPE } = day;

                const formattedDate = new Date(
                    WORKDATE.split(".").reverse().join("-")
                );

                if (newModifiers[DAYTYPE]) {
                    newModifiers[DAYTYPE].push(formattedDate);
                }
            });

            setModifiers(newModifiers);
        }
    }, [data]);

    return {
        data,
        profileDate: { start: formattedStartDate, end: formattedEndDate },
        date,
        setDate,
        isError,
        isLoading,
        modifiers,
    };
};
