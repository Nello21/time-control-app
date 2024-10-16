import { baseGet } from "@/shared/services/transport";
import { Employee } from "../_domain/types";

export const getWorker = async ({ UID }: { UID: string }) => {
    const response = await baseGet<Employee[]>(`workers-list/${UID}`).json();

    return response;
};
