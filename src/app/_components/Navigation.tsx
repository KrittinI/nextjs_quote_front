import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex justify-end w-full gap-1 p-2 bg-red-100">
            <Link
                href={"/"}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
            >
                Home
            </Link>
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
            <Link
                href={"/"}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
            >
                Logout
            </Link>
        </div>
    );
}
