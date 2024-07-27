import React from 'react'

function SectionTitle ({
    title,
}) {
  return (
    <div className='flex gap-10 items-center py-36 sm:py-10' >
        <div className='w-48 h-[1px] bg-tertiary'></div>
        <h1 className='text-6xl text-secondary font-light sm:text-5xl'>{title}</h1>
        <div className='w-96 h-[1px] bg-tertiary'></div>
    </div>
  )
}

export default SectionTitle