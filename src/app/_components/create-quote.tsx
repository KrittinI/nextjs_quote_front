"use client";
import Link from "next/link";
import React from "react";
import { useAuth } from "../_contexts/user-context";

export default function CreateButton() {
    const { user } = useAuth();
    return (
        <>
            {user && (
                <Link
                    href={"/quotes/create"}
                    className="border border-black px-4 py-2 rounded-lg"
                >
                    CreateButton
                </Link>
            )}
        </>
    );
}
