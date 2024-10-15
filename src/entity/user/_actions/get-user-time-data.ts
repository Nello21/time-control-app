import { timeGet } from "@/shared/services/transport";
import { TimeControlUserResponse } from "../_domain/types";

export const getUserTimeData = async ({ tabnum }: { tabnum: string }) => {
    const response = await timeGet<TimeControlUserResponse>(
        `persons?tabnum=${tabnum}`
    ).json();

    return response.data;
};
