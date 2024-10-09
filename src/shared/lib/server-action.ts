import { HTTPError } from "ky";
import { CustomError, ERROR_CODES } from "./error";

export function serverAction<T extends any[], U>(
    fn: (...args: T) => Promise<U>
): (
    ...args: T
) => Promise<{ error?: { message: string; code: string }; data?: U }> {
    return async (...args: T) => {
        try {
            return { data: await fn(...args) };
        } catch (error: unknown) {
            console.log(error);

            if (error instanceof HTTPError) {
                const errorJson = await error.response.json();
                return { error: errorJson };
            }

            return new CustomError({
                message: "Произошла ошибка",
                code: ERROR_CODES.UNKNOW_ERROR,
            }).toJson();
        }
    };
}
