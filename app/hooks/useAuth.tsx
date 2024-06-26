import { FC } from "react";
import { useSelector } from 'react-redux'
import { stateProps } from "../components/Auth/Login";

export default function useAuth() {
    const user = localStorage.getItem('user');
    let isAuthenticated = false;
    if (user) {
        isAuthenticated = true
    }
    return { isAuthenticated };
}
