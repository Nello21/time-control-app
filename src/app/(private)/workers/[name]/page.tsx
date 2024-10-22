"use client";

import { WorkersList } from "@/features/workers-list/ui/workers-list";
import { useParams, useRouter } from "next/navigation";

export default function Workers() {
    const params = useParams<{ name: string }>();
    const router = useRouter();

    return (
        <div className="w-full max-w-[768px] space-y-6">
            <WorkersList
                department={params.name}
                onBack={() => router.push("/")}
            />
        </div>
    );
}
