import React from 'react'
import regFlowChart from '../../assets/Gameathon/regFlowChart1.png.webp'

export default function RegistrationGame() {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
        <ul className='list-disc md:pl-0 pl-3'>
            <li>With training (Bootcamp) and food: Rs.2500/participant.</li>
            <li>Without training and food: Rs.1500/participant. (A participant must pay additional Rs. 1000 if failed in a technical interview with TILTLABS to participate in Gameathon)</li>
        </ul>
        <img src={regFlowChart} alt="Registration Flow Chart" className='md:m-10 mt-10'/>
    </div>
  )
}
