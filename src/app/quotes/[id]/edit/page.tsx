import React from "react";
import EditForm from "../../_components/edit-form";

export default function EditQuotePage({ params }: { params: { id: string } }) {
    return (
        <main className="w-full">
            <div className="flex w-full items-center justify-between mb-6">
                <h1 className="text-2xl">Edit Quote</h1>
            </div>
            <EditForm id={Number(params.id)} />
        </main>
    );
}
