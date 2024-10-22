import { timeGet } from "@/shared/services/transport";
import { TimeControlUser, WorkerIntervalResponse } from "../_domain/types";

export const getInterval = async ({ user }: { user: TimeControlUser[] }) => {
    const today = new Date();
    const todayDate = today.toLocaleDateString("ru-RU");

    const interval = await timeGet<WorkerIntervalResponse>(
        `time/intervals?startdate=${todayDate}&enddate=${todayDate}&uid=${user[0].UID}`
    ).json();

    return interval.data;
};
