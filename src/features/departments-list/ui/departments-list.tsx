"use client";

import { useGetDepartments } from "@/entity/department/departments";
import { cn } from "@/shared/lib/utils";
import { Skeleton } from "@/shared/ui/skeleton";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const DepartmentsList = () => {
    const { data, isLoading, isError } = useGetDepartments();

    if (isLoading) {
        return (
            <div className="flex flex-col gap-2">
                {Array.from({ length: 11 }).map((_, i) => {
                    return (
                        <div
                            className="h-[40px] max-w-[750px] w-full px-4 bg-white flex flex-row items-center justify-between gap-4 rounded-[10px]"
                            key={i}
                        >
                            <span className="text-sm/[14px] font-medium">
                                <Skeleton className="w-[300px] h-6" />
                            </span>
                        </div>
                    );
                })}
            </div>
        );
    }

    if (isError) {
        return <div>Ошибка загрузки данных</div>;
    }

    return (
        <>
            <span className={cn("text-[25px]/[24.88px] font-semibold")}>
                Отделы компании
            </span>
            <div className="flex flex-col gap-2">
                {data?.map((department) => {
                    return (
                        <Link
                            key={department.id}
                            href={`/workers/${department.name}`}
                            className="h-[40px] max-w-[750px] w-full px-4 bg-white flex flex-row items-center justify-between gap-4 rounded-[10px]"
                        >
                            <span className="text-sm/[14px] font-medium">
                                {department.name}
                            </span>
                            <ChevronRight size={20} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};
