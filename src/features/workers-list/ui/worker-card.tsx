import { Card } from "@/shared/ui/card";
import { useWorkerStatus } from "../model/use-worker-status";
import { Skeleton } from "@/shared/ui/skeleton";
import { useWorkerFilterParams } from "../model/use-workers-filter-params";

export const WorkerCard = ({
    name,
    tabnum,
}: {
    name: string;
    tabnum: string;
}) => {
    const { data, dayType, isError, isLoading, styles } = useWorkerStatus({
        tabnum,
    });

    const { dayTypeParams } = useWorkerFilterParams();

    if (dayTypeParams !== "all" && dayType !== dayTypeParams) {
        return null;
    }

    if (data?.isLocked === "1") {
        return null;
    }

    if (isError) return;

    if (isLoading) {
        return (
            <Card className="flex flex-col justify-between px-4 py-2 gap-4 max-w-[380px] w-full bg-white border-0">
                <div className="flex flex-row justify-between gap-2">
                    <Skeleton className="w-[190px] h-5" />
                    <Skeleton className="w-[60px] h-3" />
                </div>

                <Skeleton className="w-[126px] h-[30px]" />
            </Card>
        );
    }

    return (
        <Card className="flex flex-col justify-between px-4 py-2 gap-4 w-full max-w-[400px] sm:max-w-[380px] bg-white border-0">
            <div className="flex flex-row justify-between gap-3 max-sm:flex-col">
                <span>{name}</span>
                <span className="py-1 text-xs/3 font-normal text-gray-dark truncate">
                    {data?.user.DOLJNAME}
                </span>
            </div>
            {typeof styles?.element === "function"
                ? styles.element({ delay: data?.data?.delay?.delay })
                : styles?.element}
        </Card>
    );
};
