import { updateWorkerDelay } from "@/entity/user/_actions/update-worker-delay";
import { useIvalidateWorkerAllInfo } from "@/entity/user/_queries";
import { useToast } from "@/shared/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

const timeSchema = z.object({
    time: z.string().regex(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/, {
        message: "Введите корректное время в формате H:mm или HH:mm",
    }),
});

export const useFormDelay = ({
    id,
    delay,
}: {
    id: string | undefined;
    delay: string | undefined;
}) => {
    const invalidateWorkerPlan = useIvalidateWorkerAllInfo();

    const { toast } = useToast();

    const form = useForm({
        resolver: zodResolver(timeSchema),
        defaultValues: {
            time: "",
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: updateWorkerDelay,
        onSuccess: async () => {
            if (!id) {
                console.error(
                    "ID отсутствует, невозможно обновить план сотрудника"
                );
                return;
            }
            if (delay) {
                toast({
                    title: "Зафиксировано опоздание",
                    description: `время прибытия ${delay}`,
                });
            } else {
                toast({
                    title: "Опоздание не зафиксировано",
                    description: `Вы уже были на работе`,
                });
            }

            await invalidateWorkerPlan({ id });
        },
        onError: (error) => {
            form.setError("root", {
                message: error.message ?? "Произошла ошибка",
            });
        },
    });

    async function onSubmit(values: z.infer<typeof timeSchema>) {
        mutate({
            uid: id,
            time: values.time,
        });
    }

    return {
        delaySubmit: form.handleSubmit(onSubmit),
        form,
        isPending,
    };
};
