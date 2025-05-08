import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  
  return (
    <div className="h-[70vh] text-white 
      bg-[url('/Img2Mobile.png')] md:bg-[url('/Img2.png')] 
      bg-no-repeat bg-center bg-cover">
        <div className='pt-30 lg:pt-70'>

        <div className='flex w-full
          h-[40vh] lg:h-[20vh] items-center justify-center '>
          <div className='text-center' >
            <p>
              Hello, I&apos;m Dip Kishor Regmi. I&apos;m a
            </p>
            <h1 className='text-5xl font-bold'>
              FULL STACK DEVELOPER<br/> BASED IN NEPAL
            </h1>
          </div>
        </div>
          <div className='text-center'>
              <Link className='m-2 bg-[#9D00FF] p-5 rounded-3xl shadow-2xl' href="/project">Check Projects 🚀</Link>
              <a
                className="m-2 bg-[#FF6A00] p-5 rounded-3xl shadow-2xl"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dipkishor9910@gmail.com" target="_blank"
              >
                📧 Email Me
              </a>
          </div>
          </div>
    </div>
  )
}

export default HeroBanner
