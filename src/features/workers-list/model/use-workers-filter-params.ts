import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useWorkerFilterParams = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const dayTypeParams = searchParams.get("dayType") || "all";

    const handleDayTypeChange = (newDayType: string) => {
        const params = new URLSearchParams(searchParams);

        if (newDayType === "all") {
            params.delete("dayType");
        } else {
            params.set("dayType", newDayType);
        }

        router.replace(`${pathname}?${params.toString()}`);
    };

    return { dayTypeParams, handleDayTypeChange };
};
