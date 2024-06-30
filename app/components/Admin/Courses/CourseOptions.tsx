import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

type Props = {
    active: number;
    setActive: (active: number) => void;
}

const CourseOptions = (props: Props) => {
    const options = [
        "Course Information",
        "Course Options",
        "Course Content",
        "Course Preview",
    ]
    return (
        <div>
            {
                options.map((option: any, index: number) => (
                    <div key={index} className={`cursor-pointer hover:text-[#37a39a] text-black dark:text-white ${props.active === index ? "font-[700]" : "font-[400]"} px-4 py-2 transition duration-150`}>
                        <IoMdCheckmark className={`inline-block mr-2 ${props.active >= index ? "text-[#37a39a]" : "text-[#413e3f]"}`} />
                        {option}
                    </div>
                ))
            }
        </div>
    )
}

export default CourseOptions