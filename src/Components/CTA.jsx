import React from 'react'
import Styles from '../Style'
import Button from './Button1'

const CTA = () => 
(
    <section className={`${Styles.flexCenter} ${Styles.marginY}
    ${Styles.padding} sm:flex-row flex-col
    bg-black-gradient-2 rounded-[20px] box-shadow`}>
     <div className='flex-1 flex-col flex'>
        <h2 className={Styles.heading2}> Let’s try our service now!</h2>
        <p className={`${Styles.paragraph} max-w-[470px]
        mt-5`}> Everything you need to accept card payments 
        and grow your business anywhere on the planet.</p> 
        
     </div>
     <div className={`${Styles.flexCenter}sm:ml-10 ml-0
     sm:mt-0 mt-`}>
      <Button/>
     </div>
    </section>
  )


export default CTA