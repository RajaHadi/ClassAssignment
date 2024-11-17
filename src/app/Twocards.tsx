import React from "react";
import Image from "next/image";

const Twocards = () => {
  return (
   <div className="flex flex-col md:flex-row gap-4 m-9">  
    <div className="w-full md:w-6/12 "><Image src={"/big1.jpg"} alt="Sorry" width={800} height={1000} className="h-96"/></div>
    <div className="w-full md:w-6/12  "><Image src={"/big2.jpg"} alt="Sorry" width={800} height={1000} className="h-96"/></div>
   </div>
  );
};

export default Twocards;
