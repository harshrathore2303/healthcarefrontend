import React from 'react'
import Button from './Button'

const Detail = ({source, title, subtitle, description, index}) => {

  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid grid-cols-2 gap-6 my-10 items-center ${
        isEven ? "" : "flex-row-reverse"
      }`}
    >
      <div className={`${isEven ? "" : "order-2"}`}>
        <img src={source} alt="" className="w-[465px] h-[414px] object-cover" />
      </div>

      <div className={`flex flex-col justify-between mx-5 ${isEven ? "" : "order-1"}`}>
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <span className="font-medium">{subtitle}</span>
        </div>

        <p className="font-light text-xl mt-4">{description}</p>

        <Button className="border w-60 border-[#1A69BE] text-[#1A69BE] p-2 text-xl m-2 hover:bg-[#1A69BE] hover:text-white">
          Learn More
        </Button>
      </div>
    </div>
  )
}

export default Detail