import { baseGet } from "@/shared/services/transport";
import { Department } from "../_domain/types";

export const getDepartments = async () => {
    const response = await baseGet<Department[]>("get-list-departments").json();
    return response;
};
