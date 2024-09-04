import React from 'react'
import Marquee from "react-fast-marquee";
const FastMarquee = () => {
  return (
    <>
      <Marquee>
        <div id="main" className='flex items-center justify-center mt-10'>
          <h1 className='text-[7vw] font-bold'>EXPERIENCES</h1>
          <div className='w-10 h-10 rounded-full bg-[#FF330A]'></div>
          <h1 className='text-[7vw] font-bold'>CONTENT</h1>
          <div className='w-10 h-10 rounded-full bg-[#FF330A]'></div>
          <h1 className='text-[7vw] font-bold'>ENVIRONMENTS</h1>
          <div className='w-10 h-10 rounded-full bg-[#FF330A]'></div>
        </div>
      </Marquee>
      <section className='w-full p-5 relative min-h-screen flex items-center justify-between'>
        <div id="goeeytwo" className='hello'></div>
        <div >
          <h1 className='text-[5vw] relative z-10 font-bold leading-[4.5vw] tracking-tighter'>We are a group of design- <br />driven, goal-focused <br /> creators, producers, and <br /> designers who believe that <br /> the details make all the <br /> difference.</h1>
        </div>
        <div className='flex flex-col gap-y-5 w-96'>
          <div>
            <img className='rounded-2xl' src="https://cdn.prod.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg" alt="" />
          </div>
          <div>
            <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default FastMarquee