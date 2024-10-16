import { SessionProvider } from "@/app/_providers/session-provider";
import { Container } from "@/shared/ui/container";

export default function Layout({
    children,
    profile,
}: {
    children: React.ReactNode;
    profile: React.ReactNode;
}) {
    return (
        <div className="h-auto px-4 sm:mt-[50px]">
            <Container className="px-0 flex flex-row items-center sm:items-start gap-6">
                <SessionProvider>
                    {children}
                    {profile}
                </SessionProvider>
            </Container>
        </div>
    );
}
