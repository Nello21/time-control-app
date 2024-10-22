import { useAppSession } from "@/entity/user/session";
import { useState } from "react";

export const useMenu = () => {
    const [open, setOpen] = useState(false);
    const session = useAppSession();

    return {
        session,
        open,
        setOpen,
    };
};
