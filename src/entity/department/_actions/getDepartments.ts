"use server";

import { serverAction } from "@/shared/lib/server-action";
import { baseGet } from "@/shared/services/transport";
import { Department } from "../_domain/types";

export const getDepartments = serverAction(async () => {
    const response = await baseGet<Department[]>("get-list-departments").json();

    return response;
});
