import React from "react";
import { fetchAllQuote } from "../_lib/quote-data";
import QuotesCard from "./quote-cards";
import { Quote } from "../_types/quote.type";

export default async function QuotesContainer() {
    const result = await fetchAllQuote();
    const quotes = result.data;
    return (
        <div className="grid grid-cols-4 gap-4">
            {quotes.map((quote: Quote) => (
                <QuotesCard quote={quote} key={quote.id} />
            ))}
        </div>
    );
}
