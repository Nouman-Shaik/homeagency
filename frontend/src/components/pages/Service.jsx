import React from 'react'
import circle1 from '../../assets/shapes/circle1.svg'
import half from "../../assets/shapes/Ellipse23.svg"
import Group from "../../assets/shapes/Group1.svg"
import topc from "../../assets/shapes/Ellipse7.svg"
import blues from '../..//assets/shapes/blues.svg'
import ors from '../..//assets/shapes/ors.svg'
import pp from "../../assets/shapes/Ellipse11.svg"
import pp1 from "../../assets/landing/pp11.svg"
import pp2 from "../../assets/landing/pp2.svg"
import pp3 from "../../assets/landing/pp3.svg"
import home1 from '../../assets/icons/home.svg'
import brush from '../../assets/icons/paintbrush-2.svg'
import { motion}      from 'framer-motion'
const Service = () => {
  return (<>
    <div className='h-[150vh] w-full flex'>
      
        <img src={circle1} alt="circle" className='h-20' />
      
      <div className=' absolute top-225 left-35 m-0 '>
        <h1 className='text-3xl  text-blue-600 font-bold  mt-40'>not your Average Realtor</h1>
        <p className='py-10'>lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
        Lorem ipsum dolor sit amet.
        </p>
        <div className='flex '>
          <img src={half} alt="half" />
          <img src={Group} alt="dot" className='absolute pl-0 top-120' />

        </div>
        
      </div>
      <div className='flex absolute top-200 right-10 '>
          <img src={topc} alt="top" className='w-140'/>
          <motion.img src={blues} alt="dots" className=' flex absolute top-30 left-12' initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}/>
          <img src={blues} alt="dots" className=' flex absolute top-165 left-75 h-15'/>
          <img src={ors} alt="dots" className=' flex absolute top-120 left-5 h-10'/>

          <div className='flex absolute top-55 left-10 '>
            <img src={pp1} alt="pp" className='h-70' />

          </div>
          <div className='flex absolute top-95 left-79 '>
            <img src={pp2} alt="pp" className='h-55' />

          </div>
           <div className='flex absolute top-35 left-79 '>
            <img src={pp3} alt="pp" className='h-50' />

          </div>
        
      </div>

        
      
      

    </div>
    <div className='flex'>
      <h1 className='flex absolute text-blue-600 text-2xl font-medium top-390 left-160'>why chosse us?</h1>
      <div className='flex flex-col absolute top-411 left-80'>
        <img src={home1} alt="home" className='h-15 p-1'  />
        <h1 className='text-blue-600 font-medium text-2xl'>Potential ROI</h1>
        <p>Lorem ipsum dolor</p>

      </div>
      <div className='flex flex-col absolute top-410 left-170'>
        <img src={brush} alt="home" className='h-15 p-1'  />
        <h1 className='text-blue-600 font-medium text-2xl items-center pl-7'>Design</h1>
        <p className='flex flex-col'>Lorem ipsum dolor </p>

      </div>
      <div className='flex flex-col absolute top-410 left-260'>
        <img src={brush} alt="home" className='h-15 p-1'  />
        <h1 className='text-blue-600 font-medium text-2xl items-center pl-7'>Design</h1>
        <p className='flex flex-col'>Lorem ipsum dolor </p>

      </div>
    </div>

    </>
  )
}

export default Service


