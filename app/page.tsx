'use client'

import React, {FC, useState} from 'react'
import Heading from './utils/Heading'
import Header from './components/Header'

type Props = {}

const Page = (props: Props) => {
  const [open, setOpen] = useState(false)
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
      />

    </div>
  )
}

export default Page