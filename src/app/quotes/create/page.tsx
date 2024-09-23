import React from "react";
import CreateForm from "../_components/create-form";

export default function CreateQuotePage() {
    return (
        <main className="w-full">
            <div className="flex w-full items-center justify-between mb-6">
                <h1 className="text-2xl">Create Quote</h1>
            </div>
            <CreateForm />
        </main>
    );
}
