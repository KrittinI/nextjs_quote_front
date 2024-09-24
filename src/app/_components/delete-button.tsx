"use client";
import React from "react";
import { getAccessToken } from "../_utils/local-storage";
import { deleteQuote } from "../_lib/quote-data";

interface DeleteButtonProps {
    id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
    const handleClickDelete = async (formData: FormData) => {
        try {
            const token = getAccessToken();
            const result = await deleteQuote(token, id);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form action={handleClickDelete}>
            <button className="px-4 py-2">Delete</button>
        </form>
    );
}
