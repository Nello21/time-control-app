import { Card } from "@/shared/ui/card";
import { useWorkerStatus } from "../model/use-worker-status";
import { cn } from "@/shared/lib/utils";
import { Skeleton } from "@/shared/ui/skeleton";
import { UserRoundSearch } from "lucide-react";

export const WorkerCard = ({
    name,
    tabnum,
}: {
    name: string;
    tabnum: string;
}) => {
    const { data, isError, isLoading, styles } = useWorkerStatus({ tabnum });

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
        <Card className="flex flex-col justify-between px-4 py-2 gap-4 max-w-[380px] w-full bg-white border-0">
            <div className="flex flex-row justify-between gap-3 max-sm:flex-col">
                <span>{name}</span>
                <span className="py-1 text-xs/3 font-normal text-gray-dark truncate">
                    {data?.profession}
                </span>
            </div>

            {styles?.element}
            {isError && (
                <div className="flex justify-end">
                    <div className="flex items-center gap-2 w-fit h-fit px-2 py-1 rounded-md text-white bg-red-light">
                        <UserRoundSearch size={20} />
                        <span>не найден</span>
                    </div>
                </div>
            )}
        </Card>
    );
};
