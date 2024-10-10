"use server";
import { cookie } from "@/shared/lib/cookie";
import { CustomError, ERROR_CODES } from "@/shared/lib/error";
import { serverAction } from "@/shared/lib/server-action";
import { useGetUsers } from "../user";

const COOKIE_SESSION_KEY = "SESSION";

export const getServerSession = serverAction(async (): Promise<{} | null> => {
    const sessionCookie = cookie.get({ key: COOKIE_SESSION_KEY });

    console.log("cookie", sessionCookie);

    if (!sessionCookie) {
        return null;
    }

    const session = JSON.parse(sessionCookie.value);
    const phone = session.phone;

    const user = useGetUsers();
    const userId = user.data?.data;

    if (!user) {
        throw new CustomError({
            message: "Пользователь не найден",
            code: ERROR_CODES.UNAUTHORIZED,
        });
    }

    console.log("getSession", { user });

    return { user };
});

export const setSession = serverAction(
    async ({ id, phone }: { id: number; phone: string }) => {
        cookie.set({
            key: COOKIE_SESSION_KEY,
            value: JSON.stringify({ id, phone }),
            options: {
                httpOnly: true,
                maxAge: 24 * 60 * 60,
            },
        });
    }
);

export const removeSession = serverAction(async () => {
    cookie.remove({ key: COOKIE_SESSION_KEY });
});

export const getSessionStrictServer = async () => {
    const session = await getServerSession();
    if (session === null) {
        throw new CustomError({
            message: "Сессия не установлена",
            code: ERROR_CODES.UNAUTHORIZED,
        });
    }
    return session;
};
