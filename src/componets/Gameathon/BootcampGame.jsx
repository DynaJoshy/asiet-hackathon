import React from 'react'
import bootCampDiagram from '../../assets/Gameathon/bootCampDiagram.png.webp'

export default function BootcampGame() {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <div>
        <h1 className='text-lg font-bold'>Prerequisites for Bootcamp</h1><br />
        <ul className='list-disc text-base font-[poppins] pl-14'>
          <li>A strong interest in game development and a desire to learn about the game industry.</li>
          <li>Basic understanding of programming concepts and familiarity with at least one programming language.</li>
          <li>Basic understanding of art and design principles.</li>
          <li>Basic understanding of computer hardware and software, including operating systems and computer hardware components.</li>
          <li>Access to a computer with the necessary hardware and software to participate in the Bootcamp.</li>
          <li>Familiarity with the Unity 3D and Blender user interface. Basic understanding of 3D modeling and animation concepts.</li>
          <li>Basic understanding of game mechanics and level design. Basic knowledge of scripting and programming in C# (for Unity 3D) or Python (for Blender).</li>
          <li>Students should be prepared to review the provided notes and articles and complete any recommended tutorials to gain a basic understanding of the material before the training begins.</li>
        </ul>
      </div>
      <div>
        <h1 className='text-lg font-bold mt-8'>How should the candidate attend the training?</h1><br />
        <ul className='list-disc text-base font-[poppins] pl-14'>
          <li>Students can use the Discord channel to ask questions and interact with the instructor and classmates.</li>
          <li>Students can also use the help-desk platform to submit tickets with their doubts or questions. The training organization will respond as soon as possible.</li>
          <li>During the course, students can also ask doubts directly to the instructor during class sessions or through private messaging.</li>
          <li>After the course has finished, students will have access to a 1-month support period during which they can continue to ask doubts through the help-desk platform. The training organization will respond to inquiries within 24 hours.</li>
        </ul>
      </div>
      <div>
        <h1 className='text-lg font-bold mt-8'>Bootcamp contents</h1><br />
        <img src={bootCampDiagram} alt="Bootcamp Content" />
      </div>
      <div>
        <h1 className='text-2xl font-bold'>Bootcamp Rules</h1><br />
        <h1 className='text-lg font-bold pl-5 pb-6'>Specific Rules</h1>
        <ol className='list-decimal text-base font-[poppins] pl-16'>
          <li>The Bootcamp will consist of 40 hours of content to be delivered to students in morning and evening batches.</li>
          <li>Students will participate in Zoom sessions and can log in as team members.</li>
          <li>A dedicated Discord channel will be established for all Bootcamp attendees.</li>
          <li>Schedule for classes and Zoom links will be communicated to the students.</li>
          <li>If a student misses a class, they will be provided with a recording of the Zoom session through a password-protected link.</li>
          <li>Students will be assigned assignments and expected to finish them and come ready for the next class.</li>
          <li>Students can ask doubts and receive assistance via Discord, email, or through our helpdesk ticket system.</li>
          <li>PDFs and slides will be provided to students.</li>
          <li>
            Deliverables:
            <ol className='list-decimal pl-10 text-base'>
              <li>Unity session</li>
              <li>Basic concepts of 3D modeling</li>
              <li>Completing one hyper-casual game with basic gameplay.</li>
            </ol>
          </li>
        </ol>
        <h1 className='text-lg font-bold pl-5 pb-6 pt-5'>General Rules</h1>
        <ul className='list-disc text-base font-[poppins] pl-14'>
          <li>Attendance is mandatory for all sessions. If a student is unable to attend a session, they must inform the instructor in advance and make arrangements to catch up on missed material.</li>
          <li>Students must complete all assignments on time and to the best of their ability; late or incomplete assignments will not be accepted.</li>
          <li>Active participation in class discussions and activities is expected from students.</li>
          <li>Students are expected to respect their instructors and classmates at all times, including during online interactions.</li>
          <li>Students are expected to follow all guidelines and instructions provided by the instructors.</li>
          <li>Students are responsible for ensuring they have the necessary equipment and internet connection to participate in the online boot camp.</li>
          <li>Students are expected to maintain a professional and appropriate appearance and behavior during online sessions.</li>
          <li>Students are expected to use appropriate language and communication during online interactions.</li>
          <li>Students must keep their cameras on and participate visually during online sessions.</li>
          <li>Students are expected to keep their microphones on mute when they are not speaking to minimize background noise.</li>
          <li>Students must keep their devices charged and ready for use during online sessions.</li>
          <li>Candidates should log in to the Zoom account provided by the training organization.</li>
          <li>Candidates will be added to a Discord group and will receive a link to access the online classes.</li>
          <li>Before each class, the instructor will verify the attendance of each student.</li>
          <li>Candidates must have an attendance rate of at least 90% to be eligible for the Gameathon.</li>
          <li>At the end of the training, candidates will be asked to submit their completed game for review.</li>
          <li>If the game meets the required standards, the candidate will be granted enrolment in the Gameathon.</li>
        </ul>
      </div>
      <div>
        <h1 className='text-lg font-bold mt-8'>Bootcamp Certificate</h1><br />
        <h2 className='text-base font-[poppins] pl-14'>Upon successful completion of the training program, registered participants will receive a certificate of participation via email in PDF format, with a digital signature from TILTLABS.</h2>
      </div>
    </div>
  )
}
