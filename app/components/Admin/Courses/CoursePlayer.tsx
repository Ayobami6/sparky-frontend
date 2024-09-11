import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiBaseUrl } from '@/app/constants/constants'

type Props = {
    videoUrl: string;
    title: string;
}

const CoursePlayer = ({ videoUrl, title }: Props) => {
    const [videoData, setVideoData] = useState({
        otp: "",
        playbackInfo: "",
    })
    useEffect(() => {
        axios.post(`${apiBaseUrl}course/generate-videoUrl`, {
            videoId: videoUrl
        }).then((response) => {
            setVideoData(response.data)
        }).catch((error) => {
            console.error(error)
        });
    }, [videoUrl]);
    return (
        <div style={{ paddingTop: "41%", position: "relative" }}>
            {
                videoData.otp && videoData.playbackInfo !== "" && (
                    <iframe
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "90%",
                            border: "0",
                        }}
                        title={title}
                        src={`https://player.vdocipher.com/v2/?otp=${videoData.otp}&playbackInfo=${videoData.playbackInfo}&player=xoovbs9fAWbpd5V4`}
                        allow="encrypted-media"
                        allowFullScreen={true}
                        id="player1"
                    />
                )
            }

        </div>
    )
}

export default CoursePlayer