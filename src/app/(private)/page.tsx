import { DepartmentsList } from "@/features/departments-list/ui/departments-list";

export default function Departments() {
    return (
        <div className="w-full space-y-6">
            <span className="text-[25px]/[24.88px] font-semibold">
                Отделы компании
            </span>
            <DepartmentsList />
        </div>
    );
}
