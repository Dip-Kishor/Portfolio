import WhatCanIdo from '@/components/UI/WhatCanIdo'
import React from 'react'

const Page = () => {
  return (
    <div>
        <div className="h-[12vh] bg-[url('/Img2Mobile.png')] md:bg-[url('/Img2.png')] bg-no-repeat bg-center bg-cover">
        </div>
        <div className='h-min-screen lg:h-[70vh]'>
            <WhatCanIdo/>
        </div>
    </div>
  )
}

export default Page