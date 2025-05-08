import React from 'react'

const WhatCanIdo = () => {
  return (
    <div id='service' className=' lg:h-[50vh]'>
        <div className='text-4xl font-bold text-center mt-10'>
            What Can I do For You?
        </div>
        <div className='flex flex-wrap w-full justify-center gap-5'>
            <div className='bg-white text-center lg:w-[15%] shadow-2xl rounded-2xl m-5 lg:m-0 p-10'>
                <img src="/LaptopMobile.jpg" className='h-30 w-50 mx-auto'></img>
                <h1 className='text-3xl font-bold'>
                    UI/UX Design
                </h1>
                <p>
                    Designing interfaces that are effective and easy to use by users and customers.
                </p>
            </div>
            <div className='bg-white text-center lg:w-[15%] shadow-2xl rounded-2xl m-5 lg:m-0 p-10'>
                <img src="/WebDesign.jpg" className='h-30 w-50 mx-auto'></img>
                <h1 className='text-3xl font-bold'>
                WEB APP DEVELOPMENT
                </h1>
                <p>
                Full-stack web apps with reliablity and fast functioning.
                </p>
            </div>
            <div className='bg-white text-center lg:w-[15%] shadow-2xl rounded-2xl m-5 lg:m-0 p-10'>
                <img src="/ApiIntegrations.jpg" className='h-30 w-50 mx-auto'></img>
                <h1 className='text-3xl font-bold'>
                    API INTEGRATIONS
                </h1>
                <p>
                3rd party API integration (e.g., payment gateways, Google Maps, etc.)
                </p>
            </div>
            <div className='bg-white text-center lg:w-[15%] shadow-2xl rounded-2xl m-5 lg:m-0 p-10'>
                <img src="/Deploy.jpg" className='h-30 w-50 mx-auto'></img>
                <h1 className='text-3xl font-bold'>
                    DEPLOYMENT
                </h1>
                <p>
                    Hosting on your public domains. Dockerizing applications.
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhatCanIdo