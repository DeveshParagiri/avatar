'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Skills() {
    const { ref } = useSectionInView('Skills',1);
  
    return (
      <section
        id='skills'
        ref={ref}
        className='mb-10 max-w-[53rem] scroll-mt-28 text-center sm:mb-10'
      >
        <SectionHeading>My skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
          {skillsData.map((skill, index) => (
            <motion.li
              className='bg-white borderBlack rounded-xl px-5 py-3 dark:text-white/80 dark:bg-white/10'
              key={index}
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    );
  }