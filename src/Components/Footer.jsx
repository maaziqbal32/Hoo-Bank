import React from 'react'
import Styles from '../Style'
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () =>
(
  <section className={`${Styles.flexCenter} ${Styles.paddingY} flex-col`}>
    <div className={`${Styles.flexCenter} flex-col mb-8 w-full
    md:flex-row`}>
      {/* inner div for logos */}
      <div className='flex flex-1 flex-col justify-start 
        mr-10' >
        <img
          src={logo} alt='hoobank'
          className='w-[266px] h-[72px] object-contain' />
          <p className={`${Styles.paragraph} max-w-[310px] mt-4
          font-poppins`}>
           A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row
      justify-between flex-wrap md:mt-0 mt-10'> 
      {footerLinks.map((footerLinks)=>(
      <div key={footerLinks.key} className='flex flex-col ss:my-0
      my-4 min-w-[150px] '>
      <h4 className='font-poppins  font-semibold text-white
      leading-[27px] text-[18px] '>{footerLinks.title}</h4>
      <ul className='list-none  mt-4'>
        {footerLinks.links.map((link,index)=>(
          <li key={link.name} className={`font-poppins font-normal
          text-white text-[16px] leading-[24px] cursor-pointer
           ${index !== footerLinks.links.length - 1 ? 'mb-4':'mb-0'
           }`}>{link.name}
          </li>
        ))}
      </ul>
       </div>
      ))}   
     </div>
    </div>
    {/* last footer part start from here */}
    <div className='w-full justify-between flex items-center 
    md:flex-row flex-col pt-6 border-t-[1px]  border-t-[#3f3e45]'>
      <p className='font-poppins  font-normal  text-white
      leading-[27px] text-[18px]'>
       2021 HooBank. All Rights Reserved.
      </p>
      <div className='flex flex-row md:mt-0 '>
       {socialMedia.map((socialMedia,index) => (
         <img key={socialMedia.id} src={socialMedia.icon} alt={socialMedia.id}
         className={`w-[21px] h-[21px] object-contain mt-5
         mr-4 cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6':
         'mr-0' }`}/>
       ))}
      </div>
    </div>
  </section>
)


export default Footer