import React from 'react'

const Brand = ({text, source}) => {
  return (
    <div className='flex flex-col items-center'>
        <img src={source} alt="" className='w-20 h-16'/>
        <p className='font-medium text-xl'>{text}</p>
    </div>
  )
}

export default Brand