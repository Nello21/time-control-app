import { timeGet } from "@/shared/services/transport";
import { TimeControlUserResponse } from "../../user/_domain/types";

export const getWorkerTimeData = async ({ tabnum }: { tabnum: string }) => {
    const response = await timeGet<TimeControlUserResponse>(
        `persons?tabnum=${tabnum}`
    ).json();

    return response.data;
};
