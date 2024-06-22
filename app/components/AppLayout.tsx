'use client'
import { useSelector, useDispatch } from 'react-redux';
import React, { FC, useState, useEffect } from 'react'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useAppContext } from '@/pages/ContextProvider'
import { setOpen, setClose, setRoute } from '@/redux/features/modal/modalSlice';

type Props = {}

export interface ModalStateProps {
    modal: {
        open: boolean
        route: string
    }
}

const AppLayout = (props: Props) => {
    // const { open, setOpen } = useAppContext()
    const { open, route } = useSelector((state: ModalStateProps) => state.modal)
    const [activeItem, setActiveItem] = useState(0)


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