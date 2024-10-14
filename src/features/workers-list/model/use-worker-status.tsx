import { CheckCircle } from "lucide-react";
import { useWorker } from "./use-worker";
import { useEffect, useState } from "react";

const dayTypeStyles = {
    "0": {
        bgClass: "bg-green-500",
        icon: <CheckCircle className="text-white" />,
    },
    "1": {
        bgClass: "bg-blue-500",
        icon: <CheckCircle className="text-white" />,
    },
    "2": {
        bgClass: "bg-red-500",
        icon: <CheckCircle className="text-white" />,
    },
};

type StringIndex = keyof typeof dayTypeStyles;

export const useWorkerStatus = ({ tabnum }: { tabnum: string }) => {
    const { planData, profession, isError, isLoading } = useWorker({ tabnum });

    const [styles, setStyles] = useState<{
        bgClass: string;
        icon: JSX.Element | null;
    } | null>(null);

    useEffect(() => {
        if (planData) {
            const dayType = planData[0]?.DAYTYPE;

            setStyles(dayTypeStyles[dayType as StringIndex]);
        }
    }, [planData]);

    return { planData, profession, isError, isLoading, styles };
};
