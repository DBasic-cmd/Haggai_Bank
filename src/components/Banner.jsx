import React from 'react'

const Banner = () => {
  return (
    <div id='banner' className='grid grid-cols-4 px-5 gap-3 bg-white py-5 text-red-700'>
        <div className='text-center items-center' >
            <h6>8710+</h6>
            <p className='opacity-75'>Clients Served</p>
        </div>
        <div className='text-center items-center' >
            <h6>12</h6>
            <p className='opacity-75'>Industry Awards</p>
        </div>
        <div className='text-center items-center' >
            <h6>20+</h6>
            <p className='opacity-75'>Years of Operation</p>
        </div>
        <div className='text-center items-center' >
            <h6>100%</h6>
            <p className='opacity-75'>CBN & NDIC Regulated</p>
        </div>
    </div>
  )
}

export default Banner