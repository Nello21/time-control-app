"use server";

import { serverAction } from "@/shared/lib/server-action";
import { timeGet } from "@/shared/services/transport";
import { WorkerPlanResponse } from "../_domain/types";

const today = new Date();
const formattedDate = today.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
});

export const getWorkerPlan = serverAction(
    async ({ uid }: { uid: string | null }) => {
        const response = await timeGet<WorkerPlanResponse>(
            `time/works?startdate=${formattedDate}&enddate=${formattedDate}&person_list=${uid}`
        ).json();

        return response.data;
    }
);
