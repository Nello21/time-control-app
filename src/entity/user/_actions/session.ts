import { cookie } from "@/shared/lib/cookie";

const COOKIE_SESSION_KEY = "SESSION";

export const getServerSession = async (): Promise<{} | null> => {
    const sessionCookie = await cookie.get({ key: COOKIE_SESSION_KEY });

    console.log("cookie", sessionCookie);

    if (!sessionCookie) {
        return null;
    }

    const session = JSON.parse(sessionCookie.value);

    const user = 1;

    console.log("getSession", { user });

    return { user };
};

export const setSession = async ({
    id,
    phone,
}: {
    id: number;
    phone: string;
}) => {
    cookie.set({
        key: COOKIE_SESSION_KEY,
        value: JSON.stringify({ id, phone }),
        options: {
            httpOnly: true,
            maxAge: 24 * 60 * 60,
        },
    });
};

export const removeSession = async () => {
    cookie.remove({ key: COOKIE_SESSION_KEY });
};
