import React, { useState } from "react";
import bgImg from "../../assets/Civilathon/bg.png.webp";
import { ArchiveIcon, ChartBarIcon, CloudUploadIcon, LightBulbIcon } from '@heroicons/react/solid'
import { useWindowSize } from "react-use";
import "./Civilathon.css";
import { Navbar } from "../NavbarPages";

function AboutCivil(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      A civil engineering technical event intended for engineering/ architecture/ diploma students and/or graduates with sufficient theoretical knowledge and design skills to solve complex civil engineering problems. Registration for the event has to be done individually before the deadline and they can form groups of four after the orientation session provided by the organisers, depending on the areas of expertise of each registered participants.
      The event is planned for a span of 24 hours which will include wide range of civil engineering areas like engineering drawing, planning, construction management, structural design, soil investigation, sanitary engineering and quantity estimation. This is scheduled in four stages and the participants are expected to find creative, feasible and technical solutions to the stated complex problem designed by the event organisers. The stages will be focused on the above-mentioned areas and will be evaluated by a panel of experts.
      Essential and relevant training and orientation sessions for the stages will be arranged by the organising committee. Training for softwares AutoCAD, STAAD.PRO, STAAD FOUNDATION, REVIT, PRIMAVERA will be provided prior to the event for registered participants. Certificates will be provided for successful completion of training.
      The winners of the event as decided by an expert jury panel will be awarded a cash prize of one lakh rupees.
    </div>
  )
}

function DeconCivil(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      A civil engineering technical event intended for engineering/ architecture/ diploma students and/or graduates with sufficient theoretical knowledge and design skills to solve complex civil engineering problems. Registration for the event has to be done individually before the deadline and they can form groups of four after the orientation session provided by the organisers, depending on the areas of expertise of each registered participants.
      The event is planned for a span of 24 hours which will include wide range of civil engineering areas like engineering drawing, planning, construction management, structural design, soil investigation, sanitary engineering and quantity estimation. This is scheduled in four stages and the participants are expected to find creative, feasible and technical solutions to the stated complex problem designed by the event organisers. The stages will be focused on the above-mentioned areas and will be evaluated by a panel of experts.
      Essential and relevant training and orientation sessions for the stages will be arranged by the organising committee. Training for softwares AutoCAD, STAAD.PRO, STAAD FOUNDATION, REVIT, PRIMAVERA will be provided prior to the event for registered participants. Certificates will be provided for successful completion of training.
      The winners of the event as decided by an expert jury panel will be awarded a cash prize of one lakh rupees.
    </div>
  )
}

function RebuildCivil(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      An event intended for school students who are interested in building designs and modern construction techniques. The event is planned as a half day session which primarily focus on physical model development. The participants should complete online registration through the website before the deadline. A workshop on relevant areas required for the competition will be provided by subject experts before the commencement of the event. Certificates will be provided for active participation in the workshop. The participants are expected to complete the task using the resources provided by the organisers within the stipulated time.
      The winners of the event as decided by an expert jury panel will be awarded a cash prize of fifty thousand rupees.
    </div>
  )
}

function ConCivil() {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <h1>0484-2463825</h1>
      <h1>0484-2466066</h1>
      <h1>0484-2461933</h1>
      <h1>Principal: +91 9539010657</h1>
      <h1>Admissions: +91 9446523599</h1>
      <h1>info@adishankara.ac.in</h1>
    </div>
  )
}

function Civilathon() {
  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutCivil />
    },
    { name: "DECONSTRUCT_23", icon: CloudUploadIcon, page: <DeconCivil /> },
    { name: "RAPID BUILD_23", icon: ChartBarIcon, page: <RebuildCivil /> },
    { name: "Contact", icon: LightBulbIcon, page: <ConCivil /> },
  ]

  const [currentTab, setCurrentTab] = useState("About")

  const translateValue = tabs.findIndex(tab => tab.name === currentTab) / tabs.length * 100

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="Civilathon"
        style={
          width > 640
            ? {
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "right 0",
              backgroundRepeat: "no-repeat",
              height: "140vh",
              backgroundColor: "var(--bg-color)",
              boxShadow: "0px 0px 50px 0px var(--bg-color)",
            }
            : {
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "150vh",
              boxShadow: "0px 0px 50px 0px var(--bg-color)",
            }
        }
      >
        {/* navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* main content */}
        <div className="flex flex-col justify-center h-screen p-5 md:p-10  2xl:p-24">
          <h1
            className="text-4xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
            style={{ fontFamily: "Azonix" }}
          >
            Civilathon
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
            24 Hours of Innovation
          </h2>
          {/* description */}
          <p className="text-base text-[var(--secondary-color)] 2xl:text-2xl md:pt-10 md:w-1/3 2xl:w-1/2 leading-6">
            Civilathon is a rapid and collaborative hackathon aimed at the discipline of Civil Engineering. It is an excellent platform for students with limited experience in coding to showcase their skills and talents, in the said discipline.
            The innovatory ideas would be judged by a panel of industry experts based on their creativity, approachability, and feasibility.

            So hope on, and get a ticket for this exciting adventure where you can get many networking opportunities, polish your existing skills and flourish yourselves.


          </p>
          {/* basic rounded line button */}
          <button
            className="md:w-1/4 text-center text-[var(--secondary-color)] rounded-full duration-300 py-5 px-6 text-sm font-bold uppercase mt-10 hover:bg-[#f0f0f054] hover:text-[var(--primary-color)] flex items-center justify-center border border-[var(--primary-color)] hover:border-[var(--secondary-color)]"
            style={{
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.6)",
            }}
          >
            Register Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="Civilathon  my-10 mb-16">
        <div className="bg-animation -z-10">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        <div className="bg-black py-2 sticky top-0 z-10">
          <div className="w-[90vw] mx-auto md:w-full md:max-w-5xl rounded-full border border-gray-200 bg-transparent overflow-hidden" >


            {/* :LARGE DEVICES */}
            <div className="relative  sm:block overflow-hidden">
              {/* ::Navigation Tabs */}
              <nav aria-label="Tabs">
                <ul className="grid grid-flow-col auto-cols-fr">
                  {tabs.map(tab => {
                    const Icon = tab.icon
                    return (
                      <li key={tab.name} className={`relative z-10 rounded-full text-base ${tab.name === currentTab ? "transition duration-300 text-black" : "text-gray-400 hover:text-gray-500"}`}>
                        <button type="button" className="md:p-4 p-2 w-full inline-flex justify-center items-center text-center md:text-sm text-[.6rem] font-semibold" onClick={() => setCurrentTab(tab.name)}>
                          {width > 640 ? <Icon className="mr-1.5 w-5 h-5" /> : ""}
                          {tab.name}
                        </button>
                      </li>
                    )
                  })
                  }
                </ul>
              </nav>
              {/* ::Sliding Background */}
              <div className="absolute inset-0 mx-auto w-full h-full rounded-full">
                <div className="relative h-full transition-all duration-300 ease-in" style={{ transform: `translateX(${translateValue}%)` }} >
                  <div className="h-full rounded-full bg-[var(--bg-color)]" style={{ width: `${1 / (tabs.length) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {tabs.map(tab => {
          return (
            <div className="md:mx-16 mx-6 my-10 text-[var(--text-color)]">
              {tab.name === currentTab ? tab.page : ""}
            </div>
          )
        })
        }
      </div>
    </>
  );
}

export default Civilathon;
