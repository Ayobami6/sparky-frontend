'use client'
import React, { useState } from 'react'
import Protected from '../hooks/useProtected'
import AppLayout from '../components/AppLayout'
import Hero from '../components/Hero'

type Props = {}

const Profile = ({ }: Props) => {
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <div className='relative'>
                <Protected>
                    <AppLayout />
                    <div className="h-screen" >
                        <h1 className='dark:text-white'>Some Thing</h1>
                    </div>
                </Protected>
            </div>
        </>


    )
}

export default Profile