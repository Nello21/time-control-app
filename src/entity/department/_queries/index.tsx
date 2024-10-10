import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "../_actions/getDepartments";

const departmentsKey = "departments";

export function useGetDepartments() {
    return useQuery({
        queryKey: [departmentsKey],
        queryFn: () => getDepartments(),
    });
}
