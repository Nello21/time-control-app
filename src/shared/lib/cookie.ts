import { cookies } from "next/headers";

export const cookie = {
    set: function ({
        key,
        value,
        options,
    }: {
        key: string;
        value: string;
        options?: {
            httpOnly: boolean;
            maxAge: number;
        };
    }) {
        const cookie = cookies();
        return cookie.set(key, value, options);
    },
    get: function ({ key }: { key: string }) {
        const cookie = cookies();
        return cookie.get(key);
    },
    remove: function ({ key }: { key: string }) {
        const cookie = cookies();
        return cookie.delete(key);
    },
};
