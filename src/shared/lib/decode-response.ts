export const decodeResponse = <T>(data: T[]): T[] => {
    return data.map((item) => {
        const decodedItem: T = {} as T;

        for (const key in item) {
            const value = item[key];
            // Декодируем, если свойство строка
            if (typeof value === "string") {
                // проверка на кодировку
                decodedItem[key] = decodeURIComponent(value) as T[Extract<
                    keyof T,
                    string
                >];
            } else {
                // Оставляем неизмененным, если не строка
                decodedItem[key] = value;
            }
        }

        return decodedItem;
    });
};
