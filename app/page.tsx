'use client'

import React, { FC, useState, useEffect } from 'react'
import Heading from './utils/Heading'
import Header from './components/Header'
import Hero from './components/Hero'
import AppLayout from './components/AppLayout'
import { useAppContext } from '@/pages/ContextProvider'
import { useSelector, useDispatch } from 'react-redux'
import { setOpen } from '@/redux/features/modal/modalSlice'
import { ModalStateProps } from './components/AppLayout'

type Props = {}

const Page = (props: Props) => {
  const { open, route } = useSelector((state: ModalStateProps) => state.modal)

  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className="relative">
      <AppLayout />
      <Hero setOpen={setOpen} />
    </div>
  )
}

export default Page