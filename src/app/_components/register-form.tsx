import Link from "next/link";
import React from "react";
import { register } from "../_lib/auth-data";

export default function RegisterForm() {
    return (
        <form action={register}>
            <div className="rounded-md bg-gray-50 p-6">
                {/* Username */}
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="mb-2 block text-sm font-medium"
                    >
                        Username
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            id="username"
                            name="username"
                            placeholder="Enter username"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                        />
                    </div>
                </div>
                {/* Password */}
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium"
                    >
                        Password
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            type="password"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                        />
                    </div>
                </div>
                {/* Confirm Password */}
                <div className="mb-4">
                    <label
                        htmlFor="confirmpassword"
                        className="mb-2 block text-sm font-medium"
                    >
                        Confirm Password
                    </label>
                    <div className="relative mt-2 rounded-md ">
                        <input
                            id="confirmpassword"
                            name="confirmpassword"
                            placeholder="Enter confirmpassword"
                            type="password"
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
                    Sign Up
                </button>
            </div>
        </form>
    );
}
