import React from "react";
import EditForm from "../../_components/edit-form";
import { fetchQuoteById } from "@/app/_lib/quote-data";

export default async function EditQuotePage({
    params,
}: {
    params: { id: string };
}) {
    const quote = await fetchQuoteById(+params.id);
    return (
        <main className="w-full">
            <div className="flex w-full items-center justify-between mb-6">
                <h1 className="text-2xl">Edit Quote</h1>
            </div>
            <EditForm quote={quote.data} />
        </main>
    );
}
