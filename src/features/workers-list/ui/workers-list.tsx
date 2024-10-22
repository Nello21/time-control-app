import { Button } from "@/shared/ui/button";
import { WorkerCard } from "./worker-card";
import { useWorkers } from "@/entity/user/_queries";
import { WorkersDropdown } from "./workers-dropdown";

export const WorkersList = ({
    department,
    onBack,
}: {
    onBack: () => void;
    department: string | null;
}) => {
    const { data, isError, isLoading } = useWorkers({ department });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading users data.</div>;
    }

    return (
        <>
            <div className="flex flex-row justify-between gap-4">
                <span className="text-[25px]/[24.88px] font-semibold">
                    {department && decodeURIComponent(department)}
                </span>
                <WorkersDropdown />
            </div>
            <div className="flex flex-col gap-5 items-center sm:items-start">
                <Button
                    className="max-w-[200px] bg-blue-dark text-white"
                    onClick={onBack}
                >
                    Назад к отделам
                </Button>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
