import { createQuote } from "@/app/_lib/quote-data";
import Link from "next/link";
import React from "react";

export default function CreateForm() {
    return (
        <form action={createQuote}>
            <div className="rounded-md bg-gray-50 p-6">
                {/* Title */}
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium"
                    >
                        Title
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            id="title"
                            name="title"
                            placeholder="Enter title"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                        />
                    </div>
                </div>
                {/* Author */}
                <div className="mb-4">
                    <label
                        htmlFor="author"
                        className="mb-2 block text-sm font-medium"
                    >
                        Author
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            id="author"
                            name="author"
                            placeholder="Enter author"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>

                <button className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                    Save
                </button>
            </div>
        </form>
    );
}
