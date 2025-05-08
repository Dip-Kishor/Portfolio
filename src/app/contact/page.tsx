import Link from 'next/link'
import React from 'react'

const Page = () => {
    
  return (
    <>
        <div className="h-[12vh] bg-[url('/Img2Mobile.png')] md:bg-[url('/Img2.png')] bg-no-repeat bg-center bg-cover">
        </div>
        <div className='min-h-screen lg:h-[70vh]'>
            <h1 className='text-4xl text-center font-bold mt-4'>
                Contact Me
            </h1>
            <div className="shadow-2xl mx-5 lg:mx-52 py-4 rounded-2xl">
                <div className='flex flex-col mx-5 justify-center items-center '>
                    <form>
                        <input className='border border-amber-400 w-full rounded-lg py-3 px-10 mb-5' placeholder='Enter Your Name' type='text' id='name'/>
                        <input className='border border-amber-400 w-full rounded-lg py-3 px-10 mb-5' placeholder='Enter Your Contact' type='text' id='contact'/>
                        <textarea className='border border-amber-400 w-full rounded-lg py-3 px-10 ' placeholder='Enter Message Here!'  id='message'/>
                    </form>
                    <button>
                        <Link href=""> Send</Link>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page