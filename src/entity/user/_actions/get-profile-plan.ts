import { timeGet } from "@/shared/services/transport";
import { WorkerPlanResponse } from "../_domain/types";
import { getWorkerTimeData } from "./get-worker-time-data";

export const getProfilePlan = async ({
    id,
    date,
}: {
    id: string;
    date: { start: String; end: String };
}) => {
    const user = await getWorkerTimeData({ tabnum: id });

    if (!user) {
        throw new Error(
            `No valid user data found for worker with tabnum ${id}`
        );
    }

    console.log(date);

    const response = await timeGet<WorkerPlanResponse>(
        `time/works?startdate=${date.start}&enddate=${date.end}&person_list=${user[0].UID}`
    ).json();

    return { data: response.data, profession: user[0].DOLJNAME };
};
