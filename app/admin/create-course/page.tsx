'use client'
import React from 'react'
import AdminLayout from '@/app/components/Admin/AdminLayout'
import CreateCourse from '@/app/components/Admin/Courses/CreateCourse'

type Props = {}

const page = (props: Props) => {
    const user = JSON.parse(localStorage.getItem('user') as any)
    return (
        <>
            <AdminLayout user={user} Component={CreateCourse} />
        </>
    )
}

export default page