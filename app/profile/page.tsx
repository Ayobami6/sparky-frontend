'use client'
import React, { useState } from 'react'
import Protected from '../hooks/useProtected'
import AppLayout from '../components/AppLayout'
import Hero from '../components/Hero'
import SidebarProfile from '../components/Profile/SidebarProfile'
import { redirect } from 'next/navigation'
import { signOut } from 'next-auth/react'
import ProfileInfo from '../components/Profile/ProfileInfo'
import ChangePassword from '../components/Profile/ChangePassword'

type Props = {}

const Profile = ({ }: Props) => {
    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const user = JSON.parse(localStorage.getItem('user') as any)
    const [avatar, setAvatar] = useState(user && user.avatar.url)
    const [active, setActive] = useState(1)


    const logOutHandler = async () => {
        localStorage.clear();
        sessionStorage.clear();
        await signOut();
    }



    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 85) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })
    }
    return (
        <Protected>
            <AppLayout />
            <div className="h-screen w-[85%] mx-auto grid grid-cols-3 gap-4" >
                <div className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-white bg-opacity-90 border border-[#fffffld] rounded-[5px] shadow-xl mt-[80px] mb-[80px] sticky ${scroll ? "top-[120px]" : "top-[30px]"} left-[30px]`}>
                    <SidebarProfile user={user} active={active} avatar={avatar} setActive={setActive} setAvatar={setAvatar} logOutHandler={logOutHandler} />

                </div>
                <div className={`col-span-2 sticky mt-[80px] ${scroll ? "top-[120px]" : "top-[30px]"}`}>
                    {
                        active === 1 &&
                        < ProfileInfo user={user} avatar={avatar} setAvatar={setAvatar} />
                    }
                    {
                        active === 2 &&
                        < ChangePassword />
                    }
                </div>



            </div>


        </Protected>


    )
}

export default Profile