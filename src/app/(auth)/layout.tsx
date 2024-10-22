"use client";

import { useAppSession } from "@/entity/user/session";
import { routes } from "@/shared/config/routes";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    const session = useAppSession();
    const router = useRouter();

    if (session.isLoading) {
        return;
    }
    if (session.data) {
        router.replace(routes.MAIN);
        return;
    }
    return <main className="py-5">{children}</main>;
}
