import { useProfileAllInfo } from "@/entity/user/_queries";
import { useEffect, useState } from "react";
import { WorksPlan } from "@/entity/user/_domain/types";

export const useUserStatus = ({ tabnum }: { tabnum: string }) => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [modifiers, setModifiers] = useState<Record<string, Date[]>>({});

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

    const plan = data?.data.plan[0];
    const interval = data?.data.interval;
    const lastInterval = interval && interval[interval.length - 1];
    const delay = data?.data.delay?.delay;
    const user = data?.data.user[0];
    const avatar = data?.data.avatar;

    return {
        plan,
        lastInterval,
        delay,
        user,
        avatar,
        profileDate: { start: formattedStartDate, end: formattedEndDate },
        date,
        setDate,
        isError,
        isLoading,
        modifiers,
    };
};
