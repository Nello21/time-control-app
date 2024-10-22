"use client";

import { LoginForm } from "@/features/auth/_ui/form-login";
import { Container } from "@/shared/ui/container";

function LoginPage() {
    return (
        <Container>
            <div className="flex items-center justify-center flex-col">
                <div className="space-y-2 max-w-[600px] w-full text-center">
                    <h1 className="text-4xl font-bold">Вход</h1>
                </div>
                <LoginForm
                    onLoginSuccess={() => console.log("Вход успешно выполнен")}
                />
            </div>
        </Container>
    );
}

export default LoginPage;
