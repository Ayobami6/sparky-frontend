import React, { useState } from 'react'
import SubmitButton from '../SubmitButton'
import * as Yup from 'yup'
import { styles } from '@/app/constants/styles'
import { useFormik } from 'formik'
import { useChangePasswordMutation } from '@/redux/features/user/userApi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

type Props = {}

const schema = Yup.object().shape({
    oldPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Old Password is required'),
    newPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('New Password is required'),
    newPasswordConfirm: Yup.string()
        .oneOf([Yup.ref('newPassword'), ""], 'Passwords must match')
        .required('Confirm password is required')
})

const ChangePassword = (props: Props) => {
    const [show, setShow] = useState(false)
    const [changePassword, { isSuccess, data, error, isLoading }] = useChangePasswordMutation()

    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            newPasswordConfirm: ''
        },
        validationSchema: schema,
        onSubmit: async ({ oldPassword, newPassword }) => {
            const data = {
                oldPassword,
                newPassword
            }
            await changePassword(data);

        }
    })
    const { errors, touched, values, handleChange, handleSubmit } = formik;
    return (
        <>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className='w-full mt-5 relative mb-1'>
                    <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Old Password</label>
                    <div className="">
                        <input type={!show ? "password" : "text"} name='oldPassword' value={values.oldPassword} onChange={handleChange} id='oldPassword' placeholder='Enter your old password' className={`${errors.oldPassword && touched.oldPassword && "border-red-500"} ${styles.input} `} />
                        {
                            !show ? (
                                <AiOutlineEyeInvisible className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white" size={20} onClick={() => setShow(true)} />
                            ) : (
                                <AiOutlineEye className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white" size={20} onClick={() => setShow(false)} />
                            )
                        }

                    </div>

                </div>
                {errors.oldPassword && touched.oldPassword && <p className={`${styles.error}`}>{errors.oldPassword}</p>}
                <div className='w-full mt-5 relative mb-1'>
                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter New Password</label>
                    <div className="">
                        <input type={!show ? "password" : "text"} name='newPassword' value={values.newPassword} onChange={handleChange} id='newPassword' placeholder='Enter your new password' className={`${errors.newPassword && touched.newPassword && "border-red-500"} ${styles.input} `} />
                        {
                            !show ? (
                                <AiOutlineEyeInvisible className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white" size={20} onClick={() => setShow(true)} />
                            ) : (
                                <AiOutlineEye className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white" size={20} onClick={() => setShow(false)} />
                            )
                        }

                    </div>

                </div>
                {errors.newPassword && touched.newPassword && <p className={`${styles.error}`}>{errors.newPassword}</p>}
                <div className='w-full mt-5 relative mb-1'>
                    <label htmlFor="newPasswordConfirm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm New Password</label>
                    <div className="">
                        <input type={!show ? "password" : "text"} name='newPasswordConfirm' value={values.newPasswordConfirm} onChange={handleChange} id='newPasswordConfirm' placeholder='Confirm your new password' className={`${errors.newPasswordConfirm && touched.newPasswordConfirm && "border-red-500"} ${styles.input} `} />
                        {
                            !show ? (
                                <AiOutlineEyeInvisible className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white" size={20} onClick={() => setShow(true)} />
                            ) : (
                                <AiOutlineEye className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white" size={20} onClick={() => setShow(false)} />
                            )
                        }

                    </div>

                </div>
                {errors.newPasswordConfirm && touched.newPasswordConfirm && <p className={`${styles.error}`}>{errors.newPasswordConfirm}</p>}


                <SubmitButton isLoading={isLoading} value='Change Password' />
            </form>

        </>
    )
}

export default ChangePassword