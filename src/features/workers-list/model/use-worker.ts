import { useUserUID, useWorkerPlan } from "@/entity/user/_queries";
import { useEffect, useState } from "react";

export const useWorker = ({ tabnum }: { tabnum: string }) => {
    const [uid, setUID] = useState<string | null>(null);
    const [profession, setProfession] = useState<string>("");

    const {
        data: UID_data,
        isError: isUIDError,
        isLoading: isUIDLoading,
    } = useUserUID({ tabnum });

    const userData = UID_data?.data;

    const {
        data: WorkPlan,
        isError: isPlanError,
        isLoading: isPlanLoading,
    } = useWorkerPlan({ uid });

    const planData = WorkPlan?.data;

    useEffect(() => {
        if (userData) {
            setUID(userData.UID);
            setProfession(userData.profession);
        }
    }, [userData]);

    const isLoading = isUIDLoading || isPlanLoading;
    const isError = isUIDError || isPlanError;

    return { planData, uid, profession, isError, isLoading };
};
