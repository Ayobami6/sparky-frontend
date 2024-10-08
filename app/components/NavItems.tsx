import { url } from 'inspector'
import Link from 'next/link'
import React from 'react'

type Props = {
    activeItem: number,
    isMobile: boolean,
}

export const navItems = [
    {
        name: "Home",
        url: '/'
    },
    {
        name: "Courses",
        url: '/courses'
    },
    {
        name: "About",
        url: '/about'
    },
    {
        name: "Policy",
        url: '/policy'
    },
    {
        name: "FAQ",
        url: '/faq'
    }
]

const NavItems = ({ activeItem, isMobile }: Props) => {
    return (
        <>
            <div className="hidden 800px:flex">
                {
                    navItems && navItems.map((item, index) => (
                        <Link href={item.url} key={index} passHref
                        >
                            <span className={`${activeItem === index ? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-black"} text-[18px] px-6 font-Poppins font-[400]`}>
                                {item.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
            {
                isMobile && (
                    <div className='800px:hidden mt-5' >
                        <div className="w-full text-center py-6">
                            {
                                navItems && navItems.map((item, index) => (
                                    <div key={index} className='flex justify-start py-3'>
                                        <Link href={"/"} passHref key={index}
                                        >
                                            <span className={`${activeItem === index ? "dark:text-yellow-200 text-[crimson]" : "dark:text-white text-black"} text-[18px] px-6 font-Poppins font-[400]`}>
                                                {item.name}
                                            </span>

                                        </Link>

                                    </div>

                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default NavItems