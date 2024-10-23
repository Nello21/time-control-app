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
    isgo,
}: {
    id: string | undefined;
    isgo: string | undefined;
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

            toast({
                title: "Опоздание зафиксировано",
                description: `Время прибытия в ${delay}`,
            });

            await invalidateWorkerPlan({ id });
        },
        onError: (error) => {
            form.setError("root", {
                message: error.message ?? "Произошла ошибка",
            });
        },
    });

    async function onSubmit(values: z.infer<typeof timeSchema>) {
        if (isgo) {
            toast({
                title: "Опоздание не зафиксировано",
                description: "вы уже приходили на работу",
            });
        } else {
            mutate({
                uid: id,
                time: values.time,
            });
        }
    }

    return {
        delaySubmit: form.handleSubmit(onSubmit),
        form,
        isPending,
    };
};
