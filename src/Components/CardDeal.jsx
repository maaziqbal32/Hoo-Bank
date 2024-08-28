import React from 'react';
import { card } from '../assets';
import Styles, { layout } from '../Style';
import Button from './Button1';
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h4 className={Styles.heading2}>
        Find a better card deal
        <br className='sm:block hidden' />
        in few easy steps.

      </h4>
      <p className={`${Styles.paragraph} mt-5 max-w-[470px]`}>
      Arcu tortor, purus in mattis at sed integer faucibus.
      Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles='mt-10' />
    </div>
    {/* section second div start from here */}
   <div className={layout.sectionImg}>
     <img src={card} alt='card' className='[100%] h-[100%]'/>
   </div>
  </section>

)


export default CardDeal