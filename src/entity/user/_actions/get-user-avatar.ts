import { timeGet } from "@/shared/services/transport";

export const getWorkerAvatar = async ({ tabnum }: { tabnum: string }) => {
    const response = await timeGet(`persons/foto/get?tabnum=${tabnum}`, {
        headers: { "content-type": "image/jpeg" },
    });

    const blob = await response.blob();

    const avatarUrl = URL.createObjectURL(blob);

    return avatarUrl;
};
