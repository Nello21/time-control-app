"use server";

import { serverAction } from "@/shared/lib/server-action";
import { baseGet } from "@/shared/services/transport";
import { User } from "../_domain/types";

export const getUsers = serverAction(async ({ UID }: { UID: string }) => {
    const response = await baseGet<User[]>(`workers-list/${UID}`).json();

    return response;
});
