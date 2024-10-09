import ky from "ky";

const API_BASE_URL = "http://213.177.102.118:444/api";

export const baseTransport = ky.create({
    prefixUrl: API_BASE_URL,
    timeout: 3000,
    retry: { limit: 2 },
    headers: {
        Authorization: `Basic ${btoa("123:123")}`,
    },
});

export const get = baseTransport.get;
export const post = baseTransport.post;
