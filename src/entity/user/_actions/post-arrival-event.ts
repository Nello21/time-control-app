import { timePost } from "@/shared/services/transport";
import { ArrivalResponse } from "../_domain/types";

export const postArrivalEvent = async ({
    uid,
    inouttype,
}: {
    inouttype: number;
    uid: string | undefined;
}) => {
    const response = await timePost<ArrivalResponse>(
        `fact_events/add?uid=${uid}&inouttype=${inouttype}`
    ).json();

    return response;
};
