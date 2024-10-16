import { deleteCookie, getCookie } from "@/shared/lib/cookie";
import { authGet } from "@/shared/services/transport";
import { User } from "../_domain/types";
import { COOKIE_SESSION_NAME } from "@/shared/lib/consts";

export const getSession = async (): Promise<User> => {
    const sessionToken = await getCookie({ name: COOKIE_SESSION_NAME });

    const res = await authGet(`session/session-info`, {
        headers: {
            Authorization: `Bearer ${sessionToken}`,
        },
    });

    if (!res.ok) {
        throw new Error(
            `Ошибка при получении данных сессии: ${res.statusText}`
        );
    }

    return res.json();
};

export const logout = async () => {
    return deleteCookie({ name: COOKIE_SESSION_NAME });
};
