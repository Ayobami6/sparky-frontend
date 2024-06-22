'use client'
import { redirect } from "next/navigation";
import useAuth from "./useAuth";


type Props = {
    children: React.ReactNode,
}

const Protected = ({ children }: Props) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        redirect('/');
    }
    return children;

}

export default Protected;