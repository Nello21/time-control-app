"use server";

import { cookies } from "next/headers";

export const cookie = {
    set: async function ({
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
    get: async function ({ key }: { key: string }) {
        const cookie = cookies();
        return cookie.get(key);
    },
    remove: async function ({ key }: { key: string }) {
        const cookie = cookies();
        return cookie.delete(key);
    },
};
