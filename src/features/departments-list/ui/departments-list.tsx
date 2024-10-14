import { useGetDepartments } from "@/entity/department/departments";
import { ChevronRight } from "lucide-react";

export const DepartmentsList = ({
    onSelectDepartment,
}: {
    onSelectDepartment: (_value: string | null) => void;
}) => {
    const { data, isLoading, isError } = useGetDepartments();
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading user data.</div>;
    }

    return (
        <div className="flex flex-col gap-2">
            {data?.data &&
                data.data.map((department) => {
                    return (
                        <div
                            key={department.id}
                            className="h-[40px] max-w-[750px] w-full px-4 bg-white flex flex-row items-center justify-between gap-4 rounded-[10px]"
                            onClick={() => onSelectDepartment(department.name)}
                        >
                            <span className="text-sm/[14px] font-medium">
                                {department.name}
                            </span>
                            <ChevronRight size={20} />
                        </div>
                    );
                })}
        </div>
    );
};
