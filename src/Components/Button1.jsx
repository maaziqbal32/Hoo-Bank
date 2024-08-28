import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient
    font-medium font-poppins outline-none text-[18px] text-primary
    ${styles} mt-8 rounded-lg`}>
     Get Started
    </button>
 )
}

export default Button;