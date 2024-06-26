import React from 'react'
import { styles } from '../constants/styles'

type Props = {
    isLoading: boolean
    value: string
}

const SubmitButton = ({ isLoading, value = "Login" }: Props) => {
    return (
        <div className='w-full mt-5'>
            {
                isLoading ?
                    <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
                        <div className="flex justify-center items-center h-full">
                            <div className="top-0 left-0 h-20 w-20 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
                        </div>
                    </div>
                    : <input type="submit" value={value} className={`${styles.button}`} />
            }
        </div>
    )
}

export default SubmitButton