"use client";

import { WorkersList } from "@/features/workers-list/ui/workers-list";
import { useParams, useRouter } from "next/navigation";

export default function Workers() {
    const params = useParams<{ name: string }>();
    const router = useRouter();

    return (
        <div className="w-full space-y-6">
            <span className="text-[25px]/[24.88px] font-semibold">
                Отделы компании
            </span>
            <WorkersList
                department={params.name}
                onBack={() => router.back()}
            />
        </div>
    );
}
