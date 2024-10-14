"use server";

import { serverAction } from "@/shared/lib/server-action";
import { timeGet } from "@/shared/services/transport";
import { TimeControlUserResponse } from "../_domain/types";

export const getUserUID = serverAction(
    async ({ tabnum }: { tabnum: string }) => {
        const response = await timeGet<TimeControlUserResponse>(
            `persons?tabnum=${tabnum}`
        ).json();

        const UID = response.data[0].UID;
        const profession = response.data[0].DOLJNAME;

        return { UID, profession };
    }
);
