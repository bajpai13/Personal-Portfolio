import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
        <div className='flex gap-5 text-8xl font-semibold sm:text-5xl'>
            <h1 className='text-secondary s'>S</h1>
            <h1 className='text-tertiary b'>B</h1>
        </div>
    </div>
  )
}

export default Loader