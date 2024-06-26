import React, { useEffect, useState } from 'react'
import defaultAvatar from '../../../public/images/anonymousDeafult-Profile-Pitcher.png'
import Image from 'next/image';
import { userAgent } from 'next/server';
import { AiOutlineCamera } from 'react-icons/ai';
import SubmitButton from '../SubmitButton';
import { useUpdateAvatarMutation } from '@/redux/features/user/userApi';
import { useLoadUserQuery } from '@/redux/features/auth/authApi';
import { toast } from 'react-hot-toast';

type Props = {
    user: any;
    avatar: string;
    setAvatar: (avatar: string) => void;
}

const ProfileInfo = ({ user, avatar, setAvatar }: Props) => {
    const [updateAvatar, { isSuccess, error, data }] = useUpdateAvatarMutation();
    const [loadUser, setLoadUser] = useState(false)
    const { } = useLoadUserQuery(undefined, { skip: loadUser ? false : true })

    const imageHandler = async (e: any) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
            console.log(fileReader.result);
            if (fileReader.readyState === 2) {
                const avatar = fileReader.result;
                console.log({ avatar });
                updateAvatar({ avatar });

            }
        }
    }

    useEffect(() => {
        if (isSuccess) {
            setLoadUser(true)
            toast.success(data.message)
            setAvatar(data.user.avatar.url)
        }
        if (error) {
            console.log(error)
        }
    }, [error, isSuccess])

    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <div className='relative'>
                    <Image
                        src={avatar ? avatar : defaultAvatar}
                        alt='avatar'
                        width={120}
                        height={120}
                        className='w-[120px] h-[120px] cursor-pointer border-[3px] rounded-full border-gray-500'
                    />
                    <input type="file"
                        name=''
                        id='avatar'
                        className='hidden'
                        onChange={imageHandler}
                        accept='image/png,image/jpeg,image/jpg,image/webp'
                    />
                    <label htmlFor="avatar">
                        <div className='w-[30px] h-[30px] bg-slate-900 flex rounded-full absolute bottom-2 right-2 items-center justify-center cursor-pointer'>
                            <AiOutlineCamera size={20} fill='#fff' className='z-1' />

                        </div>
                    </label>
                </div>
            </div>
            <div className='w-full flex items-center justify-center mt-2'>
                <h1 className='font-Poppins text-2xl dark:text-white'>{user.name}</h1>
            </div>
            <br />
            <br />
            <div className='mt-5'>

                <form className="max-w-sm mx-auto">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input type="text" id="name" value={user.name} className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
                    </div>
                    <label htmlFor="email" className="block my-4 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input type="text" value={user.email} readOnly id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                    </div>
                    <SubmitButton isLoading={false} value='Update' />
                </form>


            </div>
        </>

    )

}

export default ProfileInfo