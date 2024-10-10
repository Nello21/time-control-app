import ky from "ky";

const BASE_URL = "http://192.168.0.223/worktruck/hs/wt_panel/";
const TIME_URL = "http://192.168.0.190:5053/api";

export const baseTransport = ky.create({
    prefixUrl: BASE_URL,
    timeout: 3000,
    retry: { limit: 2 },
});

export const TimeTransport = ky.create({
    prefixUrl: TIME_URL,
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
