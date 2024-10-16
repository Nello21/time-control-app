"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSession, logout } from "../_actions/session";
import { queryClient } from "@/shared/lib/query-client";
import { getWorkers } from "../_actions/get-workers";
import { getWorkerPlan } from "../_actions/get-worker-plan";
import { getProfilePlan } from "../_actions/get-profile-plan";

const sessionKey = "SESSION";
const workerKey = "user";
const profileKey = "user";
const worksPlanKey = "worksPlan";

export function useWorkers({ department }: { department: string | null }) {
    return useQuery({
        queryKey: [workerKey, department],
        queryFn: () => getWorkers({ department }),
    });
}

export function useWorkerPlan({ id }: { id: string }) {
    return useQuery({
        queryKey: [worksPlanKey, id],
        queryFn: () => getWorkerPlan({ id }),
        retryDelay: 250,
        retry: 1,
    });
}
export function useProfilePlan({
    id,
    date,
}: {
    id: string;
    date: { start: String; end: String };
}) {
    return useQuery({
        queryKey: [profileKey, id, date],
        queryFn: () => getProfilePlan({ id, date }),
        retryDelay: 250,
        retry: 2,
    });
}

export function useAppSession() {
    return useQuery({
        queryKey: [sessionKey],

        queryFn: () => getSession(),

        retry: 0,

        staleTime: 15 * 60 * 1000,

        refetchInterval: 15 * 60 * 1000,
    });
}

export function useLogout() {
    return useMutation({
        mutationFn: logout,

        onSuccess: () => {
            queryClient.resetQueries();
        },
    });
}

export function useResetSession() {
    const queryClient = useQueryClient();
    return () => queryClient.removeQueries();
}

export function useInvalidateSession() {
    const queryClient = useQueryClient();
    return () =>
        queryClient.invalidateQueries({
            queryKey: [sessionKey],
        });
}
