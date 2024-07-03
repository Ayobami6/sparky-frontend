import React from 'react'
import { redirect } from 'next/navigation'

type Props = {
    children: React.ReactNode
}

const AdminProtected = ({ children }: Props) => {
    const user = JSON.parse(localStorage.getItem('user') as any)
    if (user) {
        const isAdmin = user?.role === 'admin'
        if (!isAdmin) {
            redirect('/')
        }
        return children

    }
    redirect("/")



}

export default AdminProtected