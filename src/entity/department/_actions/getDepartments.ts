"use server";

import { serverAction } from "@/shared/lib/server-action";
import { get } from "@/shared/services/transport";

export const getDepartments = serverAction(async () => {
    const response = await get("department").json();
    return response;
});
