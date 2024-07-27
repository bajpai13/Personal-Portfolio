import React from 'react'

function Footer() {
  return (
    <div className='py-10'>
        <div className='h-[1px] w-full bg-gray-700'></div>
        <div className='flex items-center justify-center flex-col mt-10 opacity-80'>
            <h1 className='text-tertiary'>Designed By</h1>
            <h1 className='text-tertiary'>
                <span className='text-white'>Sameer Bajpai</span>
            </h1>
        </div>
    </div>
  )
}

export default Footer