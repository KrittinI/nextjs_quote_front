"use server";
import { redirect } from "next/navigation";
import axios from "../_config/axios";
import { User } from "../_types/user.type";

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
    } catch (err) {
        throw new Error(String(err));
    }
    redirect("/login");
}

export async function login(formData: FormData): Promise<string> {
    const username = formData.get("username");
    const password = formData.get("password");

    const result = await axios.post(`/auth/login`, { username, password });
    return await result.data.accessToken;
}

export async function getMe(token: string | null): Promise<User | null> {
    if (!token) {
        return null;
    }
    const result = await axios.get("/users/profile", {
        headers: {
            Authorization: `Bearer ${token}`, // put your token here
        },
    });
    const authUser = result.data;
    return authUser;
}
