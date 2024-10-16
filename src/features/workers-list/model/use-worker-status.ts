import { useEffect, useState } from "react";
import { dayTypeStyles } from "./elements";
import { useWorkerPlan } from "@/entity/user/_queries";

type StringIndex = keyof typeof dayTypeStyles;

export const useWorkerStatus = ({ tabnum }: { tabnum: string }) => {
    const { data, isError, isLoading } = useWorkerPlan({ id: tabnum });

    const [styles, setStyles] = useState<{
        element: JSX.Element | null;
    } | null>(null);

    useEffect(() => {
        if (data) {
            const dayType = data.data[0]?.DAYTYPE;

            setStyles(dayTypeStyles[dayType as StringIndex]);
        }
    }, [data]);

    return { data, isError, isLoading, styles };
};
