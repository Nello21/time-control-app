"use client";

import { useLogout } from "@/entity/user/_queries";
import { routes } from "@/shared/config/routes";
import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";

export const LogoutBtn = () => {
    const { logout, isPending } = useLogout();
    const router = useRouter();
    return (
        <Button
            onClick={() => {
                logout();
                router.push(routes.LOGIN);
            }}
            loading={isPending}
            className="max-w-[250px] w-full bg-blue-dark text-white"
        >
            Выйти
        </Button>
    );
};
