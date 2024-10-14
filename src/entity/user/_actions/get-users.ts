"use server";

import { serverAction } from "@/shared/lib/server-action";
import { baseGet } from "@/shared/services/transport";
import { User } from "../_domain/types";

export const getUsers = serverAction(
    async ({ department }: { department: string | null }) => {
        const response = await baseGet<User[]>(
            `workers-list/${department}`
        ).json();

        return response;
    }
);
