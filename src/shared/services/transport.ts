import ky from "ky";

const isServer = typeof window === "undefined";

export const baseService = ky.create({
    prefixUrl: isServer ? process.env.BASE_URL : "/api/1c",
    timeout: 3000,
    retry: { limit: 2 },
});

export const timeService = ky.create({
    prefixUrl: isServer ? process.env.TIME_URL : "/api/time-control",
    timeout: 3000,
    retry: { limit: 2 },
    headers: {
        Authorization: `Basic ${btoa("123:123")}`,
    },
});

export const authService = ky.create({
    prefixUrl: isServer ? process.env.AUTH_URL : "/api/auth-service",
    timeout: 3000,
    retry: { limit: 2 },
});

export const baseGet = baseService.get;
export const basePost = baseService.post;

export const timeGet = timeService.get;
export const timePost = timeService.post;

export const authGet = authService.get;
