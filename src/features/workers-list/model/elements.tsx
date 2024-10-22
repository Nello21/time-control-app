import { cn } from "@/shared/lib/utils";
import { Bandage, Check, Clock9, Handshake, Plane, Plus } from "lucide-react";

export const Container = ({
    className,
    flexPosition,
    icon,
    status,
    delay,
}: {
    className: string;
    flexPosition: string;
    icon: React.ReactNode;
    status: string;
    delay?: string;
}) => {
    return (
        <div className={cn("flex", flexPosition)}>
            <div
                className={cn(
                    className,
                    "flex items-center gap-2 w-fit h-fit px-2 py-1 rounded-md text-white"
                )}
            >
                {icon}
                <span className="text-sm sm:text-[16px] font-medium select-none">
                    {delay ? `${status} в ${delay}` : <span>{status}</span>}
                </span>
            </div>
        </div>
    );
};

export const dayTypeStyles = {
    "0": {
        element: (
            <Container
                icon={<Check size={20} className="" />}
                className="bg-green-light"
                flexPosition="justify-start"
                status="на работе"
            />
        ),
    },
    "1": {
        element: (
            <Container
                icon={<Bandage size={20} className="rotate-[-45deg]" />}
                className="bg-blue-light"
                flexPosition="justify-end"
                status="больничный"
            />
        ),
    },
    "2": {
        element: (
            <Container
                icon={<Plane size={20} className="" />}
                className="bg-yellow-light"
                flexPosition="justify-end"
                status="в отпуске"
            />
        ),
    },
    "3": {
        element: (
            <Container
                icon={<Check size={20} className="" />}
                className="bg-amber-900"
                flexPosition="justify-end"
                status="в командировке"
            />
        ),
    },
    "4": {
        element: (
            <Container
                icon={<Handshake size={20} className="" />}
                className="bg-orange-light"
                flexPosition="justify-end"
                status="административный"
            />
        ),
    },
    "5": {
        element: (
            <Container
                icon={<Plus size={20} className="rotate-45" />}
                className="bg-red-light"
                flexPosition="justify-end"
                status="отсутствует"
            />
        ),
    },
    "6": {
        // удаленка
        element: (
            <Container
                icon={<Check size={20} className="" />}
                className="bg-green-dark"
                flexPosition="justify-start"
                status="На удаленной"
            />
        ),
    },
    "7": {
        // опоздание
        element: ({ delay }: { delay?: string }) => (
            <div className="flex flex-wrap justify-end gap-1">
                <Container
                    icon={<Clock9 size={20} className="" />}
                    className="bg-gray-medium"
                    flexPosition="justify-center"
                    status="опоздание"
                    delay={delay}
                />
                <Container
                    icon={<Plus size={20} className="rotate-45" />}
                    className="bg-red-light"
                    flexPosition="justify-center"
                    status="отсутствует"
                />
            </div>
        ),
    },
};
