"use server";

import { cookies } from "next/headers";

export const getCookie = async ({ name }: { name: string }) => {
    return cookies().get(name)?.value;
};

export const deleteCookie = async ({ name }: { name: string }) => {
    cookies().delete(name);
};
