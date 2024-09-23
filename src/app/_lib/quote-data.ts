"use server";
import { redirect } from "next/navigation";
import axios from "../_config/axios";
import { revalidatePath } from "next/cache";

export async function fetchAllQuote() {
    return await axios.get("/quotes");
}

export async function fetchQuoteById(id: number) {
    return await axios.get(`/quotes/${id}`);
}

export async function updateQuote(
    token: string | null,
    id: number,
    formData: FormData
) {
    const title = formData.get("title");
    const author = formData.get("author");

    if (!title) {
        throw new Error("Title is Required");
    }

    await axios.patch(
        `/quotes/${id}`,
        { title, author },
        {
            headers: {
                Authorization: `Bearer ${token}`, // put your token here
            },
        }
    );

    redirect("/");
}

export async function createQuote(token: string | null, formData: FormData) {
    const title = formData.get("title");
    const author = formData.get("author");

    if (!title) {
        throw new Error("Title is Required");
    }

    await axios.post(
        `/quotes`,
        { title, author },
        {
            headers: {
                Authorization: `Bearer ${token}`, // put your token here
            },
        }
    );
    fetchAllQuote();
    redirect("/");
}

export async function deleteQuote(token: string | null, id: number) {
    await axios.delete(`/quotes/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`, // put your token here
        },
    });
    revalidatePath("/");
}
