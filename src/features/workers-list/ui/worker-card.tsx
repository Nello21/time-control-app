import { Card } from "@/shared/ui/card";
import { useWorkerStatus } from "../model/use-worker-status";
import { cn } from "@/shared/lib/utils";

export const WorkerCard = ({
    name,
    tabnum,
}: {
    name: string;
    tabnum: string;
}) => {
    const { planData, profession, isError, isLoading, styles } =
        useWorkerStatus({ tabnum });

    console.log(planData);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading users data.</div>;
    }

    return (
        <Card className="w-[350px] px-4 py-2 bg-white border-0 flex flex-col gap-2">
            <div className="flex flex-row items-start justify-between">
                <span>{name}</span>
                <span className="text-xs/3 font-normal text-gray-dark text-wrap">
                    {profession}
                </span>
            </div>

            <div
                className={cn(
                    "flex items-center gap-2 w-[150px] rounded-md h-[30px] px-2 text-white",
                    styles?.bgClass
                )}
            >
                {styles?.icon}
                <span className="">{planData && planData[0].DAYTYPE}</span>
            </div>
        </Card>
    );
};
