import React from 'react'
import Navbar from '../Navbar'
import GroupPhoto from '../../assets/foto/grupa.png'
import Doctors from "../../assets/foto/doctors.png"
import Varieties from './Varieties'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className="lg:p-15 ">
            <div className="w-full flex lg:h-130 h-screen bg-gray-900 lg:rounded-xl">
                <div class="min-h-screen py-3 grid grid-rows-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <div class="p-4 flex flex-col rounded justify-center items-center" style={{fontFamily:"Montserrat, sans-serif"}}>
                            <p className="text-4xl text-white uppercase font-normal">
                                Book an appointment <br />With <span className='text-green-600 font-bold underline'> our best doctors</span>.
                            </p>    
                            <div className="flex flex-row gap-3 my-5 justify-center items-center">
                                <img src={GroupPhoto} alt="group-photo" />
                                <p  style={{fontFamily:"Montserrat, sans-serif"}} className='text-white'>
                                    Simply browse through our extensive list of trusted doctors,
                                    schedule your appointment hassle-free.
                                </p>
                            </div>
                            <a href="#_" class="relative px-8 py-4 mt-4 font-medium text-white group">
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

                                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                                <span class="relative font-bold">Book Appointment</span>
                            </a>
                        </div>
                        <div class="p-4 rounded">
                            <img src={Doctors} alt="Doktorret" className='lg:h-110 h-60 mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Varieties/>
    </>
  )
}

export default Home