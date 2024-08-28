import React from 'react'
import { clients } from '../constants'
import Styles from '../Style'

const Clients = () => 
  (
    <section className={`${Styles.flexCenter} my-4`}>
    <div className={`${Styles.flexCenter }flex-wrap w-full`}>
      {clients.map((client)=>(
        <div key={client.id} className={`flex-1 ${Styles.flexCenter}
        sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt='client' className=' sm:w-[192px] w-[100%] object-contain'/>
        </div>
      ))}
    </div>    
    </section>
  )


export default Clients