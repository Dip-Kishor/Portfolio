import React from 'react'

const FeaturedProjects = () => {
  return (
    <div className='mt-10 h-[100vh]'>
        <div className='text-4xl font-bold text-center'>
            Featured Projects
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:mx-20 lg:h-[20vh]'>
            <div className='mx-10 p-5 rounded-2xl shadow-2xl '>
                <div>
                    <img src="/Project2_Image1.png" className='w-full lg:h-90'></img>
                </div>
                <h1 className='mt-5 text-3xl font-bold'>
                    Football League Management System
                </h1>
            </div>
            <div className='mx-10 p-5 rounded-2xl shadow-2xl'>
                <div>
                    <img src="/Project1_Image1.png" className='w-full lg:h-90'></img>
                </div>
                <h1 className='mt-5 text-3xl font-bold'>
                    FURNI EMPORIUM- eCommerce Website
                </h1>
            </div>
            <div className='mx-10 p-5 rounded-2xl shadow-2xl'>
                <div>
                    <img src="/Project3_Image1.png" className='w-full lg:h-90'></img>
                </div>
                <h1 className='mt-5 text-3xl font-bold'>
                    Wheat Yield Prediction System
                </h1>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProjects