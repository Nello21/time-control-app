import Image from "next/image";
import { CalendarWidget } from "./calendar";

export const Profile = () => {
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
                        Сотрудник
                    </span>
                    <span className="text-sm/[13.93px] font-medium text-gray-dark">
                        профессия
                    </span>
                </div>
            </div>
            <CalendarWidget />
        </div>
    );
};
