import React, { JSX, ReactNode, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { gql, useQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router";

type UserProviderProps = {
    children: ReactNode;
};

const getMe = gql(`
  query Query {
    me {
      code
      success
      message
      user {
        id
        username
      }
    }
  } 
`);

const UserProvider: React.FC<UserProviderProps> = ({
                                                       children,
                                                   }): JSX.Element => {
    const { data, loading } = useQuery(getMe, {
        context: {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        },
    });
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState({
        id: "",
        username: "",
        token: "",
    });
    useEffect(() => {
        if (data?.me?.user?.username && localStorage.getItem("token")) setUser({ id: data.me.user.id, username: data.me.user.username, token: localStorage.getItem("token") || "" });
    }, [data]);

    useEffect(() => {
        if (data && (!data?.me?.success && !user.id) && location.pathname === "/") navigate("/login");
    }, [data, user, navigate, location]);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider };