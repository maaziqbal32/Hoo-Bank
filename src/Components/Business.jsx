import React from 'react'
import { features } from '../constants';
import Styles ,{layout} from '../Style';
import Button from './Button1';

const FeatureCard = ({icon,title,content,index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index!==features.length-1
  ?"mb-6":"mb-0"} feature-card `}>
    <div className={`h-[64px] w-[64px] rounded-full ${Styles.flexCenter}
    bg-dimBlue`}>
      <img src={icon} className='w-[50%] h-[50%] object-contain'/>
    </div>
    {/* img content and title are start from here */}
    <div className='flex flex-col flex-1 ml-4'>
  <h4 className='font-poppins font-semibold text-white
  leading-[23px] text-[18px] mb-1'>{title}</h4>
  <p className='text-dimWhite text-[16px] leading-[24px]'>{content}</p>
    </div>
  </div>    
)

const Business = () => {
 
  return (
    <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={Styles.heading2}>
      You do the business, <br className='sm:block
      hidden'/>
      we’ll handle the money.
      </h2>
      <p className={`${Styles.paragraph} max-w-[470px] mt-5` }>
      With the right credit card, you can improve your financial life by
      building credit, earning rewards and saving money. But with 
      hundreds of credit cards on the market.

      </p>
      {/* ---------button start from here------------- */}
      <Button/>
    </div>
    {/* next div start which is the separate mini section  */}
    <div className={`${layout.sectionImg} flex-col`}>
     {features.map((feature,index)=>(
      <FeatureCard key={feature.id}{... feature}
        index={index}
      />
    ))}

    </div>

    </section>
  )
}

export default Business;