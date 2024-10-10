import { useGetUsers } from "@/entity/user/user";

export const WorkersList = ({ department }: { department: string }) => {
    const { data, isError, isLoading } = useGetUsers({ department });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading users data.</div>;
    }

    return (
        <div className="flex flex-col gap-2">
            {data?.data &&
                data.data.map((user) => {
                    return (
                        <div
                            key={user.code}
                            className="h-[40px] max-w-[750px] w-full px-4 bg-white flex flex-row items-center justify-between gap-4 rounded-[10px]"
                        >
                            <span className="text-sm/[14px] font-medium">
                                {user.name}
                            </span>
                        </div>
                    );
                })}
        </div>
    );
};
