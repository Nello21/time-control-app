"use server";

import { serverAction } from "@/shared/lib/server-action";
import { get } from "@/shared/services/transport";
import { User, UserResponse } from "../_domain/types";

const decodeUnicode = (str: string) => decodeURIComponent(str);

export const getUsers = serverAction(async () => {
    const response = await get<UserResponse>(`persons`).json();

    const decodedData = response.data.map((person: User) => ({
        ...person,
        FIRSTNAME: decodeURIComponent(person.FIRSTNAME),
        SNAME: decodeURIComponent(person.SNAME),
        MIDNAME: decodeURIComponent(person.MIDNAME),
        FULLNAME: decodeURIComponent(person.FULLNAME),
        DOLJNAME: decodeURIComponent(person.DOLJNAME),
        DEPNAME: decodeURIComponent(person.DEPNAME),
    }));

    return decodedData;
});
