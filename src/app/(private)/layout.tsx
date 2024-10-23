import { Container } from "@/shared/ui/container";
import { SessionProvider } from "../_providers/session-provider";
import { Header } from "@/widgets/header/_ui/header";
import { Toaster } from "@/shared/ui/toaster";

export default function Layout({
    children,
    profile,
}: {
    children: React.ReactNode;
    profile: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <SessionProvider>
                <Header />
                <Container className="flex flex-row items-center sm:items-start gap-8 mt-[20px] sm:mt-[50px] px-5 py-4">
                    {children}
                    {profile}
                </Container>
                <Toaster />
            </SessionProvider>
        </div>
    );
}
