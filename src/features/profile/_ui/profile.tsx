"use client";

import Image from "next/image";
import { CalendarWidget } from "./calendar";
import { useSession } from "@/app/_providers/session-provider";
import { useUserStatus } from "../_model/use-user-status";
import { RemoteButton } from "./remote-button";
import { DelayButton } from "./delay-button";
import { Spinner } from "@/shared/ui/spinner";
import { LogoutBtn } from "@/widgets/header/_ui/logout-btn";

export const Profile = () => {
    const { session } = useSession();
    const {
        plan,
        lastInterval,
        delay,
        user,
        avatar,
        date,
        profileDate,
        setDate,
        modifiers,
        isError,
        isLoading,
    } = useUserStatus({
        tabnum: session.id,
    });

    if (isLoading) {
        <Spinner />;
    }

    if (isError) {
        <div>Ошибка загрузки пользователя</div>;
    }

    return (
        <div className={`w-full h-full space-y-3 mt-[60px]`}>
            <div className="relative h-[100px] flex flex-col items-center justify-end py-4 bg-white rounded-[10px]">
                {avatar && (
                    <Image
                        src={avatar}
                        alt="Аватар"
                        width={100}
                        height={100}
                        className="rounded-full w-[100px] h-[100px] object-cover object-top absolute top-[-60px]"
                    />
                )}
                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-base/[15.92px] font-semibold">
                        {session.name}
                    </span>
                    <span className="text-sm/[13.93px] font-medium text-gray-dark">
                        {user && user.DOLJNAME}
                    </span>
                </div>
            </div>
            <CalendarWidget
                id={session.id}
                selected={date}
                onSelect={setDate}
                modifiers={modifiers}
            />

            <DelayButton
                uid={session.id}
                delay={delay}
                isgo={lastInterval?.ISGO}
            />
            {user?.DEPART === "40" && (
                <RemoteButton
                    id={session.id}
                    uid={plan?.UID}
                    addType={lastInterval?.ADDTYPE}
                    isgo={lastInterval?.ISGO}
                    date={profileDate}
                />
            )}
            <LogoutBtn />
        </div>
    );
};
