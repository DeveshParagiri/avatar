"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience",0.5);


  return ( 
    <section ref={ref} id="experience" className="scroll-mt-28 mb-24">
    <SectionHeading>My experiences</SectionHeading>
    <div className="max-w-[40rem] leading-8">
            {
                experiencesData.map((item,index) => (
                    <React.Fragment key={index}>
                      <p className="text-center font-extrabold mt-20 sm:text-xl">{item.role} @ {item.company}</p>
                      <p className="text-center font-semibold mb-5">{item.date} | {item.location}</p>
                      <p className="text-center font-normal">{item.description}</p>
                    </React.Fragment>
                ))}
        </div>
    </section>
  );
}