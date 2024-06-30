import React from 'react'
import { redirect } from 'next/navigation'

type Props = {
    children: React.ReactNode
}

const AdminProtected = ({ children }: Props) => {
    const user = localStorage.getItem('user')
    const isAdmin = user?.role === 'admin'
    if (!isAdmin) {
        redirect('/')
    }
    return children


}

export default AdminProtected