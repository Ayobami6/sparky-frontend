'use client'
import React from 'react'
import { styles } from '@/app/constants/styles'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { toast } from 'react-hot-toast';

type Props = {
    courseInfo: any;
    setCourseInfo: (courseInfo: any) => void;
    setActive: (active: number) => void;
    active: number;
    benefits: { title: string }[]
    setBenefits: (benefits: { title: string }[]) => void;
    prerequisites: { title: string }[]
    setPrerequisites: (prerequisites: { title: string }[]) => void;
}

const CourseData = ({
    courseInfo,
    setCourseInfo,
    setActive,
    active,
    benefits,
    setBenefits,
    prerequisites,
    setPrerequisites
}: Props) => {
    const handleBenefitChange = (index: number, value: any) => {
        const updatedBenefits = [...benefits]
        updatedBenefits[index].title = value
        setBenefits(updatedBenefits)
    };
    const handlePrerequisiteChange = (index: number, value: any) => {
        const updatedPrerequisites = [...prerequisites]
        updatedPrerequisites[index].title = value
        setPrerequisites(updatedPrerequisites)

    }
    const handleNext = () => {
        if (benefits[benefits.length - 1].title !== "" && prerequisites[prerequisites.length - 1].title !== "") {
            setActive(active + 1)
        } else {
            toast.error('Please at least one benefit and prerequisites')
        }
    };
    return (
        <div className='w-[80%] m-auto mt-24 block'>
            <div>
                <label htmlFor="benefits" className={`${styles.label}`}>
                    Benefits
                </label>
                <br />
                {
                    benefits.map((benefit, index) => (
                        <div key={index} className='flex items-center'>
                            <input type="text" value={benefit.title}
                                name='benefit'
                                className={`${styles.input}`}
                                placeholder='Enter Benefits'
                                onChange={(e) => handleBenefitChange(index, e.target.value)} />
                        </div>
                    ))
                }
                <AddCircleIcon
                    className='cursor-pointer mt-4 dark:text-white text-black w-[30px]'
                    onClick={() => setBenefits([...benefits, { title: '' }])} />
            </div>
            <br />
            <div>
                <label htmlFor="prerequisites" className={`${styles.label}`}>
                    Prerequisites
                </label>
                <br />
                {
                    prerequisites.map((benefit, index) => (
                        <div key={index} className='flex items-center'>
                            <input type="text" value={benefit.title}
                                name='prerequisite'
                                className={`${styles.input}`}
                                placeholder='Enter Prerequisites'
                                onChange={(e) => handlePrerequisiteChange(index, e.target.value)} />
                        </div>
                    ))
                }
                <AddCircleIcon
                    className='cursor-pointer mt-4 dark:text-white text-black w-[30px]'
                    onClick={() => setPrerequisites([...prerequisites, { title: '' }])} />
            </div>
            <div className='flex w-full items-center justify-between'>
                <button className={`${styles.button} w-[150px] mx-auto mt-12`} onClick={() => setActive(active - 1)}>
                    Previous
                </button>
                <button className={`${styles.button} w-[150px] mx-auto mt-12`} onClick={() => handleNext()}>
                    Next
                </button>
            </div>

        </div>
    )
}

export default CourseData