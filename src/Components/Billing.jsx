import React from 'react'
import { apple,bill,google } from '../assets'
import Styles,{ layout } from '../Style'

const Billing = () => (
  // main section from here 
     <section id='product'className={layout.sectionReverse}>

       {/* first div start from here */}
       <div className={layout.sectionImgReverse} > 
          <img src={bill} alt='billing' className='w-[100%] h-[100%]
           z-[5] ' />
           <div className='absolute rounded-full
           z-[3] white__gradient h-[50%] w-[50%] -left-1/2 top-0 '/>
            <div className='absolute rounded-full
           z-[0] pink__gradient h-[50%] w-[50%] -left-1/2 bottom-0'/>
       </div>
       {/* first div end here */}


       {/* second div start from here */}
       <div className={`${layout.sectionInfo} lg:ml-10`}>
       <h4 className={Styles.heading2}>
         Easily control your 
            <br className='sm:block hidden'/>
         billing & invoicing.
       </h4>
       <p className={`${Styles.paragraph} mt-5 max-w-[470px]`}>
         Elit enim sed massa etiam. 
         Mauris eu adipiscing ultrices ametodio aenean neque.
         Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
       </p>
       {/* buttons are start from here */}
       <div className='flex flex-wrap flex-row
       sm:mt-10 mt-6'>
         <img src={apple} alt='apple logo' 
         className='w-[128px] h-[42px] object-contain mr-5
         cursor-pointer' />
         <img src={google} alt='google logo' 
         className='w-[128px] h-[42px] object-contain 
         cursor-pointer' />
       </div>
       </div>
       {/* second div end here */}

     </section>
  // main section end here  
  )

export default Billing