import React from 'react'

export default function RulesGame() {
  return (
    <div className='md:p-10 p-3 md:text-2xl text-xl md:text-justify font-[poppins] h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <h1 className='text-lg font-bold'>Gameathon Rules</h1><br />
      <ul className='list-disc text-base font-[poppins] pl-14'>
        <li>Gameathon will be held on the ASIET campus.</li>
        <li>Teams must physically be present at the college for the event.</li>
        <li>Each team can have a maximum of 4 members and a minimum of 2 members.</li>
        <li>Our technical team will provide technical support.</li>
        <li>Evaluation of projects will take place on the event's final day, and prizes will be distributed accordingly.</li>
        <li>Participants will have access to high-speed internet.</li>
        <li>Participants are required to bring their own laptops with the required specifications.</li>
        <li>The Gameathon event will run daily from 9 AM to 6 PM. Further details will be communicated to the teams upon registration for the Gameathon event competition following the completion of the Bootcamp.</li>
      </ul>
      <h1 className='text-lg font-bold pt-5'>Winning Criteria</h1><br />
      <ul className='list-disc text-base font-[poppins] pl-14'>
        <li><b>Innovation:</b> Recognize teams with unique and creative ideas for their games.</li>
        <li><b>Game mechanics:</b> Award teams that develop well-designed and engaging gameplay mechanics.</li>
        <li><b>Visuals:</b> Recognize teams that create visually appealing and polished games.</li>
        <li><b>Sound design:</b> Award teams that create immersive and well-integrated audio experiences in their games.</li>
        <li><b>User experience:</b> Recognize teams that create games with a smooth and enjoyable user experience.</li>
        <li><b>Storytelling:</b> Award teams that effectively use storytelling elements in their games.</li>
        <li><b>Theme:</b> Recognize teams that develop games that fit the theme of the Gameathon effectively.</li>
        <li><b>Performance:</b> Award teams that create games that run smoothly and efficiently, with good performance on various devices.</li>
        <li><b>Replay value:</b> Recognize teams that create fun and engaging games to play multiple times.</li>
      </ul>
    </div>
  )
}
