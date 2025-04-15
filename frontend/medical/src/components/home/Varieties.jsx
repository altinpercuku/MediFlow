import React from 'react'
import Physician from '../../assets/foto/llojet/physician.svg'
import Gyno from '../../assets/foto/llojet/gynecologist.svg'
import Derma from '../../assets/foto/llojet/dermatologist.svg'
import Pedri from '../../assets/foto/llojet/pediatricians.svg'
import Neuro from '../../assets/foto/llojet/neurologist.svg'
import Gastro from '../../assets/foto/llojet/gastroenterolgist.svg'  

const Varieties = () => {
  return (
    <div className='doctor-varieties bg-white w-full' style={{fontFamily:" 'Montserrat', sans-serif"}}>
        <h3 className='text-4xl break-normal text-center my-5 py-4 font-bold text-gray-700'>
            Zgjedhni mjekun dhe caktoni terminin tuaj.
        </h3>  
        <div className="lista p-7 my-5 flex justify-center items-center gap-10 flex-wrap">
            <div className="doctorType cursor-pointer">
                <img src={Physician} className='w-16 sm:w-24 mb-2 mx-auto' alt="physician" />
                <p className='text-center font-bold text-gray-600 my-3'>
                    Physician
                </p>
            </div>
            <div className="doctorType cursor-pointer">
                <img src={Gyno} className='w-16 sm:w-24 mb-2 mx-auto' alt="gynecologist" />
                <p className='text-center font-bold text-gray-600 my-3'>
                    Gynecologist
                </p>
            </div>
            <div className="doctorType cursor-pointer">
                <img src={Derma} className='w-16 sm:w-24 mb-2 mx-auto' alt="dermatologist" />
                <p className='text-center font-bold text-gray-600 my-3'>
                    Dermatologist
                </p>
            </div>
            <div className="doctorType cursor-pointer">
                <img src={Pedri} className='w-16 sm:w-24 mb-2 mx-auto' alt="pediatrician" />
                <p className='text-center font-bold text-gray-600 my-3'>
                    Pediatrician
                </p>
            </div>
            <div className="doctorType cursor-pointer">
                <img src={Neuro} className='w-16 sm:w-24 mb-2 mx-auto' alt="neurologist" />
                <p className='text-center font-bold text-gray-600 my-3'>
                    Neurologist
                </p>
            </div>
            <div className="doctorType cursor-pointer">
                <img src={Gastro} className='w-16 sm:w-24 mb-2 mx-auto' alt="gastroenterologist" />
                <p className='text-center font-bold text-gray-600 my-3'>
                    Gastroenterologist
                </p>
            </div>
        </div>
    </div>
  )
}

export default Varieties