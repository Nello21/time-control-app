"use client";

import { WorkersList } from "@/features/workers-list/ui/workers-list";
import { useParams, useRouter } from "next/navigation";

export default function Workers() {
    const params = useParams<{ name: string }>();
    const router = useRouter();

    return (
        <div className="relative w-full min-h-[600px] max-w-[768px] space-y-6">
            <WorkersList
                department={params.name}
                onBack={() => router.push("/")}
                onRefresh={() => router.refresh()}
            />
        </div>
    );
}
