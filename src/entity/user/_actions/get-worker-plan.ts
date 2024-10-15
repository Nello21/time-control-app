import { timeGet } from "@/shared/services/transport";
import { WorkerPlanResponse } from "../_domain/types";
import { getUserTimeData } from "./get-user-time-data";

const today = new Date();
const formattedDate = today.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
});

export const getWorkerPlan = async ({ id }: { id: string }) => {
    const user = await getUserTimeData({ tabnum: id });

    if (!user) {
        throw new Error(
            `No valid user data found for worker with tabnum ${id}`
        );
    }

    const response = await timeGet<WorkerPlanResponse>(
        `time/works?startdate=${formattedDate}&enddate=${formattedDate}&person_list=${user[0].UID}`
    ).json();

    return { data: response.data, profession: user[0].DOLJNAME };
};
