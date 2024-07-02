'use client'
import React, { useState } from 'react'
import CourseInfo from './CourseInfo'
import CourseOptions from './CourseOptions'
import CourseData from './CourseData'
import CourseContent from './CourseContent'

type Props = {}

const CreateCourse = (props: Props) => {
    const [active, setActive] = useState(0)
    const [courseInfo, setCourseInfo] = useState({
        name: "",
        description: "",
        price: "",
        estimatedPrice: "",
        tags: "",
        level: "",
        demoUrl: "",
        thumbnail: ""
    })
    const [benefits, setBenefits] = useState([{ title: "" }])
    const [prerequisites, setPrerequisites] = useState([{ title: "" }])
    const [courseContent, setCourseContent] = useState([
        {
            videoUr: "",
            title: "",
            videoSection: "Untitled Section",
            description: "",
            videoLength: "",
            links: [
                {
                    title: "",
                    url: ""
                }
            ]
        }
    ]

    )
    const [courseData, setCourseData] = useState({})
    const handleSubmit = async () => {
        // format benefits array
        const formattedBenefits = benefits.map((benefit) => ({ title: benefit.title }))
        // format prerequisites array
        const formattedPrerequisites = prerequisites.map((prerequisite) => ({ title: prerequisite.title }))
        // format course content array
        const formattedCourseContent = courseContent.map((section) => ({
            videoUrl: section.videoUr,
            title: section.title,
            videoSection: section.videoSection,
            description: section.description,
            videoLength: section.videoLength,
            links: section.links.map((link) => ({ title: link.title, url: link.url }))
        }))
        // format course data
        const formattedCourseData = {
            name: courseInfo.name,
            description: courseInfo.description,
            price: courseInfo.price,
            estimatedPrice: courseInfo.estimatedPrice,
            tags: courseInfo.tags.split(','),
            level: courseInfo.level,
            demoUrl: courseInfo.demoUrl,
            thumbnail: courseInfo.thumbnail,
            benefits: formattedBenefits,
            prerequisites: formattedPrerequisites,
            courseContent: formattedCourseContent
        }
        setCourseData(formattedCourseData)
        console.log(formattedCourseData)
    }
    return (
        <div className='w-full flex min-h-screen'>
            <div className='w-[80%]'>
                {
                    active === 0 && (
                        <CourseInfo
                            courseInfo={courseInfo}
                            setCourseInfo={setCourseInfo}
                            active={active}
                            setActive={setActive}
                        />
                    )
                }
                {
                    active === 1 && (
                        <CourseData
                            courseInfo={courseInfo}
                            setCourseInfo={setCourseInfo}
                            benefits={benefits}
                            setBenefits={setBenefits}
                            prerequisites={prerequisites}
                            setPrerequisites={setPrerequisites}
                            active={active}
                            setActive={setActive}
                        />
                    )
                }
                {
                    active === 2 && (
                        <CourseContent
                            courseContent={courseContent}
                            setCourseContent={setCourseContent}
                            active={active}
                            setActive={setActive}
                            handleSubmit={handleSubmit}
                        />
                    )
                }

            </div>
            <div className='w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0'>
                <CourseOptions active={active} setActive={setActive} />

            </div>

        </div>
    )
}

export default CreateCourse