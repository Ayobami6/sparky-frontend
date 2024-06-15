import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineEye, AiOutlineEyeInvisible, AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { styles } from '../../constants/styles'
import { useLoginMutation, useSocialAuthMutation } from '@/redux/features/auth/authApi';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux'
import { signIn, useSession } from 'next-auth/react'
import Loader from '../Loader'
import SubmitButton from '../SubmitButton'

type Props = {
    setRoute: (route: string) => void
    setOpen: (open: boolean) => void
}

export interface stateProps {
    auth: {
        accessToken: string
        refreshToken: string
        activationToken: string
        user: object
    }
}

// yup scheme for form validation
const schema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
})

const Login = ({ setRoute, setOpen }: Props) => {
    const [show, setShow] = useState(false);
    const [login, { isSuccess, error, isLoading }] = useLoginMutation();
    const { accessToken, refreshToken } = useSelector((state: stateProps) => state?.auth)

    // const handleGoogleLogin = () => {
    //     signIn('google');
    // }

    // set access and refreshtoken to local storage
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    // set access and refreshtoken to local storage
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => {
            const data = {
                email,
                password
            }
            await login(data);

        }
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("Login Successfully")
            setOpen(false)
        }
        if (error) {
            if ("data" in error) {
                const message = error?.data?.message || "Activation Failed"
                console.log(error);
                toast.error(message)
            } else {
                console.log("An error occurred!")
            }
        }

    }, [isSuccess, error, setOpen])
    const { errors, touched, values, handleChange, handleSubmit } = formik;
    return (
        <div className='w-full'>
            <h1 className={`${styles.title}`}>
                Login
            </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className={`${styles.label}`}>
                    Enter your Email
                </label>
                <input type="email" name='' value={values.email} onChange={handleChange} id='email' placeholder='Enter your email' className={`${errors.email && touched.email && "border-red-500"} ${styles.input} `} />
                {errors.email && touched.email && <p className={`${styles.error}`}>{errors.email}</p>}
                <div className='w-full mt-5 relative mb-1'>
                    <label htmlFor="password" className={`${styles.label}`}>
                        Enter your Password
                    </label>
                    <input type={!show ? "password" : "text"} name='' value={values.password} onChange={handleChange} id='password' placeholder='Enter your password' className={`${errors.password && touched.password && "border-red-500"} ${styles.input} `} />
                    {
                        !show ? (
                            <AiOutlineEyeInvisible className="absolute bottom-3 right-2 z-1 cursor-pointer" size={20} onClick={() => setShow(true)} />
                        ) : (
                            <AiOutlineEye className="absolute bottom-3 right-2 z-1 cursor-pointer" size={20} onClick={() => setShow(false)} />
                        )
                    }
                    {errors.password && touched.password && <p className={`${styles.error}`}>{errors.password}</p>}
                </div>
                <SubmitButton isLoading={isLoading} />
                <br />

                <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
                    or Join with
                </h5>
                <div className='flex justify-center my-3'>
                    <AiFillGithub size={30} className='mr-2 cursor-pointer text-black dark:text-white' onClick={() => signIn("github")} />
                    <FcGoogle size={30} className='ml-2 cursor-pointer' onClick={() => signIn("google")} />
                </div>
                <div className='flex justify-center text-black dark:text-white font-Poppins'>
                    Don&apos;t have an account?
                    <p className='text-center ml-2 text-[14px] text-blue-400 cursor-pointer' onClick={() => setRoute('Signup')}>
                        Sign up
                    </p>
                </div>

            </form>
            <br />

        </div>
    )
}

export default Login