import { baseGet } from "@/shared/services/transport";
import { User } from "../_domain/types";

export const getUsers = async ({
    department,
}: {
    department: string | null;
}) => {
    const response = await baseGet<User[]>(`workers-list/${department}`).json();
    return response;
};
