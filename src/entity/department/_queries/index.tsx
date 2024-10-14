import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "../_actions/get-departments";

const departmentsKey = "departments";

export function useGetDepartments() {
    return useQuery({
        queryKey: [departmentsKey],
        queryFn: () => getDepartments(),
    });
}
