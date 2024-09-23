"use server";
import { redirect } from "next/navigation";
import axios from "../_config/axios";

export async function register(formData: FormData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmpassword = formData.get("confirmpassword");

    if (password !== confirmpassword) {
        throw new Error("password and confirmpassword not match");
    }

    try {
        await axios.post("/users/register", {
            username,
            password,
            confirmpassword,
        });
    } catch (error) {
        throw new Error(error);
    }
    redirect("/login");
}

export async function login(formData: FormData) {
    const username = formData.get("username");
    const password = formData.get("password");

    const result = await axios.post(`/auth/login`, { username, password });
    console.log(result.data);
}
