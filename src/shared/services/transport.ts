import ky from "ky";

const isServer = typeof window === "undefined";

export const baseTransport = ky.create({
    prefixUrl: isServer ? process.env.BASE_URL : "/api/1c",
    timeout: 3000,
    retry: { limit: 2 },
});

export const TimeTransport = ky.create({
    prefixUrl: isServer ? process.env.TIME_URL : "/api/time-control",
    timeout: 3000,
    retry: { limit: 2 },
    headers: {
        Authorization: `Basic ${btoa("123:123")}`,
    },
});

export const baseGet = baseTransport.get;
export const basePost = baseTransport.post;
export const timeGet = TimeTransport.get;
export const timePost = TimeTransport.post;
