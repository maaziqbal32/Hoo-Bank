import React from 'react'
import Styles from '../Style'
import { arrowUp } from '../assets'

const GetStarted = () => 
  (
    <div className={`${Styles.flexCenter}
     w-[140px]
     h-[140px]
     rounded-full
     bg-blue-gradient
     cursor-pointer
     p-[2px]`}>
     {/* first inner div start from here */}
     <div className={`${Styles.flexCenter}
      w-[100%] 
      h-[100%]
      bg-primary
      flex-col
      rounded-full      
       `}>
       {/*second inner start from here  */}
      <div className={`${Styles.flexStart} flex-row`}>
         <p className='font-poppins font-medium text-[18px] leading [23px] mr-2'>
          <span className='text-gradient'>Get</span>          
         </p>
         <img src={arrowUp} alt='arrow' className='h-[23px] w-[23px] object-contain '/>
      </div>
      <p className='font-poppins font-medium text-[18px] leading [23px]'>
          <span className='text-gradient'>Started</span>
         </p>
     </div>       
    </div>
  )


export default GetStarted