import React from 'react'
import AboutIntro from './about-intro.svg'
function Intro() {
  return (
      <>
    <div className='about-intro h-screen sm:hidden'>
        
       

    </div>
    <div className="grid grid-cols-2 sm:grid-cols-1 items-center min-h-screen sm:bg-secondary sm:p-10 sm:-mt-16">
        <div className='z-10 flex justify-center'>
        <img src={AboutIntro} alt="" className='h-[500px] w-[500px]'/>
        </div>
        <div className='z-10 max-w-max flex flex-col space-y-5 sm:-mt-40'>
           <h1 className='text-8xl font-semibold text-white sm:text-4xl'>DR. MARKETING</h1>
           <hr />
           <h1 className='text-2xl text-white z-20 sm:text-xl'>Your Success, Our Stragety</h1>
        </div>
    </div>
    </>
  )
}

export default Intro