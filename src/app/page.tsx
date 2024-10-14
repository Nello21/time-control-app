"use client";

import { Container } from "@/shared/ui/container";
import { DepartmentsList } from "@/features/departments-list/ui/departments-list";
import { Profile } from "@/features/profile/_ui/profile";
import { useDepartmentsListStore } from "@/features/departments-list/model/use-departments-list-store";
import { WorkersList } from "@/features/workers-list/ui/workers-list";

export default function Home() {
    const { selectedDepartment, setSelectedDepartment } =
        useDepartmentsListStore();

    return (
        <div className="h-auto px-4 sm:mt-[50px]">
            <Container className="px-0 flex flex-row items-center sm:items-start gap-6">
                <div className="w-full space-y-6">
                    <span className="text-[25px]/[24.88px] font-semibold">
                        {selectedDepartment ? (
                            <span className="flex flex-col gap-2">
                                <span>{selectedDepartment}</span>
                            </span>
                        ) : (
                            "Отделы компании"
                        )}
                    </span>
                    {selectedDepartment ? (
                        <WorkersList
                            department={selectedDepartment}
                            onBack={() => setSelectedDepartment(null)}
                        />
                    ) : (
                        <DepartmentsList
                            onSelectDepartment={setSelectedDepartment}
                        />
                    )}
                </div>
                <div className="w-[600px] hidden md:block">
                    <Profile />
                </div>
            </Container>
        </div>
    );
}
