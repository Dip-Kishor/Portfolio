import React from 'react'

const Page = () => {
  return (
       <>
            <div className="h-[12vh] bg-[url('/Img2Mobile.png')] md:bg-[url('/Img2.png')] bg-no-repeat bg-center bg-cover">
            </div>
            <div className='min-h-screen'>
            <div className='mt-10 h-[100vh]'>
                <div className='text-4xl mb-4 font-bold text-center'>
                        All Projects
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:mx-20 lg:h-[20vh]'>
                        <div className='mx-10 p-5 rounded-2xl shadow-2xl relative'>
                            <div>
                                <img src="/Project2_Image1.png" className='w-full lg:h-90'></img>
                            </div>
                            <h1 className='mt-5 text-3xl font-bold'>
                                Football League Management System
                            </h1>
                            <div>
                                <button className='absolute bottom-5 right-5'>
                                <a
                                    href="https://flms.dipkishor.com.np"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold inline-block bg-amber-600 text-white px-4 py-2 rounded"
                                    >
                                    Visit
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className='mx-10 p-5 rounded-2xl shadow-2xl relative'>
                            <div>
                                <img src="/Project1_Image1.png" className='w-full lg:h-90'></img>
                            </div>
                            <h1 className='mt-5 text-3xl font-bold'>
                                FURNI EMPORIUM- eCommerce Website
                            </h1>
                            <div>
                                <button className='absolute bottom-5 right-5'>
                                <a
                                    href="https://furni.dipkishor.com.np"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold inline-block bg-amber-600 text-white px-4 py-2 rounded"
                                    >
                                    Visit
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className='mx-10 p-5 rounded-2xl shadow-2xl relative'>
                            <div>
                                <img src="/Project3_Image1.png" className='w-full lg:h-90'></img>
                            </div>
                            <h1 className='mt-5 text-3xl font-bold'>
                                Wheat Yield Prediction System
                            </h1>
                            <div>
                                <button className='absolute bottom-5 right-5'>
                                <a
                                    href="https://wyps.dipkishor.com.np"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold inline-block bg-amber-600 text-white px-4 py-2 rounded"
                                    >
                                    Visit
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
       </>
    )
}

export default Page