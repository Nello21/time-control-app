"use client";

import { routes } from "@/shared/config/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getServerSession, removeSession } from "../_actions/session";
import { getUsers } from "../_actions/get-users";
import { getWorkerPlan } from "../_actions/get-worker-plan";
import { getUserUID } from "../_actions/get-user-time-control-id";

const sessionKey = "session";
const userKey = "user";
const TimeControlUserIdkey = "TimeControlUserId";
const worksPlanKey = "worksPlan";

export function useUsers({ department }: { department: string | null }) {
    return useQuery({
        queryKey: [userKey, department],
        queryFn: () => getUsers({ department }),
    });
}
export function useUserUID({ tabnum }: { tabnum: string }) {
    return useQuery({
        queryKey: [TimeControlUserIdkey, tabnum],
        queryFn: () => getUserUID({ tabnum }),
    });
}
export function useWorkerPlan({ uid }: { uid: string | null }) {
    return useQuery({
        queryKey: [worksPlanKey, uid],
        queryFn: () => getWorkerPlan({ uid }),
        enabled: !!uid,
    });
}

export function useSession() {
    return useQuery({
        queryKey: [sessionKey],
        queryFn: () => getServerSession(),
        retry: 0,
        staleTime: 5 * 60 * 1000,
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

export function useLogout() {
    const resetSession = useResetSession();
    const router = useRouter();

    const { isPending, mutate } = useMutation({
        mutationFn: removeSession,
        async onSuccess() {
            router.push(routes.MAIN);
            resetSession();
        },
    });

    return {
        logout: mutate,
        isPending,
    };
}
