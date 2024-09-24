import React from "react";
import QuotesCard from "./quote-cards";
import { Quote } from "../_types/quote.type";

interface QuotesContainerProps {
    quotes: Quote[];
}

export default function QuotesContainer({ quotes }: QuotesContainerProps) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {quotes.map((quote: Quote) => (
                <QuotesCard quote={quote} key={quote.id} />
            ))}
        </div>
    );
}
