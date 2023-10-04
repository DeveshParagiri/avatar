'use client';

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin, BsMedium } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home',0.5);

  return (
    <section ref={ref} className='mb-10 max-w-[50rem] text-center'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
            <motion.div>
                <Image
                src='/pfp.png'
                alt='Devesh portrait'
                width='200'
                height='200'
                quality='95'
                priority={true}
                className='h-[10rem] w-[10rem] rounded-full object-cover 
                border-[0.35rem] border-white shadow-xl'/>
            </motion.div>
            </div>
        </div>
        
        <motion.h1
            className='mb-10 mt-4 px-4 font-medium !leading-[1.5] sm:text-4xl'        >
            Hey! I'm <span className='font-bold'>Dev,</span> an{' '}
            <span className='font-bold'>undergrad @ UMD</span> passionate{' '}
            about all things <span className='font-bold'>tech.</span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>

             <a className="group bg-gray-900 text-white px-7 py-3 flex items-center 
             gap-2 rounded-full outline-none focus:scale-[1.03] hover:scale-[1.03] active:scale-103 
             hover:bg-gray-950 transitio"
             href='mailto:mail@devesh.paragiri@gmail.com'>
                Contact
            <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
            </a>

            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full 
            outline-none focus:scale-[1.03] hover:scale-[1.03] active:scale-103 transition 
            cursor-pointer border-black/10 dark:bg-white/10'
             href='https://drive.google.com/file/d/1im_KSNc7o8Ts6qkspwquZlqeaeJ9eeAp/view?pli=1' target='_blank'>
                Résumé 
            <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
            </a>

            <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 items-center gap-2 rounded-full 
          focus:scale-[1.03] hover:scale-[1.03] active:scale-103 transition cursor-pointer border-black/10 dark:bg-white/10  dark:text-white/60'
          href='https://linkedin.com/in/devesh-paragiri'
          target='_blank'
            >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 items-center gap-2 rounded-full 
          focus:scale-[1.03] hover:scale-[1.03] active:scale-103 transition cursor-pointer border-black/10 dark:bg-white/10  dark:text-white/60'
          href='https://github.com/deveshparagiri'
          target='_blank'
        >
          <FaGithubSquare />
        </a>

        <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 flex flex-row items-center gap-2 rounded-full 
          focus:scale-[1.03] hover:scale-[1.03] active:scale-103 transition cursor-pointer border-black/10 dark:bg-white/10  dark:text-white/60'
          href='https://medium.com/@devesh.paragiri'
          target='_blank'
        >
          <BsMedium />
        </a>
        </motion.div>
    </section>
  )
}
