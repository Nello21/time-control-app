import { timeGet } from "@/shared/services/transport";
import { WorkerPlanResponse } from "../_domain/types";
import { getWorkerTimeData } from "./get-worker-time-data";
import { getInterval } from "./get-interval";
import { getWorkerAvatar } from "./get-user-avatar";

export const getProfileInfo = async ({
    id,
    date,
}: {
    id: string;
    date: { start: String; end: String };
}) => {
    const user = await getWorkerTimeData({ tabnum: id });

    const avatar = await getWorkerAvatar({ tabnum: id });

    const interval = await getInterval({ user });

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
            user: user,
            avatar: avatar,
        },
    };
};
