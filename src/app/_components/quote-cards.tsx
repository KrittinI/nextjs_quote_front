import React from "react";
import { Quote } from "../_types/quote.type";
import EditButton from "./edit-button";
import VoteButton from "./vote-button";

interface QuotesCardProps {
    quote: Quote;
}

export default function QuotesCard({ quote }: QuotesCardProps) {
    return (
        <div className="p-4 flex flex-col gap-4">
            <div>&quot;{quote.title}&quot; </div>
            <div className="self-end">- {quote.author} -</div>
            <div className="flex justify-between">
                <div>Voted : {quote.voted}</div>
                <VoteButton id={quote.id} />
            </div>
            {!quote.voted && (
                <div className="flex justify-between items-center">
                    <EditButton id={quote.id} />
                    <button>Delete</button>
                </div>
            )}
        </div>
    );
}
