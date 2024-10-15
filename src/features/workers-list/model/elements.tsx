import { cn } from "@/shared/lib/utils";
import { Bandage, Check, Handshake, Plane, Plus } from "lucide-react";

export const Container = ({
    className,
    icon,
    status,
}: {
    className: string;
    icon: React.ReactNode;
    status: string;
}) => {
    return (
        <div className="flex justify-start">
            <div
                className={cn(
                    className,
                    "flex items-center gap-2 w-fit h-fit px-2 py-1 rounded-md text-white"
                )}
            >
                {icon}
                <span className="text-sm sm:text-[16px] font-medium ">
                    {status}
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
                status="на работе"
            />
        ),
    },
    "1": {
        element: (
            <Container
                icon={<Plane size={20} className="" />}
                className="bg-yellow-light"
                status="на работе"
            />
        ),
    },
    "2": {
        element: (
            <Container
                icon={<Bandage size={20} className="rotate-[-45deg]" />}
                className="bg-blue-light"
                status="на работе"
            />
        ),
    },
    "3": {
        element: (
            <Container
                icon={<Check size={20} className="" />}
                className="bg-green-dark"
                status="на работе"
            />
        ),
    },
    "4": {
        element: (
            <Container
                icon={<Handshake size={20} className="" />}
                className="bg-orange-light"
                status="на работе"
            />
        ),
    },
    "5": {
        element: (
            <Container
                icon={<Plus size={20} className="rotate-45" />}
                className="bg-red-light"
                status="на работе"
            />
        ),
    },
};
