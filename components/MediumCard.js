import Image from 'next/image'
import React from 'react'

function MediumCard({img, title}) {
  return (
    <div className=' p-4 cursor-pointer hover:scale-110 transform transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image src={img} layout="fill" className=' rounded-xl' />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard