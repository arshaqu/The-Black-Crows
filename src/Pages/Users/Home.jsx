import React from 'react'
import Navbar from '../../Pages/Users/components/Navbar'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16"> {/* pt-16 adds top padding to account for the navbar height */}
        <div className="container mx-auto px-4 mt-5"> 
                    

            <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mb-24">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    <p className='mt-2 font-black' style={{fontSize:'18px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>

                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                    <p className='mt-2 font-semibold' style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                    <p className='mt-2 font-semibold' style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                    <p className='mt-2 font-semibold' style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                    <p className='mt-2 font-semibold' style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                    <p className='mt-2 font-semibold '  style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                    <p  className='font-semibold' style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
                    <p className='font-semibold' style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                    <p className='font-semibold' style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
                    <p className='font-semibold' style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
                    <p className='font-semibold' style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
                    <p className='font-semibold' style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>INDIANA BASKETBALL</p>
                    <p style={{fontSize:'20px',textAlign:'center',fontFamily:'serif'}}>FROM RS 500/-</p>
                </div>
            </div>

        </div>
      </main>
    </div>
  )
}

export default Home