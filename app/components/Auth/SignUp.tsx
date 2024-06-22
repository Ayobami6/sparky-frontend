import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineEye, AiOutlineEyeInvisible, AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { styles } from '../../constants/styles'
import { useRegisterMutation } from '../../../redux/features/auth/authApi'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'

type Props = {
    setRoute: (route: string) => void
}

// yup scheme for form validation
const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
})

const SignUp = ({ setRoute }: Props) => {
    const [show, setShow] = useState(false);
    const [register, { isSuccess, data, error }] = useRegisterMutation();
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            const message = data?.message || "Registration Successful"
            toast.success(message)
            dispatch(setRoute("Verification") as any)
        }
        if (error) {
            if ("data" in error) {
                const message = error?.data?.message || "Registration Failed"
                console.log(error);
                toast.error(message)
            }
        }
    }, [isSuccess, error])
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: async ({ name, email, password }) => {
            const data = {
                name,
                email,
                password
            }
            await register(data)
        }
    })
    const { errors, touched, values, handleChange, handleSubmit } = formik;
    return (
        <div className='w-full'>
            <h1 className={`${styles.title}`}>
                Sign Up
            </h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="name" className={`${styles.label}`}>
                        Enter your name
                    </label>
                    <input type="text" name='' value={values.name} onChange={handleChange} id='name' placeholder='Enter your name' className={`${errors.name && touched.name && "border-red-500"} ${styles.input} `} />
                    {errors.name && touched.name && <p className={`${styles.error}`}>{errors.name}</p>}
                </div>
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
                <div className='w-full mt-5'>
                    <input type="submit" value="Sign Up" className={`${styles.button}`} />
                </div>
                <br />

                <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
                    or Join with
                </h5>
                <div className='flex justify-center my-3'>
                    <AiFillGithub size={30} className='mr-2 cursor-pointer' />
                    <FcGoogle size={30} className='ml-2 cursor-pointer' />
                </div>
                <div className='flex justify-center font-Poppins dark:text-white'>
                    Already have an account?
                    <p className='text-center ml-2 text-[14px] text-blue-400 cursor-pointer' onClick={() => dispatch(setRoute('Login') as any)}>
                        Login
                    </p>
                </div>

            </form>
            <br />

        </div>
    )
}

export default SignUp