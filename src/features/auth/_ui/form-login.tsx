"use client";

import { useInvalidateSession } from "@/entity/user/session";
import { routes } from "@/shared/config/routes";
import { COOKIE_SESSION_NAME } from "@/shared/lib/consts";
import { Card } from "@/shared/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useId } from "react";

function createLoginFormUrl({
    id,
    phoneTitle,
    styles,
    backendUrl,
    type,
}: {
    id: string;
    phoneTitle?: string;
    styles: string;
    backendUrl: string;
    type: string;
}): string {
    const url = new URL(
        "/api/auth-service/login-form/index.html",
        window.location.origin
    );
    url.searchParams.set("id", id);
    if (phoneTitle) {
        url.searchParams.set("title", encodeURIComponent(phoneTitle));
    }
    url.searchParams.set("styles", encodeURIComponent(styles));
    url.searchParams.set("backend-url", backendUrl);
    url.searchParams.set("type", type);

    return url.toString();
}

export function LoginForm({
    onLoginSuccess,
    phoneTitle,
}: {
    onLoginSuccess: () => void;
    phoneTitle?: string;
}) {
    const id = useId();
    const router = useRouter();

    const invalidateSession = useInvalidateSession();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleMessage = (event: any) => {
            if (event.data.type === "LOGIN_SUCCESS" && id === event.data.id) {
                const token = event.data.token;
                const expires = new Date();
                expires.setDate(expires.getDate() + 30); // Куки будет действовать 30 дней
                document.cookie = `${COOKIE_SESSION_NAME}=${token};expires=${expires.toUTCString()};path=/`;
                invalidateSession();
                onLoginSuccess();
                router.push(routes.MAIN);
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [id, invalidateSession, onLoginSuccess, router]);

    const iframeUrl = createLoginFormUrl({
        id,
        phoneTitle,
        styles: ".button {background-color:#003362; border-radius: 10px} .form-container {padding:0px} .back-button {position:absolute; top:2px; left:2px;} .button.loading-button {background-color:#3D3D3D;}",
        backendUrl: "/api/auth-service",
        type: "EMPLOYE",
    });

    return (
        <div className="relative ">
            {/* <h1 className="text-3xl font-extrabold text-center mt-24">
                Склад WT10
            </h1> */}
            <iframe
                src={iframeUrl}
                className="w-full overflow-hidden h-[250px] px-4"
            />
            <Card className="bg-white w-full h-fit py-4 text-center border-0 text-blue-dark text-[15px] font-medium">
                Авторизуйтесь для отслеживания
            </Card>
        </div>
    );
}
