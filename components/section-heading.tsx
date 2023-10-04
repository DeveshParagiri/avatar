import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-3xl font-bold capitalize mt-8 mb-8 text-center'>
      {children}
    </h2>
  );
}