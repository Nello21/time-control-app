"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/ui/sheet";
import { Clock9, Plus } from "lucide-react";
import { Input } from "@/shared/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/shared/ui/form";
import { useFormDelay } from "../_model/use-form-delay";

export const DelayButton = ({ uid }: { uid: string | undefined }) => {
    const { form, delaySubmit } = useFormDelay({ id: uid });

    const [open, setOpen] = useState(false);

    const closeSheet = () => {
        if (open) {
            setOpen(false);
        }
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className="flex flex-row gap-2 bg-gray-medium text-white hover:bg-gray-dark transition-color">
                    <Clock9 />
                    <span>Опаздываю</span>
                </Button>
            </SheetTrigger>

            <SheetContent
                aria-describedby={undefined}
                side={"bottom"}
                className="bg-white border-0"
            >
                <SheetHeader className="flex flex-row justify-between">
                    <SheetTitle className="w-fit">Введите время</SheetTitle>
                    <SheetClose asChild onClick={closeSheet}>
                        <Plus
                            size={25}
                            strokeWidth="1.75px"
                            className="cursor-pointer rotate-45 transition-opacity text-black space-y-2 > :not([hidden]) ~ :not([hidden])"
                        />
                    </SheetClose>
                </SheetHeader>
                <Form {...form}>
                    <form
                        onSubmit={delaySubmit}
                        className="flex flex-col items-center gap-4"
                    >
                        <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                                <FormItem className="max-w-[350px] w-full">
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Введите время"
                                            className="w-full border-gray-medium ring-gray-medium"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-row gap-2 w-full justify-center">
                            <Button
                                onClick={closeSheet}
                                className="max-w-[175px] w-full bg-gray-light text-black"
                            >
                                Отмена
                            </Button>
                            <Button
                                type="submit"
                                className="max-w-[175px] w-full bg-blue-dark text-white"
                                onClick={closeSheet}
                            >
                                Подтвердить
                            </Button>
                        </div>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    );
};
