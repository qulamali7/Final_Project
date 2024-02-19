import React, { createContext, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import useLocalStorage from "../hook/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [token, setToken] = useLocalStorage(null);
    const [decode, setDecode] = useLocalStorage(null);

    function addToken(token) {
        setToken(token);
        console.log(token);
        const tokenDecoded = jwtDecode(token);
        console.log(tokenDecoded);
        setDecode(tokenDecoded);
    }

    function logOut() {
        setToken(null);
        setDecode(null);
    }

    const data = {
        token,
        decode,
        addToken,
        logOut,
        setToken,
        setDecode
    };
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserProvider;