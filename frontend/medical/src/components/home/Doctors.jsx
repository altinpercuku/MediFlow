import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    const lastDoctors = doctors.slice(-6);
    useEffect(() => {
      axios.get('http://localhost:8000/api/doctors/')
          .then(response => setDoctors(response.data))
          .catch(error => console.error("Error fetching doctors: ", error));
  }, []);
  return (
          <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800">
            Our Doctors
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lastDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center"
              >
                {doctor.photo && (
                  <img
                    src={`http://localhost:8000${doctor.photo}`}
                    alt={doctor.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full mb-4 border-4 border-indigo-100"
                  />
                )}
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{doctor.name}</h2>
                <p className="text-indigo-600 text-sm sm:text-base mt-1">{doctor.specialization}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
                <button
                  className="bg-indigo-600 mt-6 cursor-pointer hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
                >
                  <a href="/all-doctors/">
                    More
                  </a>
                </button>
              </div>
        </div>
      </div>
  )
}

export default Doctors