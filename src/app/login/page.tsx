import React from "react";
import LoginForm from "../_components/login-form";

export default function Login() {
    return (
        <main className="w-[70vw] mx-auto">
            <div className="flex w-full items-center justify-center mb-6">
                <h1 className="text-2xl">Login</h1>
            </div>
            <LoginForm />
        </main>
    );
}
