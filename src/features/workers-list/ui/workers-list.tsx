import { useUsers } from "@/entity/user/user";
import { Button } from "@/shared/ui/button";
import { WorkerCard } from "./worker-card";

export const WorkersList = ({
    department,
    onBack,
}: {
    onBack: () => void;
    department: string | null;
}) => {
    const { data, isError, isLoading } = useUsers({ department });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading users data.</div>;
    }

    return (
        <div className="flex flex-col gap-5">
            <Button
                className="max-w-[200px] bg-blue-dark text-white"
                onClick={onBack}
            >
                Назад к отделам
            </Button>
            <div className="grid grid-cols-2 gap-2">
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
    );
};
