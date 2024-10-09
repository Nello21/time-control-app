"use client";

import { routes } from "@/shared/config/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getServerSession, removeSession } from "../_actions/session";
import { getUsers } from "../_actions/getUsers";

const sessionKey = "session";
const userKey = "user";

export function useGetUser() {
    return useQuery({
        queryKey: [userKey],
        queryFn: () => getUsers(),
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
