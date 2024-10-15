import { baseGet } from "@/shared/services/transport";
import { User } from "../_domain/types";

export const getUsers = async ({ UID }: { UID: string }) => {
    const response = await baseGet<User[]>(`workers-list/${UID}`).json();

    return response;
};
