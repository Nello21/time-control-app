import { timeGet } from "@/shared/services/transport";
import { WorkerPlanResponse } from "../_domain/types";
import { getWorkerTimeData } from "./get-worker-time-data";

export const getUserCalendarDayInfo = async ({
    id,
    today,
}: {
    id: string;
    today: string;
}) => {
    const user = await getWorkerTimeData({ tabnum: id });

    if (!user) {
        throw new Error(
            `No valid user data found for worker with tabnum ${id}`
        );
    }

    const plan = await timeGet<WorkerPlanResponse>(
        `time/works?startdate=${today}&enddate=${today}&person_list=${user[0].UID}`
    ).json();

    return plan.data;
};
