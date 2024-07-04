import React from 'react'
import CoursePlayer from './CoursePlayer'
import { styles } from '@/app/constants/styles'
import { Rating } from '@mui/material'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'

type Props = {
    active: number
    setActive: (active: number) => void
    courseData: any
    handleCourseCreate: any
}

const CoursePreview = ({ active, setActive, courseData, handleCourseCreate }: Props) => {
    const discount = (courseData?.estimatedPrice - courseData?.price) / courseData?.estimatedPrice * 100
    return (
        <div className="w-[90%] m-auto py-5 mb-5">
            <div className='w-full mt-10'>
                <CoursePlayer
                    videoUrl={courseData?.demoUrl}
                    title={courseData?.title}
                />
            </div>
            <div className='flex items-center'>
                <h1 className='pt-5 text-[25px]'>
                    {courseData?.price === 0 ? "Free" : `$${courseData?.price}`}

                </h1>
                <h5 className='pl-3 text-[20px] mt-2 line-through opacity-80'>
                    ${courseData?.estimatedPrice}

                </h5>
                <h4 className='pl-5 pt-4 text-[22px]'>
                    {discount}% Off
                </h4>

            </div>
            <div className='flex items-center'>
                <div className={`${styles.button} !w-[180px] my-3 font-Poppins !bg-[crimson]`}>
                    Buy Now {courseData?.price}

                </div>

            </div>
            <div className='flex items-center'>
                <input type="text"
                    placeholder='Discount Code'
                    className={`${styles.input} 1100px:!w-[60%] 1500px:w-[50%] ml-3 !mt-0`}
                />
                <button className={`${styles.button} ml-3 font-Poppins!bg-[green]!text-[white]`}>
                    Apply
                </button>

            </div>
            <p className='pb-1'>Source code included</p>
            <p className='pb-1'>Full lifetime access</p>
            <p className='pb-1'>Certificate on completion</p>
            <p className='pb-3 800px:pb-1'>Premium Support</p>

            <div className='w-full'>
                <div className='w-full 800px:pr-4'>
                    <h1 className='text-[25px] font-Poppins font-[600]'>
                        {courseData?.name}

                    </h1>
                    <div className='flex items-center justify-between pt-3'>
                        <div className='flex items-center'>
                            <Rating value={0} size='small' readOnly />
                            <p className='pl-2 text-[14px]'>(0) Reviews</p>
                        </div>
                        <h5>
                            0 Students
                        </h5>

                    </div>
                    <br />
                    <h1 className='text-[25px] font-Poppins font-[600]'>
                        What you will learn from this course

                    </h1>

                </div>
                {
                    courseData.benefits.map((value: any, i: number) => {
                        <div className='w-full flex 800px:items-center py-2' key={i}>
                            <div className='w-[15px] mr-1'>
                                <IoCheckmarkDoneOutline size={20} />

                            </div>
                            <p className='pl-2'>{value.title}</p>

                        </div>
                    })
                }
                <br />
                <br />
                <h1 className='text-[25px] font-Poppins font-[600]'>
                    Prerequisites
                </h1>
                {
                    courseData.prerequisites.map((value: any, i: number) => {
                        <div className='w-full flex 800px:items-center py-2' key={i}>
                            <div className='w-[15px] mr-1'>
                                <IoCheckmarkDoneOutline size={20} />

                            </div>
                            <p className='pl-2'>{value.title}</p>

                        </div>
                    })
                }

                <div className='w-full'>
                    <h1 className='text-[25px] font-Poppins font-[600]'>
                        Course Details

                    </h1>
                    <p className='text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden'>
                        {courseData.description}
                    </p>
                </div>
                <br />

            </div>
            <div className='flex w-full items-center justify-between'>
                <button className={`${styles.button} w-[150px] mx-auto mr-2 mt-12`} onClick={() => setActive(active - 1)}>
                    Previous
                </button>
                <button className={`${styles.button} w-[150px] mx-auto mt-12`} onClick={() => handleCourseCreate()}>
                    Create
                </button>
            </div>

        </div>
    )
}

export default CoursePreview