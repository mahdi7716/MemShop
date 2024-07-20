import React from 'react'

const ProductCart = () => {
  return (
    <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto grid  grid-cols-4 gap-5'>
     <div>
     <img className='w-[350px] h-[350px] rounded-lg 
     transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src="/p1.png"  />
     </div>
     <div>
     <img className='w-[350px] h-[350px] rounded-lg 
     transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src="/p2.png"  />
     </div>
     <div>
     <img  className='w-[350px] h-[350px] rounded-lg 
     transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src="/p3.png"  />
     </div>
     <div>
     <img className='w-[350px] h-[350px] rounded-lg  hover:bg-gray-400
     transition ease-in-out delay-150  duration-300' src="/p4.png"  />
     </div>
     
    
    </div>
  )
}

export default ProductCart