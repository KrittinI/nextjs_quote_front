import Link from "next/link";
import { removeAccessToken } from "../_utils/local-storage";
import { redirect } from "next/navigation";

export default function Navigation() {
    const handleClickLogout = () => {
        removeAccessToken();
        redirect("/");
    };
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
                onClick={handleClickLogout}
                href={"/"}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
            >
                Logout
            </Link>
        </div>
    );
}
