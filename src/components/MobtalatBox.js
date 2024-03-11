import React, { useEffect } from 'react'
import "../Styles/MT.css"
export default function MobtalatBox(props) {
  return (
<div
  className="relative rounded-lg group mt-20 cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5"
>
  <div className="">
    <div
      className="image group-hover:scale-110 w-full h-60 duration-500"
    >
        <img className='h-[100%] object-cover m-auto' src={props.image} />
    </div>
    <div
      className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >

      <span className="text-xl font-bold">{props.title}</span>
      <p style={{direction:"rtl"}} className="group-hover:opacity-100 w-56 text-[#fbb400] duration-500 opacity-0">
       {props.direction}
      </p>
    </div>
  </div>
</div>

  )
}
