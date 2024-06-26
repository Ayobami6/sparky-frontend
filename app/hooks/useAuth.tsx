import { FC } from "react";
import { useSelector } from 'react-redux'
import { stateProps } from "../components/Auth/Login";

export default function useAuth() {
    const user = useSelector((state: stateProps) => state.auth.user);
    let isAuthenticated = true;
    if (user) {
        isAuthenticated = true
    }
    return { isAuthenticated };
}
