import { Button } from "@/shared/ui/button";
import { WorkerCard } from "./worker-card";
import { useWorkers } from "@/entity/user/_queries";
import { WorkersDropdown } from "./workers-dropdown";
import { Spinner } from "@/shared/ui/spinner";
import { RotateCw } from "lucide-react";

export const WorkersList = ({
    department,
    onBack,
    onRefresh,
}: {
    onBack: () => void;
    onRefresh: () => void;
    department: string | null;
}) => {
    const { data, isError, isLoading } = useWorkers({ department });

    if (isLoading) {
        return (
            <div className="absolute inset-0 flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    if (isError) {
        return <div>Ошибка загрузки данных</div>;
    }

    return (
        <>
            <div className="flex flex-row justify-between gap-4">
                <span className="text-xl sm:text-[25px]/[24.88px] font-semibold">
                    {department && decodeURIComponent(department)}
                </span>
                <WorkersDropdown />
            </div>
            <div className="flex flex-col gap-5 items-center sm:items-start">
                <div className="w-full flex items-center justify-between gap-2">
                    <Button
                        className="max-w-[200px] bg-blue-dark text-white"
                        onClick={onBack}
                    >
                        Назад к отделам
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="text-black rounded-full hover:animate-spin"
                        onClick={onRefresh}
                    >
                        <RotateCw />
                    </Button>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {data?.map((user) => {
                        const [lastName, firstName] = user.name.split(" ");

                        const formattedName = `${lastName} ${firstName}`;
                        return (
                            <WorkerCard
                                key={user.code}
                                tabnum={user.code}
                                name={formattedName}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
