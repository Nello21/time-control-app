"use client";

import { useGetDepartments } from "@/entity/department/departments";
import { Container } from "@/shared/ui/container";
import { Profile } from "@/widgets/profile/_ui/profile";
import { ChevronRight } from "lucide-react";

export default function Home() {
    const { data, isLoading, isError } = useGetDepartments();
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading user data.</div>;
    }

    return (
        <div className="h-[calc(100dvh-80px)] px-4 sm:mt-[50px]">
            <Container className="px-0 flex flex-row items-center sm:items-start gap-6">
                <div className="w-full space-y-6">
                    <span className="text-[25px]/[24.88px] font-semibold">
                        Отделы компании
                    </span>
                    <div className="flex flex-col gap-2">
                        {data?.data &&
                            data.data.map((department) => {
                                return (
                                    <div
                                        key={department.id}
                                        className="h-[40px] max-w-[750px] w-full px-4 bg-white flex flex-row items-center justify-between gap-4 rounded-[10px]"
                                    >
                                        <span className="text-sm/[14px] font-medium">
                                            {department.name}
                                        </span>
                                        <ChevronRight size={20} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="w-[600px] hidden md:block">
                    <Profile />
                </div>
            </Container>
        </div>
    );
}
