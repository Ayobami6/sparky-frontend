import Image from 'next/image';
import React from 'react'
import defaultAvatar from '../../../public/images/anonymousDeafult-Profile-Pitcher.png'
import { RiLockPasswordLine } from 'react-icons/ri';
import { SiCoursera } from 'react-icons/si';
import { AiOutlineLogout } from 'react-icons/ai';

type Props = {
    user: any;
    active: number;
    avatar: string;
    setActive: (active: number) => void;
    setAvatar: (avatar: string) => void;
    logOutHandler: any;
}

const SidebarProfile = ({ user, active, avatar, setActive, setAvatar, logOutHandler }: Props) => {
    return (
        <div className='w-full'>
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 1 ? "dark:bg-slate-800 bg-white shadow-md" : "bg-transparent"}`} onClick={() => setActive(1)}>
                <Image src={avatar ? avatar : defaultAvatar}
                    alt='avatar'
                    width={20}
                    height={20}
                    className='w-[30px] h-[30px] 800px:w-[40px] 800px:h-[40px] cursor-pointer rounded-full'
                />
                <h5 className='pl-2 800px:block hidden font-Poppins dark:text-white'>
                    My Account
                </h5>

            </div>
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 2 ? "dark:bg-slate-800 bg-white shadow-md" : "bg-transparent"}`} onClick={() => setActive(2)}>
                <RiLockPasswordLine size={20} fill='#fff' />
                <h5 className='pl-2 800px:block hidden dark:text-white'>Change Password</h5>
            </div>
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 3 ? "dark:bg-slate-800 bg-white shadow-md" : "bg-transparent"}`} onClick={() => setActive(3)}>
                <SiCoursera size={20} fill='#fff' />
                <h5 className='pl-2 800px:block hidden dark:text-white'>All Enrolled Courses</h5>
            </div>
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 4 ? "dark:bg-slate-800 bg-white shadow-md" : "bg-transparent"}`} onClick={() => logOutHandler()}>
                <AiOutlineLogout size={20} fill='#fff' />
                <h5 className='pl-2 800px:block hidden dark:text-white'>Logout</h5>
            </div>
        </div>
    )
}

export default SidebarProfile