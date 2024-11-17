import React from 'react'
import Image from "next/image";

const ThreeCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mx-9 mt-4">
    <div className="w-full md:w-4/12  ">
      <Image src={"/new.jpg"} alt="No Image" width={800} height={800} className='h-[288px]'/>
    </div>
    <div className=" w-full md:w-4/12  ">
      <Image
        src={"/raja.jpg"}
        alt="No Image"
        width={800}
        height={800}
        className="h-[288px]"
      />
    </div>
    <div className=" w-full md:w-4/12   ">
      <Image
        src={"/card3.jpg"}
        alt="No Image"
        width={800}
        height={800}
        className="h-[288px]"
      />
    </div>
  </div>
  )
}

export default ThreeCards
