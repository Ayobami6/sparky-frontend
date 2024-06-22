import { FC } from "react";
import { useSelector } from 'react-redux'

export default function useAuth() {
    const user = useSelector((state) => state.auth.user);
    let isAuthenticated = true;
    if (user) {
        isAuthenticated = true
    }
    return { isAuthenticated };
}
