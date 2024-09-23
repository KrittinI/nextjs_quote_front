import Link from "next/link";
import React from "react";

export default function CreateButton() {
    return (
        <Link
            href={"/quotes/create"}
            className="border border-black px-4 py-2 rounded-lg"
        >
            CreateButton
        </Link>
    );
}
