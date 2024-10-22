import { timeGet } from "@/shared/services/transport";
import { WorkerPlanResponse } from "../_domain/types";
import { getWorkerTimeData } from "./get-worker-time-data";
import { getInterval } from "./get-interval";
import { getWorkerAvatar } from "./get-user-avatar";
import { getWorkerDelay } from "./get-worker-delay";

export const getProfileInfo = async ({
    id,
    date,
}: {
    id: string;
    date: { start: string; end: string };
}) => {
    const user = await getWorkerTimeData({ tabnum: id });

    const avatar = await getWorkerAvatar({ tabnum: id });

    const interval = await getInterval({ user });

    const delay = await getWorkerDelay({ id });

    if (!user) {
        throw new Error(
            `No valid user data found for worker with tabnum ${id}`
        );
    }

    const plan = await timeGet<WorkerPlanResponse>(
        `time/works?startdate=${date.start}&enddate=${date.end}&person_list=${user[0].UID}`
    ).json();

    return {
        data: {
            plan: plan.data,
            interval: interval,
            delay: delay,
            user: user,
            avatar: avatar,
        },
    };
};
