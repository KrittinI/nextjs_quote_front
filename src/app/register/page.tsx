import React from "react";
import RegisterForm from "../_components/register-form";

export default function Register() {
    return (
        <main className="w-[70vw] mx-auto">
            <div className="flex w-full items-center justify-center mb-6">
                <h1 className="text-2xl">Register</h1>
            </div>
            <RegisterForm />
        </main>
    );
}
