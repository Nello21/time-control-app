"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { getSession, logout } from "../_actions/session";
import { getWorkers } from "../_actions/get-workers";
import { getWorkerInfo } from "../_actions/get-worker-all-info";
import { getProfileInfo } from "../_actions/get-profile-all-info";
import { queryClient } from "@/shared/lib/query-client";

const sessionKey = "SESSION";
const workersKey = "workers";
const profileInfoKey = "profileInfo";
const workerInfoKey = "workerInfo";

export function useWorkers({ department }: { department: string | null }) {
    return useQuery({
        queryKey: [workersKey, department],
        queryFn: () => getWorkers({ department }),
    });
}

export function useWorkerAllInfo({ id }: { id: string }) {
    return useQuery({
        queryKey: [workerInfoKey, id],
        queryFn: () => getWorkerInfo({ id }),
        retry: 0,
        staleTime: 1000 * 60,
        refetchInterval: 1000 * 60 * 5,
    });
}

export function useIvalidateWorkerAllInfo() {
    return ({ id }: { id: string }) =>
        queryClient.invalidateQueries({
            queryKey: [workerInfoKey, id],
        });
}

export function useProfileAllInfo({
    id,
    date,
}: {
    id: string;
    date: { start: string; end: string };
}) {
    return useQuery({
        queryKey: [profileInfoKey, id, date],
        queryFn: () => getProfileInfo({ id, date }),
        retryDelay: 250,
        retry: 1,
    });
}

export function useIvalidateProfileAllInfo() {
    return ({
        id,
        date,
    }: {
        id: string;
        date: { start: string; end: string };
    }) =>
        queryClient.invalidateQueries({
            queryKey: [profileInfoKey, id, date],
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
    const mutation = useMutation({
        mutationFn: logout,

        onSuccess: () => {
            queryClient.resetQueries();
        },
    });

    return {
        logout: mutation.mutate,
        isPending: mutation.isPending,
    };
}

export function useResetSession() {
    return () => queryClient.removeQueries();
}

export function useInvalidateSession() {
    return () =>
        queryClient.invalidateQueries({
            queryKey: [sessionKey],
        });
}
