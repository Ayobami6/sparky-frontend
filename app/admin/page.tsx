'use client'
import React from 'react'
import AppLayout from '../components/AppLayout'
import AdminSidebar from '../components/Admin/AdminSidebar'
import AdminProtected from '../hooks/adminProtected'

type Props = {}

const page = (props: Props) => {
    const user = JSON.parse(localStorage.getItem('user') as any)
    return (
        <AdminProtected>
            <AppLayout />
            <div className='flex  h-[200vh]'>
                <div className='1500px:w-[15%] w-1/5'>
                    <AdminSidebar user={user} />

                </div>
                <div className='w-[85%]'>

                </div>

            </div>

        </AdminProtected>

    )
}

export default page