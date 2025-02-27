import { createContext, useContext } from "react";

interface User {
    id: string;
    username: string;
    token: string;
}

type UserContentType = {
    user: User;
    setUser: (c: User) => void;
    loading: boolean;
};

export const UserContext = createContext<UserContentType>({
    user: {
        id: "",
        username: "",
        token: "",
    },
    setUser: () => {},
    loading: true,
});

export const useUserContext = () => useContext(UserContext);