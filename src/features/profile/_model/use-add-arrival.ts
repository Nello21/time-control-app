import { postArrivalEvent } from "@/entity/user/_actions/post-arrival-event";
import {
    useIvalidateProfileAllInfo,
    useIvalidateWorkerAllInfo,
} from "@/entity/user/_queries";
import { useToast } from "@/shared/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useAddArrival = ({
    id,
    isgo,
    date,
}: {
    id: string;
    isgo: string | undefined;
    date: { start: String; end: String };
}) => {
    const invalidateWorkerPlan = useIvalidateWorkerAllInfo();
    const invalidateProfilePlan = useIvalidateProfileAllInfo();
    const { toast } = useToast();

    const now = new Date();
    const formattedNow = now.toLocaleDateString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const { mutate, isPending } = useMutation({
        mutationFn: postArrivalEvent,
        onSuccess: async () => {
            toast(
                isgo && isgo === "1"
                    ? {
                          title: "Завершение работы",
                          description: `Вы завершили работу в ${formattedNow}`,
                      }
                    : {
                          title: "Начало работы",
                          description: `Вы вышли на работу в ${formattedNow}`,
                      }
            );

            await invalidateWorkerPlan({ id });
            await invalidateProfilePlan({ id, date });
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Произошла ошибка отправки события",
            });
        },
    });

    return { mutate, isPending };
};
