"use client";

import { ReactNode } from "react";
import { useAppSession } from "@/entity/user/_queries";
import { LoginForm } from "../../features/auth/_ui/form-login";
import { createStrictContext, useStrictContext } from "@/shared/lib/context";
import { User } from "@/entity/user/_domain/types";
import { useRouter } from "next/navigation";
import { routes } from "@/shared/config/routes";

type SessionContextType = { session: User };

export const sessionContext = createStrictContext<SessionContextType>();
export const useSession = () => useStrictContext(sessionContext);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
    const session = useAppSession();
    const router = useRouter();

    if (session.isLoading) {
        return;
    }
    if (!session.data) {
        router.replace(routes.LOGIN);
        return;
    }

    return (
        <sessionContext.Provider value={{ session: session.data }}>
            {children}
        </sessionContext.Provider>
    );
};
