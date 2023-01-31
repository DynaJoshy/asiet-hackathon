import React, { useState } from "react";
import bgImg from "../../assets/Ideathon/bg.png.webp";
import { ArchiveIcon, ChartBarIcon, CloudUploadIcon, LightBulbIcon, ViewGridIcon } from '@heroicons/react/solid'
import { useWindowSize } from "react-use";
import "./Ideathon.css";
import { Navbar } from "../NavbarPages";

function AboutYoung(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      “What the mind can conceive and believe, it can achieve.”<br /><br />
      <span className="pl-96">Napoleon Hill</span><br /><br />
      In recent times, technology has produced many innovations of holocaustic nature and scientists and researchers in its quest to conquer nature, have evolved various dangerous concepts threatening the very existence of mankind. These pose a big challenge to the meaning and principle of humanity. In this regard, students should play a strong and positive role in determining emerging trends of technology. It is with this great thought in mind, that “Adi Shankara Young Scientist Award" is conceived and designed.
      <br /><br />
      <span className="pl-20">The objective of Adi Shankara Young Scientist Award is to recognize the potentialities of promising young aspiring scientists who dedicate themselves to solve the most pressing problems the world faces. This award aims to recognise and reward quality workmanship, inspire scholarship and support researchers to pursue their passion in creating technological innovations beneficial to mankind.</span>
    </div>
  )
}

function ContactYoung(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      Email: innovation@adishankara.ac.in<br /><br />
      Dr. Ajay Kumar<br />
      Associate Professor<br />
      +919846900310<br /><br />
      Mr. Albins Paul<br />
      Asst. Professor<br />
      +919495129696<br /><br />
      Adi Shankara Institute of Engineering and Technology<br />
      Vidya Bharathi Nagar, Mattoor<br />
      Kalady, Ernakulam<br />
      Kerala, India<br />
      Phone No. 0484-2460000<br />

    </div>
  )
}

function FaqYoung(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <br /><b>Q1. Should both participants belong to the same school?</b>
      <br />Ans. Yes, both the participants and their mentor must be from the same school
      <br /><br /><b>Q2. Should the participants visit the college at any intermediate stages?</b>
      <br />Ans. No, participants are to be presents in the college only for the final round. Any other interactions   would be done either through Skype/Imo or through direct visit to your schools.
      <br /><br /><b>Q3. Can students participate individually for the competition?</b>
      <br />Ans. Yes
      <br /><br /><b>Q4. We are unaware of Skype/Imo. Will we receive any support?</b>
      <br />Ans. Sure, You will be allocated a mentor from the college, who will guide you through each steps.
      <br /><br /><b>Q5. During the final round at college, will we be provided with accommodation and other amenities?</b>
      <br />Ans. Yes, College will take appropriate steps to ensure your comfortable stay.
      <br /><br /><b>Q6. Will there be any elimination in each round?</b>
      <br />Ans. No, eliminations are there only for pre-final and final rounds.
    </div>
  )
}

function GuideYoung(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>The contest must meet the following requirements:</b><br /><br />
      <ul className="list-disc pl-10">
        <li>Each team can have a maximum of 2 students.(both from the same school)</li>
        <li>Each team should have a mentor from the same school.</li>
        <li>Student(s) can present maximum of one idea. Subsequent entries will be disqualified.</li>
        <li>Entries must be in English.</li>
        <li>Entries are void if they are in whole or part incomplete, counterfeit, obtained through fraud, or submitted late.</li>
        <li>The idea can be in any domain. But it should be capable of answering the problem statement (why), should have a definite objective (what), should include the implementation details (how) and social relevance.</li>
        <li>If two teams submit nearly the same idea and have got the same rating, the idea submitted first based on date and time stamp shall be given priority.</li>
        <li>The ideas should be original. If, at any stage of the contest, the organizers discover plagiarism, the entry is disqualified.</li>
        <li>Participation in Adi Shankara Young Scientists Award is FREE. However, for the final round, teams will have to make their own arrangements for travel.</li>
        <li>The management reserves the right to change rules and regulations without prior notice.</li>
      </ul>
    </div>
  )
}

function ConYoung(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      Unlike other similar events, here the students have to go through different stages which will transform them into entrepreneurs. From the second stage onwards, a dedicated mentor will work in tandem with the students.
      <br /><br /><b>Stage 1 Registration <span className="text-[var(--primary-color)]">(Before 07th April 2023)</span></b>
      <br />Each participant must provide an abstract of their project idea in their registration form, which should include
      <ul className="list-disc md:pl-48 pl-10">
        <li>Summary of the Idea</li>
        <li>Expected Social Relevance/Benefit</li>
      </ul>
      <br /><br /><b>Stage 2 Idea Pitching <span className="text-[var(--primary-color)]">(15th April 2023)</span></b>
      <br />This round helps them in honing their talents in presenting an idea succinctly.
      <br /><br /><b>Stage 3 Prefinal round <span className="text-[var(--primary-color)]">(20-22 April 2023)</span></b>
      <br />This is the stage in which the participants will face the expert panel either directly or via skype. Here they have to present their idea with the help of Power Point Presentation. It would not be a fault finding session but a venue for students to understand how to effectively present their idea before a panel.
      <br /><br />After the third stage, the participant gets a 2 week time to translate their idea to a prototype.
      <br /><br /><b>Stage 4 Final Round <span className="text-[var(--primary-color)]">(08th May 2023)</span></b>
      <br />The shortlisted entries would be invited to ASIET Kalady for the Grand Finale in the month of May 2023. They would have to make a final presentation in front of a panel consisting of eminent personalities including CEOs and CTOs of prominent companies, experts from NASSCOM Startups, scientists and academicians. The idea and prototype should again be presented in this stage which could help them explore possible funding options from the Industry and Start Up ventures
    </div>
  )
}

function AwardYoung(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>Amazing Cash Prize awaits the winners</b><br /><br />
      <table className="px-4 min-w-[20vw] rounded-md border border-gray-200 overflow-hidden">
        <tbody>
          <tr >
            <td>Best Idea</td>
            <td>Rs. 1 Lakhs</td>
          </tr>
          <tr >
            <td >1st Runner-Up</td>
            <td>Rs. 50,000</td>
          </tr>
          <tr >
            <td >2nd Runner-Up</td>
            <td>Rs. 25,000</td>
          </tr>
        </tbody>
      </table>
      <br />
      <b>Top 100 projects: Scholarships for higher studies in Adi Shankara Group of Institutions</b>
      <br/><br /><b>Award Categories</b>
      <ul className="list-disc pl-10">
        <li>Best Business Potential</li>
        <li>Best Social Impact</li>
        <li>Encouragement Awards</li>
        <li>Best Idea Pitch</li>
        <li>Best Problem Description</li>
        <li>Best Presentation</li>
      </ul>
    </div>
  )
}

function Ideathon() {

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutYoung />,
    },
    { name: "Contest", icon: CloudUploadIcon, page: <ConYoung /> },
    { name: "Awards", icon: ChartBarIcon, page: <AwardYoung /> },
    { name: "FAQ", icon: ViewGridIcon, page: <FaqYoung /> },
    { name: "Guidelines", icon: LightBulbIcon, page: <GuideYoung /> },
    { name: "Contact", icon: LightBulbIcon, page: <ContactYoung /> },
  ]

  const [currentTab, setCurrentTab] = useState("About")

  const translateValue = tabs.findIndex(tab => tab.name === currentTab) / tabs.length * 100

  return (
    <>
      <div
        className="Ideathon"
        style={
          width > 640
            ? {
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "contain",
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
              height: "100vh",
              boxShadow: "0px 0px 50px 0px var(--bg-color)",
            }
        }
      >
        {/* navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} countDate="Apr 07, 2023 00:00:00" />

        {/* main content */}
        <div className="flex flex-col justify-center h-screen p-5 md:p-10  2xl:p-24">
          <h1
            className="text-4xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
            style={{ fontFamily: "Azonix" }}
          >
            Young Scientist Award
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
            Registration Ends on 07th April 2023
          </h2>
          {/* description */}
          <p className="text-base text-[#f0f0f070] 2xl:text-2xl md:pt-10 md:w-1/3 2xl:w-1/2 leading-6 text-justify">
            The objective of <b>Adi Shankara Young Scientist Award</b> is to recognize the potentialities of promising young aspiring scientists who dedicate themselves to solve the most pressing problems the world faces. This award aims to recognise and reward quality workmanship, inspire scholarship and support researchers to pursue their passion in creating technological innovations beneficial to mankind.
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

      <div className="Ideathon  my-10 mb-16">
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
                  <div className="h-full rounded-full bg-[var(--primary-color)]" style={{ width: `${1 / (tabs.length) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {tabs.map(tab => {
          return (
            <div className="md:mx-16 mx-6 my-10 text-[var(--secondary-color)]">
              {tab.name === currentTab ? tab.page : ""}
            </div>
          )
        })
        }
      </div>
    </>
  );
}

export default Ideathon;
