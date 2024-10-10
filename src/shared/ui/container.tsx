import { cn } from "../lib/utils";

export const Container = ({
    className,
    children,
}: Readonly<{
    className?: string;
    children: React.ReactNode;
}>) => {
    return (
        <div
            className={cn(
                "px-5 max-w-[1200px] w-full h-full mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};
