import { baseGet } from "@/shared/services/transport";
import { Employee } from "../_domain/types";

export const getWorkers = async ({
    department,
}: {
    department: string | null;
}) => {
    const response = await baseGet<Employee[]>(
        `workers-list/${department}`
    ).json();

    return response;
};
