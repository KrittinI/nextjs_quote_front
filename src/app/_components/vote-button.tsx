"use client";

import { useAuth } from "../_contexts/user-context";
import { voteQuote } from "../_lib/quote-data";
import { getAccessToken } from "../_utils/local-storage";
import { User } from "../_types/user.type";

interface VoteButtonProps {
    id: number;
}
export default function VoteButton({ id }: VoteButtonProps) {
    const { setUser } = useAuth();
    const handleClickVote = async (formData: FormData) => {
        try {
            const token = getAccessToken();
            const result = await voteQuote(token, id);
            console.log(result);
            setUser((prev: User | null) => {
                // if (prev) {
                return (
                    {
                        ...prev,
                        isVoted: true,
                    } || null
                );
                // }
                // return { isVoted: false };
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form action={handleClickVote}>
            <button className="px-4 py-2">VoteButton</button>
        </form>
    );
}
