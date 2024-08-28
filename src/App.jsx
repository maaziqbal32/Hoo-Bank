import React from 'react'
import Styles from './Style'
import{Navbar,Hero,Stats,Billing,Business,CardDeal,Testimonials,Clients,CTA,Button,Footer} from "./Components/index"
const App = () => {
  return(
  <>

    <div className='bg-primary w-full overflow-hidden  '>
         <div className={`${Styles.paddingX} ${Styles.flexCenter}`}>
         <div className={`${Styles.boxWidth}`}> 
          <Navbar/>
        </div>
         </div>

         <div className={`bg-primary ${Styles.flexStart}`} >
        <div className={`${Styles.boxWidth}`}>
         <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${Styles.flexStart} ${Styles.paddingX} ` } >
        <div className={`${Styles.boxWidth}`}>
         <Stats/> 
         <Business/>  
         <Billing/>
         <CardDeal/> 
         <Testimonials/>
         <Clients/> 
         <CTA/> 
          <Footer/>
         {/* <Button/> */}
        </div>
      </div>
     
    </div>
       </>
    )
  }
  
export default App;