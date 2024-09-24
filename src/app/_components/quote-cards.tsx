"use client";
import React from "react";
import { Quote } from "../_types/quote.type";
import EditButton from "./edit-button";
import VoteButton from "./vote-button";
import { useAuth } from "../_contexts/user-context";
import DeleteButton from "./delete-button";

interface QuotesCardProps {
    quote: Quote;
}

export default function QuotesCard({ quote }: QuotesCardProps) {
    const { user } = useAuth();
    return (
        <div className="p-4 flex flex-col gap-4">
            <div>&quot;{quote.title}&quot; </div>
            <div className="self-end">- {quote.author} -</div>
            <div className="flex justify-between">
                <div>Voted : {quote.voted}</div>
                {user && !user?.isVoted && <VoteButton id={quote.id} />}
            </div>
            {!quote.voted && quote.creator === user?.id && (
                <div className="flex justify-between items-center">
                    <EditButton id={quote.id} />
                    <DeleteButton id={quote.id} />
                </div>
            )}
        </div>
    );
}
