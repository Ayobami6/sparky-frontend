import AdminProtected from '@/app/hooks/adminProtected'
import React from 'react'
import AppLayout from '../AppLayout'
import AdminSidebar from './AdminSidebar'
import DashBoardHero from './DashBoardHero'

type Props = {
    user: any
    Component: React.FC
}

const AdminLayout = ({ user, Component }: Props) => {
    return (
        <AdminProtected>
            <AppLayout />
            <div className='flex  h-[200vh]'>
                <div className='1500px:w-[15%] w-1/5'>
                    <AdminSidebar user={user} />

                </div>
                <div className='w-[85%]'>
                    <Component />

                </div>

            </div>

        </AdminProtected>
    )
}

export default AdminLayout