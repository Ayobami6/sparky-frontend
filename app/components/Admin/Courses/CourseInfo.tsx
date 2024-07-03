import React, { useState } from 'react'
import { styles } from "@/app/constants/styles"
import SubmitButton from '@/app/components/SubmitButton'

type Props = {
    courseInfo: any;
    setCourseInfo: (courseInfo: any) => void;
    setActive: (active: number) => void;
    active: number;


}

const CourseInfo = ({ courseInfo, setCourseInfo, setActive, active }: Props) => {
    const [dragging, setDragging] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setActive(active + 1);
    }
    const handleFileChange = (e: any) => {
        e.preventDefault()
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setCourseInfo({ ...courseInfo, thumbnail: reader.result });
                }
            };
        }

    }
    const handleDragStart = (e: any) => {
        e.preventDefault();
        setDragging(true)
    }
    const handleDragEnd = (e: any) => {
        e.preventDefault();
        setDragging(false)

    }
    const handleDrop = (e: any) => {
        e.preventDefault();
        setDragging(false)
        const file = e.dataTransfer.files[0]
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setCourseInfo({ ...courseInfo, thumbnail: reader.result });
                }
            };
        }
    }
    return (
        <div className="w-[80%] m-auto mt-24">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description" className={`${styles.label}`}>
                        Name
                    </label>
                    <input type="text" name='' required value={courseInfo.name} onChange={(e: any) => setCourseInfo({ ...courseInfo, name: e.target.value })} id='email' placeholder='Course Name' className={`${styles.input}`} />
                </div>
                <br />
                <div>
                    <label htmlFor="description" className={`${styles.label}`}>
                        Course Description
                    </label>
                    <textarea cols={30} rows={10} name='' value={courseInfo.description} onChange={(e: any) => setCourseInfo({ ...courseInfo, description: e.target.value })} id='email' placeholder='Course Description' className={`${styles.input} !h-min py-2`} />
                </div>
                <br />
                <div className="w-full flex justify-between">
                    <div className='w-[45%]'>
                        <label htmlFor="description" className={`${styles.label}`}>
                            Price
                        </label>
                        <input type="number" name='' value={courseInfo.price} onChange={(e: any) => setCourseInfo({ ...courseInfo, price: e.target.value })} id='price' placeholder='25' className={`${styles.input}`} />

                    </div>
                    <div className='w-[50%]'>
                        <label htmlFor="description" className={`${styles.label}`}>
                            Estimated Price
                        </label>
                        <input type="number" name='' value={courseInfo.estimatedPrice} onChange={(e: any) => setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })} id='ex-price' placeholder='25' className={`${styles.input}`} />

                    </div>

                </div>
                <br />
                <div>
                    <label htmlFor="description" className={`${styles.label}`}>
                        Tags
                    </label>
                    <input type="text" name='' value={courseInfo.tags} onChange={(e: any) => setCourseInfo({ ...courseInfo, tags: e.target.value })} id='tags' placeholder='tags seperated by commma' className={`${styles.input}`} />
                </div>
                <br />
                <div className="w-full flex justify-between">
                    <div className='w-[45%]'>
                        <label htmlFor="description" className={`${styles.label}`}>
                            Course Level
                        </label>
                        <input type="text" name='' value={courseInfo.level} onChange={(e: any) => setCourseInfo({ ...courseInfo, level: e.target.value })} id='price' placeholder='25' className={`${styles.input}`} />

                    </div>
                    <div className='w-[50%]'>
                        <label htmlFor="description" className={`${styles.label}`}>
                            Demo Url
                        </label>
                        <input type="text" name='' value={courseInfo.demoUrl} onChange={(e: any) => setCourseInfo({ ...courseInfo, demoUrl: e.target.value })} id='ex-price' placeholder='25' className={`${styles.input}`} />

                    </div>

                </div>
                <br />
                <div className="w-full">
                    <input type="file"
                        accept='image/*'
                        id='file'
                        className='hidden'
                        onChange={handleFileChange}
                    />
                    <label htmlFor="file"
                        className={`w-full min-h-[10h] dark:border-white border-white p-3 border flex items-center justify-center ${dragging ? "bg-blue-500" : "bg-transparent"}`}
                        onDragOver={handleDragStart}
                        onDragLeave={handleDragEnd}
                        onDrop={handleDrop}
                    >
                        {
                            courseInfo.thumbnail ? <img src={courseInfo.thumbnail} alt="thumbnail" className="w-full h-full object-cover" /> : <span className="text-center text-gray-500">Drag and drop an image here or click to select a file</span>
                        }

                    </label>
                </div>
                <br />
                <div className='w-full flex items-center justify-end'>
                    <SubmitButton isLoading={false} value={"Next"} />

                </div>
                <br /><br />

            </form>

        </div>
    )
}

export default CourseInfo