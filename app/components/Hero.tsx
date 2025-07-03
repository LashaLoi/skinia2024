'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { BackgroundGradientAnimation } from '@/app/lib/ui/background-gradient-animation'

export default function Hero() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white px-4 pointer-events-none text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="sm:h-[430px] sm:w-[550px] h-[300px] w-[380px] p-4"
        >
          <Image alt="logo" src="/tb.png" height={430} width={550} />
        </motion.div>

        <div className="w-full mx-auto text-center flex flex-col justify-center items-center">
          <p className="text-2xl max-w-[450px] p-2 font-light mt-[-70px]">
            24-26 июля
          </p>
          <p className="text-2xl max-w-[450px] p-2 font-light">
            Господу Богу твоему поклоняйся и Ему одному служи
          </p>
          <p className="mt-2 text-lg ">Матфея 4:10</p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}
