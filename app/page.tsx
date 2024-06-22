'use client'

import React, { FC, useState } from 'react'
import Heading from './utils/Heading'
import Header from './components/Header'
import Hero from './components/Hero'
import AppLayout from './components/AppLayout'

type Props = {}

const Page = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const [route, setRoute] = useState('Login')
  return (
    <div className="relative">
      <AppLayout />
      <Hero setOpen={setOpen} />
    </div>

  )
}

export default Page