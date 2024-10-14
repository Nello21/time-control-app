import { cn } from "../lib/utils";

export const Container = ({
    className,
    children,
}: Readonly<{
    className?: string;
    children: React.ReactNode;
}>) => {
    return <div className={cn("container h-full", className)}>{children}</div>;
};
