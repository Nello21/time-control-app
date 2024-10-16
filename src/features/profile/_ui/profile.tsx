"use client";

import Image from "next/image";
import { CalendarWidget } from "./calendar";
import { useSession } from "@/app/_providers/session-provider";
import { useUserStatus } from "../_model/use-user-status";

export const Profile = () => {
    const { session } = useSession();
    const { data, date, setDate, modifiers, isError, isLoading } =
        useUserStatus({
            tabnum: session.id,
        });

    return (
        <div className={`w-full h-full space-y-3 mt-[60px]`}>
            <div className="relative h-[96px] flex flex-col items-center justify-end py-4 bg-white rounded-[10px]">
                <Image
                    src="/avatars/avatar.jpg"
                    alt="Аватар"
                    width={100}
                    height={100}
                    className="rounded-full object-cover bg-gray-dark absolute top-[-60px]"
                />
                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-base/[15.92px] font-semibold">
                        {session.name}
                    </span>
                    <span className="text-sm/[13.93px] font-medium text-gray-dark">
                        {data?.profession}
                    </span>
                </div>
            </div>
            <CalendarWidget
                selected={date}
                onSelect={setDate}
                modifiers={modifiers}
            />
        </div>
    );
};
