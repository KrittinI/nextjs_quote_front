"use client";
import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";
import { User } from "../_types/user.type";
import { getAccessToken, setAccessToken } from "../_utils/local-storage";
import { getMe, login } from "../_lib/auth-data";

interface UserContextValue {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}
export const UserContext = createContext<UserContextValue | null>(null);

export default function UserContextProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = async () => {
        const token = getAccessToken();
        const result = await getMe(token);
    };

    const value = {
        user,
        setUser,
    };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useTodo must be use within a TodoContextProvider");
    }

    return context;
};
