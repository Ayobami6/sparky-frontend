'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import Image from 'next/image';
import ThemeSwitch from './ThemeSwitch'
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from 'react-icons/hi'
import CustomModal from '../utils/CustomModal';
import Login, { stateProps } from './Auth/Login';
import SignUp from './Auth/SignUp'
import Verification from './Auth/Verification';
import { useRefreshTokenMutation } from '@/redux/features/auth/authApi';
import { useSelector } from 'react-redux';

type Props = {
    open: boolean
    setOpen: (open: boolean) => void
    activeItem: number
    route: string
    setRoute: (route: string) => void
}

const Header = ({ open, setOpen, activeItem, route, setRoute }: Props) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOPenSidebar] = useState(false);
    const user = useSelector((state: stateProps) => state.auth.user)
    const [refreshToken, { isSuccess, error, data }] = useRefreshTokenMutation();

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 85) {
                setActive(true);
            } else {
                setActive(false);
            }
        })
    }
    const handelClose = (e: any) => {
        if (e.target.id === 'screen') {
            setOPenSidebar(false);
        }

    }
    console.log(user)
    // useEffect(() => {
    //     console.log(tokenRefresh)

    //     const refresh = async () => {
    //         if (tokenRefresh) {
    //             const data = {
    //                 refreshToken: tokenRefresh
    //             }
    //             await refreshToken(data);
    //         }

    //     }
    //     refresh()

    // }, [isSuccess, error])
    return (
        <div className='w-full'
        >
            <div className={`${active}` ? "dark:bg-opacity-50 dark:bg-gradient-to-b bg-white dark:from-gray-900 dark:to-black top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-dark shadow-xl transition duration-500" : "w-full border-b dark:border-gray-500 h-[80px] z-[80] dark:shadow"}>
                <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
                    <div className='w-full h-[80px] flex justify-between p-3'>
                        <div className='flex items-center'>

                            <Link href={"/"} className='text-[25px] font-Poppins p-0 flex items-center font-[500] text-black dark:text-white'>
                                <span className='items-center'> <Image
                                    src={"/images/sparky_new.png"}
                                    alt='Brand Logo'
                                    width={100}
                                    height={60}
                                /> </span>
                                Sparky

                            </Link>
                        </div>
                        <div className="flex items-center">
                            <NavItems
                                activeItem={activeItem}
                                isMobile={false}
                            />
                            <ThemeSwitch />

                            {/* mobile */}
                            <div className='800px:hidden'>
                                <HiOutlineMenuAlt3
                                    size={25}
                                    className='cursor-pointer dark:text-white text-black'
                                    onClick={() => setOPenSidebar(true)}
                                />
                            </div>
                            <HiOutlineUserCircle
                                size={25}
                                className='hidden 800px:block cursor-pointer dark:text-white text-black'
                                onClick={() => setOpen(true)}
                            />

                        </div>
                    </div>


                </div>
                {/* Mobile sidebar */}
                {openSidebar && (
                    <div className='fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]' onClick={handelClose} id='screen'>
                        <div className='w-[70%] fixed z-[999999999] bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0'>
                            <div className='p-6 text-black dark:text-white'>
                                <div>

                                    <Link href={"/signup"} passHref>Sign up</Link>
                                </div>
                                <div>
                                    <Link href={"/login"} passHref>Log in</Link>
                                </div>
                            </div>
                            <hr />
                            <div className=''>
                                <NavItems activeItem={activeItem} isMobile={true} />
                            </div>
                            <div className='pl-5'>
                                <HiOutlineUserCircle
                                    size={55}
                                    className='cursor-pointer dark:text-white text-black'
                                    onClick={() => setOpen(true)}
                                />

                            </div>
                            <br />
                            <br />
                            <p className='text-[16px] p-4 pl-5 text-center text-black dark:text-white'>
                                &copy; Copyright Sparky Technologies
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {route === "Login" &&
                open && (
                    <CustomModal
                        open={open}
                        setOpen={setOpen}
                        activeItem={activeItem}
                        setRoute={setRoute}
                        component={Login}
                    />
                )
            }
            {route === "Signup" &&
                open && (
                    <CustomModal
                        open={open}
                        setOpen={setOpen}
                        activeItem={activeItem}
                        setRoute={setRoute}
                        component={SignUp}
                    />
                )
            }
            {route === "Verification" &&
                open && (
                    <CustomModal
                        open={open}
                        setOpen={setOpen}
                        activeItem={activeItem}
                        setRoute={setRoute}
                        component={Verification}
                    />
                )
            }

        </div>
    )
}

export default Header; 