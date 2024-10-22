import { timeGet } from "@/shared/services/transport";
import { WorkerPlanResponse } from "../_domain/types";
import { getWorkerTimeData } from "./get-worker-time-data";
import { getInterval } from "./get-interval";
import { getWorkerDelay } from "./get-worker-delay";

const today = new Date();
const formattedDate = today.toLocaleDateString("ru-RU");

export const getWorkerInfo = async ({ id }: { id: string }) => {
    const user = await getWorkerTimeData({ tabnum: id });

    const interval = await getInterval({ user });

    const delay = await getWorkerDelay({ id });

    if (!user) {
        throw new Error(
            `No valid user data found for worker with tabnum ${id}`
        );
    }

    const plan = await timeGet<WorkerPlanResponse>(
        `time/works?startdate=${formattedDate}&enddate=${formattedDate}&person_list=${user[0].UID}`
    ).json();

    return {
        data: { plan: plan.data, interval: interval, delay: delay },
        user: user[0],
        isLocked: user[0].ISLOCKED,
    };
};
