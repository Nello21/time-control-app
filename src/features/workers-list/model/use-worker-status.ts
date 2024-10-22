import { useEffect, useState } from "react";
import { dayTypeStyles } from "./elements";
import {
    useIvalidateWorkerAllInfo,
    useWorkerAllInfo,
} from "@/entity/user/_queries";
import { ValueOf } from "next/dist/shared/lib/constants";
import { deleteWorkerDelay } from "@/entity/user/_actions/delete-worker-delay";

type dayTypeIndex = keyof typeof dayTypeStyles;
type DayTypeStyles = typeof dayTypeStyles;
type DayTypeStylesElement = ValueOf<DayTypeStyles>;

export const useWorkerStatus = ({ tabnum }: { tabnum: string }) => {
    const { data, isError, isLoading } = useWorkerAllInfo({ id: tabnum });

    const [dayType, setDayType] = useState("all");

    const [styles, setStyles] = useState<DayTypeStylesElement | null>(null);

    const invalidateWorkerPlan = useIvalidateWorkerAllInfo();

    useEffect(() => {
        const updateWorkerStatus = async () => {
            if (data?.data) {
                const plan = data.data.plan;
                const interval = data.data.interval;
                const firstInterval = interval[0];
                const lastInterval = interval[interval.length - 1];
                const delay = data?.data?.delay;

                let daytype = data.data.plan[0]?.DAYTYPE || "all";

                if (plan.length === 0 && interval.length === 0) {
                    daytype = "5";
                } else if (delay) {
                    if (
                        data.user &&
                        plan &&
                        interval &&
                        (plan?.length > 0 || interval?.length > 0)
                    ) {
                        await deleteWorkerDelay({ id: tabnum });
                        await invalidateWorkerPlan({ id: tabnum });
                    }
                    daytype = "7"; // опоздание
                } else if (firstInterval && lastInterval.ISGO === "0") {
                    daytype = "5"; // Отсутствует
                }
                if (
                    firstInterval &&
                    lastInterval.ADDTYPE === "1" &&
                    lastInterval.ISGO === "1"
                ) {
                    daytype = "6"; // Удаленка
                }

                setDayType(daytype);
                setStyles(dayTypeStyles[daytype as dayTypeIndex] || null);
            }
        };

        updateWorkerStatus();
    }, [data]);

    return { data, dayType, isError, isLoading, styles };
};
