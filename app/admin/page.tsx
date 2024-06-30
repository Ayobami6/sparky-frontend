'use client'
import React from 'react'
import AdminLayout from '../components/Admin/AdminLayout'
import DashBoardHero from '../components/Admin/DashBoardHero'

type Props = {}

const page = (props: Props) => {
    const user = JSON.parse(localStorage.getItem('user') as any)
    return (
        <AdminLayout user={user} Component={DashBoardHero} />
    )
}

export default page