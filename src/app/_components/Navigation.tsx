"use client";
import Link from "next/link";
import { removeAccessToken } from "../_utils/local-storage";
import { useRouter } from "next/navigation";
import { useAuth } from "../_contexts/user-context";

export default function Navigation() {
    const router = useRouter();
    const { user, setUser } = useAuth();
    const handleClickLogout = () => {
        removeAccessToken();
        setUser(null);
        router.push("/");
    };
    return (
        <div className="flex justify-end w-full gap-1 p-2 bg-red-100">
            <Link
                href={"/"}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
            >
                Home
            </Link>
            {!user ? (
                <>
                    <Link
                        href={"/login"}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
                    >
                        Login
                    </Link>
                    <Link
                        href={"/register"}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
                    >
                        Register
                    </Link>
                </>
            ) : (
                <button
                    onClick={handleClickLogout}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
                >
                    Logout
                </button>
            )}
        </div>
    );
}
