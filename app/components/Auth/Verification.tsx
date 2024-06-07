import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { styles } from '../../constants/styles'
import { useSelector } from 'react-redux'
import { useActivationMutation } from '@/redux/features/auth/authApi';
import { stateProps } from './Login'

type Props = {
    setRoute: (route: string) => void
}

type VerifyNumber = {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
}

type InputRef = React.RefObject<HTMLInputElement>;

const Verification = ({ setRoute }: Props) => {
    const [invalidError, setInvalidError] = useState(false);
    const { activationToken } = useSelector((state: stateProps) => state?.auth);
    const [activation, { isSuccess, error }] = useActivationMutation();

    useEffect(() => {
        if (isSuccess) {
            toast.success("Account activated successfully")
            setRoute("Login")
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
    }, [isSuccess, error, setRoute])
    const inputRefs: InputRef[] = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),

    ];
    const [verifyNumber, setVerifyNumnber] = useState<VerifyNumber>({
        "0": '',
        "1": '',
        "2": '',
        "3": '',
    });
    const verificationHandler = async () => {
        const verificationNumber = Object.values(verifyNumber).join("")
        console.log(verificationNumber)
        if (verificationNumber.length !== 4) {
            setInvalidError(true);
            return
        }
        console.log(activationToken)
        const data = {
            activationToken,
            activation_code: parseInt(verificationNumber)
        }
        await activation(data)
    }
    const handleInputChange = async (index: number, value: string) => {
        setInvalidError(false);
        const verifyNumberNew: VerifyNumber = { ...verifyNumber, [index]: value };
        setVerifyNumnber(verifyNumberNew);
        if (value.length === 1 && index < 3) {
            inputRefs[index + 1].current?.focus();
        } else if (value === "" && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    }
    return (
        <div>
            <h1 className={`${styles.title}`}>
                Verify Your  Account

            </h1>
            <br />
            <div className='w-full flex items-center justify-center mt-2'>
                <div className='w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center'>
                    <VscWorkspaceTrusted size={40} className='text-white' />
                </div>
            </div>
            <br />
            <br />
            <div className='1100px:w-[70%] m-auto flex items-center justify-around'>
                {Object.keys(verifyNumber).map((key, index) => (
                    <input
                        key={index}
                        type='text'
                        className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${invalidError ? "shake border-red-500" : "dark:border-white border-black"}`}
                        value={verifyNumber[key as keyof VerifyNumber]}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        ref={inputRefs[index]}
                        maxLength={1}
                    />
                ))}
            </div>
            <br />
            <br />
            <div className='w-full flex justify-center'>
                <button className={`${styles.button}`} onClick={verificationHandler}>
                    Verify OTP
                </button>

            </div>
            <br />
            <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
                Go back to sign in <span className='text-[#2190ff] pl-1 cursor-pointer' onClick={() => setRoute('Login')}>Sign in</span>
            </h5>
        </div>
    )
}

export default Verification