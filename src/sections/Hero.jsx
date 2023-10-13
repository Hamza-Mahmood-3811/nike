import React from 'react'

const Hero = () => {
  return (
    // remove border-2  border-red-500 p-2 from className once done
    <section id='home' className='w-full border-2  border-red-500 p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt:28'>
        <p className=''>Our Summer Collection</p>
        <h1 className=''>
          <span className=''>The New Arrival</span>
          <br />
          <span className=''>Nike</span>Shoes
        </h1>
        <p className=''>Discover stylish Nike arrivals, quality confort, and innovation for your active life.</p>
      </div>
    </section>
  )
}

export default Hero