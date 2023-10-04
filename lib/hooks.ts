import { useActiveSectionContext } from "@/context/active-section-context";
import {useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import { links } from '@/lib/data';
import { SectionName } from "./types";

type useSectionInViewProps = {
    sectionName: SectionName;

};

export function useSectionInView(sectionName:SectionName, threshold = 0.75){
    const { ref, inView } = useInView({
        threshold: threshold,
      }
    );
    const { setActiveSection, timeOfLastClick } =  useActiveSectionContext();
   
    useEffect(()=>{
        if (inView && Date.now() - timeOfLastClick > 1000 ) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]); 

    return {
        ref,
    }

}