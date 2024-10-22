"use client";
import { queryClient } from "@/shared/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export function AppProvider({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
