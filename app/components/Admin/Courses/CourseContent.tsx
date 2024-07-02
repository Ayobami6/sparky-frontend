import { styles } from '@/app/constants/styles';
import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { BsLink45Deg, BsPencil } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

type Props = {
    active: number;
    setActive: (value: number) => void;
    courseContent: any;
    setCourseContent: (value: any) => void;
    handleSubmit: any;
}

const CourseContent = ({ active, setActive, courseContent, setCourseContent, handleSubmit }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(Array(courseContent.length).fill(false));
    const [activeSection, setActiveSection] = useState(1)

    const handleContentSubmit = (e: any) => {
        e.preventDefault()

    }
    const handleCollapsedToggle = (index: number) => {
        const updatedCollapsed = [...isCollapsed]
        updatedCollapsed[index] = !updatedCollapsed[index]
        setIsCollapsed(updatedCollapsed)
    }

    const handleRemoveLink = (index: number, idx: number) => {
        const updatedContent = [...courseContent]
        updatedContent[index].links = updatedContent[index].links.filter((_: any, i: number) => i !== idx)
        setCourseContent(updatedContent)
    }
    const handleAddLink = (index: number) => {
        const updatedContent = [...courseContent]
        updatedContent[index].links.push({ title: "", url: "" })
        setCourseContent(updatedContent)
    }
    return (
        <div className='w-[80%] m-auto mt-24 p-3'
        >
            <form onSubmit={handleContentSubmit}>
                {courseContent?.map((section: any, index: number) => {
                    const showSection = index === 0 || section.videoSection !== courseContent[index - 1].videoSection;
                    return (
                        <>
                            <div className={`w-full dark:bg-slate-900 shadow-lg p-4 ${showSection ? "mt-4" : "mb-0"}`}>
                                {
                                    showSection && (
                                        <>
                                            <div className='flex w-full items-center'>
                                                <input type="text" className={`text-[20px] ${styles.input} bg-inherit outline-none border-0 ${section.videoSection === "Untitled Section" ? "w-[170px]" : "w-min"} font-Poppins cursor-pointer dark:text-white text-black`}
                                                    value={section.videoSection}
                                                    onChange={(e) => {
                                                        const updatedContent = [...courseContent]
                                                        updatedContent[index].videoSection = e.target.value;
                                                        setCourseContent(updatedContent);
                                                    }}
                                                />
                                                <BsPencil className='cursor-pointer ml-1 dark:text-white text-black' />
                                                <br />

                                            </div>

                                        </>
                                    )
                                }
                                <div className='flex w-full items-center justify-between my-0'>
                                    {
                                        isCollapsed[index + 1] ? (
                                            <>
                                                {
                                                    section.title ? (
                                                        <p className='font-Poppins dark:text-white text-black'>
                                                            {index + 1}. {section.title}


                                                        </p>

                                                    ) : <></>
                                                }
                                            </>
                                        ) : (
                                            <div></div>

                                        )
                                    }
                                    <div className="flex items-center">
                                        <AiOutlineDelete className={`dark:text-white text-[20px] mr-2 text-black ${index > 0 ? "cursor-pointer" : "cursor-no-drop"}`}
                                            onClick={() => {
                                                setCourseContent([...courseContent.slice(0, index), ...courseContent.slice(index + 1)])

                                            }}
                                        />
                                        <MdOutlineKeyboardArrowDown
                                            className={`dark:text-white text-[20px] cursor-pointer`}
                                            fontSize="large"
                                            onClick={() => {
                                                handleCollapsedToggle(index)
                                            }}
                                            style={{

                                                transform: `rotate(${isCollapsed[index] ? '180deg' : '0deg'})`,
                                            }}
                                        />
                                    </div>

                                </div>
                                {

                                    isCollapsed[index] ? (
                                        <>
                                            <div className='my-3'>
                                                <label htmlFor="" className={styles.label}>Video Title</label>
                                                <input type="text" placeholder='Title' className={`${styles.input}`}
                                                    value={section.title}
                                                    onChange={(e) => {
                                                        const updatedContent = [...courseContent]
                                                        updatedContent[index].title = e.target.value;
                                                        setCourseContent(updatedContent);
                                                    }}
                                                />

                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor="" className={styles.label}>Video URL</label>
                                                <input type="text" placeholder='Video Url' className={`${styles.input}`}
                                                    value={section.videoUrl}
                                                    onChange={(e) => {
                                                        const updatedContent = [...courseContent]
                                                        updatedContent[index].videoUrl = e.target.value;
                                                        setCourseContent(updatedContent);
                                                    }}
                                                />

                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor="" className={styles.label}>Video Description</label>
                                                <textarea rows={8} cols={30} placeholder='Video Description' className={`${styles.input} !h-min py-2`}
                                                    value={section.description}
                                                    onChange={(e) => {
                                                        const updatedContent = [...courseContent]
                                                        updatedContent[index].description = e.target.value;
                                                        setCourseContent(updatedContent);
                                                    }}
                                                />
                                                <br />
                                            </div>

                                            <div className='mb-3'>
                                                {
                                                    section.links.map((link: any, idx: number) => {
                                                        return (
                                                            <>
                                                                <div className='mb-3 block'>
                                                                    <div className="w-full flex items-center justify-between">
                                                                        <label htmlFor="" className={styles.label}>Link Title {idx + 1}</label>
                                                                        <AiOutlineDelete
                                                                            className={`${idx === 0 ? "cursor-no-drop" : "cursor-pointer"} text-black dark:text-white text-[20px]`}
                                                                            onClick={() => {
                                                                                idx === 0 ? null : handleRemoveLink(index, idx);
                                                                            }}

                                                                        />

                                                                    </div>
                                                                    <input type="text" placeholder='Link title' className={`${styles.input}`}
                                                                        value={link.title}
                                                                        onChange={(e) => {
                                                                            const updatedContent = [...courseContent]
                                                                            updatedContent[index].links[idx].title = e.target.value;
                                                                            setCourseContent(updatedContent);
                                                                        }}
                                                                    />
                                                                    <input type="text" placeholder='Link Url' className={`${styles.input}`}
                                                                        value={link.url}
                                                                        onChange={(e) => {
                                                                            const updatedContent = [...courseContent]
                                                                            updatedContent[index].links[idx].url = e.target.value;
                                                                            setCourseContent(updatedContent);
                                                                        }}
                                                                    />


                                                                </div>
                                                                <br />

                                                            </>

                                                        )

                                                    })

                                                }
                                                <div className='inline-block mb-4'>
                                                    <p className='flex items-center text-[18px] dark:text-white text-black cursor-pointer' onClick={() => {
                                                        handleAddLink(index);
                                                    }}>
                                                        <BsLink45Deg className='mr-2' /> Add Link

                                                    </p>

                                                </div>
                                            </div>
                                        </>

                                    ) : (
                                        <></>
                                    )
                                }

                            </div>
                        </>
                    )

                })}
            </form>
        </div>
    )
}

export default CourseContent