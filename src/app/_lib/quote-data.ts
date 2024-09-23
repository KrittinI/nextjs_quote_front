"use server";
import { redirect } from "next/navigation";
import axios from "../_config/axios";

export async function fetchAllQuote() {
    return await axios.get("/quotes");
}

export async function fetchQuoteById(id: number) {
    return await axios.get(`/quotes/${id}`);
}

export async function updateQuote(id: number, formData: FormData) {
    const title = formData.get("title");
    const author = formData.get("author");

    if (!title) {
        throw new Error("Title is Required");
    }

    console.log({ title, author });
    await axios.patch(`/quotes/${id}`, { title, author });

    redirect("/");
}

export async function createQuote(formData: FormData) {
    const title = formData.get("title");
    const author = formData.get("author");

    if (!title) {
        throw new Error("Title is Required");
    }

    console.log({ title, author });
    await axios.post(`/quotes`, { title, author });

    redirect("/");
}
