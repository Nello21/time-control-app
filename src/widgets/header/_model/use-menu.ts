import { useSession } from "@/entity/user/_queries";
import { useState } from "react";

export const useMenu = () => {
    const [open, setOpen] = useState(false);
    const session = useSession();
    const closeSheet = () => {
        if (open) {
            setOpen(false);
        }
    };

    return {
        session,
        closeSheet,
        open,
        setOpen,
    };
};
