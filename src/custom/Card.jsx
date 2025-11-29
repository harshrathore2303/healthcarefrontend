import React from 'react'
import Button from './Button'

const Card = ({title, description, source}) => {
  return (
    <div className='w-[270px] h-[300px] bg-[#EDF9F6] p-4 rounded-2xl flex flex-col justify-between mx-4'>
        <div className='w-14 h-14 bg-[#855FCE] rounded-full flex justify-center items-center'>
            <img loading="lazy" src={source} alt="" className='w-7 h-7'/>
        </div>
        <h3 className='text-[18px] font-medium'>{title}</h3>
        <p className='text-[#6C87AE] font-thin'>{description}</p>
        <Button className='w-[220px] h-[43px] rounded-full bg-blue-600 text-white'>Buy Now</Button>
    </div>
  )
}

export default Card