'use client'

import React, { FC, useState } from 'react'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Hero from '../components/Hero'

type Props = {}

const AppLayout = (props: Props) => {
    const [open, setOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(0)
    const [route, setRoute] = useState('Login')
    return (
        <div>
            <Heading
                title='Sparky E-learning'
                description='E-learning Platform'
                keywords='Programming, Technology, Frontend, Backend, Devops, Cloud'
            />

            <Header
                open={open}
                setOpen={setOpen}
                activeItem={activeItem}
                setRoute={setRoute}
                route={route}
            />
        </div>
    )
}

export default AppLayout