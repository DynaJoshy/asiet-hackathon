import React from 'react'
import regFlowChart from '../../assets/Gameathon/regFlowChart1.png'

export default function RegistrationGame() {
  return (
    <div className='md:p-10 p-3 md:text-2xl text-xl md:text-justify font-[poppins] h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <ul className='list-disc md:pl-0 pl-3'>
            <li>With training (Bootcamp) and food: Rs.2500/participant.</li>
            <li>Without training and food: Rs.1500/participant. (A participant must pay additional Rs. 1000 if failed in a technical interview with TILTLABS to participate in Gameathon)</li>
        </ul>
        <img src={regFlowChart} alt="Registration Flow Chart" className='md:m-10 mt-10'/>
    </div>
  )
}