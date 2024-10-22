import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { AppProvider } from "./_providers/reactQuery-provider";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "wt-control",
    description: "Приложение для управления",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${font.className} min-h-[100dvh] bg-gray-light flex flex-col`}
            >
                <AppProvider>
                    <main className="min-h-[100dvh]">{children}</main>
                </AppProvider>
            </body>
        </html>
    );
}
