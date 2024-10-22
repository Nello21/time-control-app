"use client";

import { useLogout } from "@/entity/user/_queries";
import { routes } from "@/shared/config/routes";
import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";

export const LogoutBtn = ({ closeMenu }: { closeMenu: () => void }) => {
    const { logout, isPending } = useLogout();
    const router = useRouter();
    return (
        <Button
            onClick={() => {
                logout(), closeMenu(), router.push(routes.LOGIN);
            }}
            loading={isPending}
            className="max-w-[250px] w-full bg-blue-dark text-white"
        >
            Выйти
        </Button>
    );
};
