"use client";

import { ReactNode } from "react";
import { useAppSession } from "@/entity/user/_queries";
import { LoginForm } from "../../features/auth/_ui/form-login";
import { createStrictContext, useStrictContext } from "@/shared/lib/context";
import { User } from "@/entity/user/_domain/types";

type SessionContextType = { session: User };

export const sessionContext = createStrictContext<SessionContextType>();
export const useSession = () => useStrictContext(sessionContext);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
    const session = useAppSession();

    if (session.isLoading) {
        return;
    }
    if (!session.data) {
        return (
            <LoginForm
                onLoginSuccess={() => console.log("Вход успешно выполнен")}
            />
        );
    }

    return (
        <sessionContext.Provider value={{ session: session.data }}>
            {children}
        </sessionContext.Provider>
    );
};
