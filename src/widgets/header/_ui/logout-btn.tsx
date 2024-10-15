"use client";

import { useLogout } from "@/entity/user/_queries";
import { Button } from "@/shared/ui/button";

export const LogoutBtn = () => {
    const { logout, isPending } = useLogout();
    return (
        <Button
            onClick={() => logout()}
            loading={isPending}
            className="bg-white"
        >
            Выйти
        </Button>
    );
};
