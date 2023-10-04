'use client';
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

    const { ref } = useSectionInView('About', 1);

    return <motion.section ref={ref} className='max-w-[50rem] text-center leading-8 scroll-mt-28' id='about'> 
        
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
            I'm a rising Junior at the <a href='www.umd.edu'>University of Maryland, College Park</a> majoring in{' '}
            <span className='font-medium'>Computer Science</span>. My interests mainly include Machine Learning/Artifical Intelligence, Data Science, Generative AI based applications, Web Development, and building apps.</p>

        <p className='mb-10'>
            <span className='font-bold'>When I'm not coding</span>, I enjoy working out, playing
            soccer, listening to <a href='https://open.spotify.com/playlist/1XSlVHDwQypugKagP8RC6l?si=b6440867cab64142'>old english songs</a>, and skateboarding. I &hearts;{' '}
            <span className='font-medium'>traveling</span> and am currently
            on a gap semester{' '}
            <span className='font-medium'>traveling across India,</span>
        </p>
    </motion.section>
}
