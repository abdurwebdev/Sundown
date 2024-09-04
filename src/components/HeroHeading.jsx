import React from 'react'

const HeroHeading = () => {
  return (
    <section className='w-full p-5 h-[80vh] border-b pb-20 border-[#00000052] flex items-end justify-between'>
      <div className='w-96'>
        <h2 className='text-xl font-bold text-black tracking-tighter'>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h2>
      </div>
      <div className='place-content-end  text-right'>
        <h1 className='uppercase leading-[10vw] tracking-tighter font-bold text-[14vw] items-end float-right'>spaces <br />
          that <br />
          inspire</h1>
      </div>
    </section>
  )
}

export default HeroHeading