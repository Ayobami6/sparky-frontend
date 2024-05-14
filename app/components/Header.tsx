'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavItems from './NavItems'
import Image from 'next/image';
import ThemeSwitch from './ThemeSwitch'
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from 'react-icons/hi'

type Props = {
    open: boolean
    setOpen: (open: boolean) => void
    activeItem: number
}

const Header = ({open, setOpen, activeItem}: Props) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOPenSidebar] = useState(false);

    if(typeof window !== 'undefined') {
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 85) {
                setActive(true);
            } else {
                setActive(false);
            }
        })
    }
  return (
    <div className='w-full relative'
    >
        <div className={`${active}` ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-dark shadow-xl transition duration-500" : "w-full border-b dark:border-white h-[80px] z-[80] dark:shadow"}>
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
                        <ThemeSwitch/>

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
                        className='cursor-pointer dark:text-white text-black'
                        onClick={() => setOpen(true)}
                        />

                    </div>
                </div>
                
                
            </div>
            {/* Mobile sidebar */}
        </div>
    </div>
  )
}

export default Header; 