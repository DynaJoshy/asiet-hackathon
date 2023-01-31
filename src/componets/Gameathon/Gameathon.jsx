import React, { useEffect, useState } from "react";
import bgImgDesk from "../../assets/Gameathon/bgD.png.webp";
import bgImgMobile from "../../assets/Gameathon/bgM.png.webp";
import { useWindowSize } from "react-use";
import "./Gameathon.css";
import { Navbar } from "../NavbarPages";
import {
  ArchiveIcon,
  ChartBarIcon,
  CloudUploadIcon,
  LightBulbIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
// import AboutGame from "./AboutGame";
import RegistrationGame from "./RegistrationGame";
import EligibilityGame from "./EligibilityGame";
import BootcampGame from "./BootcampGame";
import RulesGame from "./RulesGame";
import gameathonVideo from "../../assets/Gameathon/intro.mp4";
import ProfImg from "../../assets/Sponsors/titlab.png.webp"

function AboutGame(props) {
  return (
    <div className="md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      Each team must have a minimum of 4 members, and participants must bring
      their own laptops or systems to develop the application. TILTLABS'
      technical and creative team will also be available on-premise to assist
      with any doubts or questions. The final games will be evaluated by
      TILTLABS' Creative Officer and Lead Game Designer. Around 20 teams will be
      allocated for participation on a first-come, first-served basis. For those
      who are new to game development, TILTLABS' will also be conducting a
      40-hour Bootcamp before the Gameathon to help participants understand the
      basics of game development using Unity and complete their game ideas into
      an app. On successful completion of the Gameathon, prizes, gifts,
      scholarships to the TILTEDU education program, and internships at TILTLABS
      will be awarded to the top-performing teams. Additionally, participants
      will have the opportunity to work with TILTLABS' new gaming, virtual
      production, and esports studio, which will be launching on the ASIET
      campus. Don't miss out on this exciting opportunity to showcase your
      skills and creativity!
    </div>
  );
}

function ContactGame() {

  const team = [
    { id: 1, fullName: "Alice Doe", contact: "+91 9087654321", imgSrc: ProfImg, imgAlt: "profile picture"},
    { id: 2, fullName: "Bob Doe", contact: "+91 9087654321", imgSrc: ProfImg, imgAlt: "profile picture"},
    { id: 3, fullName: "Clara Doe", contact: "+91 9087654321", imgSrc: ProfImg, imgAlt: "profile picture"}
  ]

  return (
    <div className="md:p-10 p-3 text-base md:text-justify font-[poppins] h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <div className="mx-auto max-w-5xl flex flex-col">



        {/* :TEAM CONTAINER */}
        <div className="mt-10">

          {/* ::Members Row 1 */}
          <div className="flex flex-wrap justify-center items-center">
            {team
              .slice(0, 4)
              .map(member => (
                <div key={member.id} className="flex-shrink-0 group relative m-5 p-5 w-56 h-56 flex justify-center items-center rounded-full bg-black overflow-hidden">
                  {/* :::picture */}
                  <img src={member.imgSrc} alt={member.imgAlt} className="z-1 group-hover:z-0 absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-10 transition duration-200" />
                  {/* :::details */}
                  <div className="relative flex flex-col justify-center items-center space-y-2">
                    <p className="text-lg text-white font-bold">{member.fullName}</p>
                    <p className="text-sm text-gray-300 font-medium">{member.contact}</p>
                  </div>
                </div>
              ))
            }
          </div>

          {/* ::Members Row 2 */}
          <div className="flex flex-wrap justify-center items-center">
            {team
              .slice(4, 9)
              .map(member => (
                <div key={member.id} className="flex-shrink-0 group relative m-5 p-5 w-40 h-40 flex justify-center items-center rounded-full bg-black overflow-hidden">
                  {/* :::picture */}
                  <img src={member.imgSrc} alt={member.imgAlt} className="z-1 group-hover:z-0 absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-10 transition duration-200" />
                  {/* :::details */}
                  <div className="relative flex flex-col justify-center items-center space-y-2">
                    <p className="text-lg text-white font-bold">{member.fullName}</p>
                    <p className="text-sm text-gray-300 font-medium">{member.contact}</p>
                    <span className="flex items-center space-x-4">
                      <a href={member.fbLink} className="text-gray-300 hover:text-white">
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                      </a>
                      <a href={member.twLink} className="text-gray-300 hover:text-white">
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                      </a>
                      <a href={member.instaLink} className="text-gray-300 hover:text-white">
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081 1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1.897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511 0 .924.413.924.923v2.175z" fillRule="evenodd" clipRule="evenodd" /></svg>
                      </a>
                    </span>
                  </div>
                </div>
              ))
            }
          </div>

        </div>

      </div>
    </div>
  );
}

function Gameathon() {
  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutGame />,
    },
    { name: "Registration", icon: CloudUploadIcon, page: <RegistrationGame /> },
    { name: "Eligibility", icon: ChartBarIcon, page: <EligibilityGame /> },
    { name: "Bootcamp", icon: ViewGridIcon, page: <BootcampGame /> },
    { name: "Rules", icon: LightBulbIcon, page: <RulesGame /> },
    { name: "Contact", icon: LightBulbIcon, page: <ContactGame /> },
  ];

  const [currentTab, setCurrentTab] = useState("About");

  const translateValue =
    (tabs.findIndex((tab) => tab.name === currentTab) / tabs.length) * 100;

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => { }, []);

  return (
    <>
      {/* intro animation gameathonVideo */}
      <div className="relative h-screen">
        <div className="absolute z-50 w-full ">
          <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            countDate="Mar 28, 2023 00:00:00"
          />
        </div>
        <div className="absolute top-0 h-screen w-screen z-40 ">
          {/* navbar */}
          <video
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
          >
            <source src={gameathonVideo} type='video/mp4; codecs="avc1"' />
          </video>
        </div>
      </div>
      <div
        className="relative"
        style={
          width > 640
            ? {
              backgroundImage: `url(${bgImgDesk})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "140vh",
              backgroundColor: "var(--bg-color)",
              boxShadow: "0px 0px 50px 0px var(--bg-color)",
            }
            : {
              backgroundImage: `url(${bgImgMobile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "120vh",
              boxShadow: "0px 0px 50px 0px var(--bg-color)",
            }
        }
      >
        <div className="Gameathon flex h-full">
          {/* <div className="h-[50vh] flex flex-row">
            <video autoPlay loop muted>
              <source src={gameathonVideo} type="video/mp4" />
            </video>
          </div> */}
          {/* main content */}
          <div className="flex flex-col justify-center p-5 md:p-10 2xl:pl-24">
            <h1
              className="text-2xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
              style={{ fontFamily: "Azonix" }}
            >
              Gameathon 2K23
            </h1>
            {/* sub heading */}
            <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
              28TH, 29TH & 30TH MARCH 2023
            </h2>
            {/* description */}
            <p className="text-base text-[#f0f0f070] 2xl:text-2xl pt-4 md:pt-10 md:w-1/3 2xl:w-1/2 leading-6 text-justify">
              Join us for a 3-day event at Adi Shankara Institute of Engineering
              & Technology where students can engage in team-working, explore
              their creative and technology skills, and challenge themselves to
              develop a game in just three days. With the support of industry
              partner TILTLABS, participants will be provided with a concept and
              access to tools such as Unity and Blender to create either casual
              or hyper-casual games.
            </p>
            {/* basic rounded line button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSflq22uUuGh9orK2Wry4Sucx-UlCsqIdJbtqx2atCpD97QZeQ/viewform"
              rel="noreferrer"
              target={"_blank"}
            >
              <button
                className="w-full md:w-1/4 p-5 md:p-auto text-center text-[var(--secondary-color)] rounded-full duration-300 md:py-5 text-xl font-bold uppercase mt-10 hover:bg-[#f0f0f054] hover:text-[var(--secondary-color)] flex items-center justify-center border border-[var(--primary-color)] hover:border-[var(--secondary-color)]"
                style={{
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.6)",
                }}
              >
                Register Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 my-auto "
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
            </a>
          </div>
        </div>
      </div>
      <div className="Gameathon relative my-10 mb-16">
        <div className="bg-animation -z-10">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        <div className=" py-2 sticky top-0 z-10">
          <div className="w-[90vw] mx-auto md:w-full md:max-w-5xl rounded-full border border-gray-200 bg-transparent overflow-hidden">
            {/* :LARGE DEVICES */}
            <div className="relative  sm:block overflow-hidden">
              {/* ::Navigation Tabs */}
              <nav aria-label="Tabs">
                <ul className="grid bg-black/70 grid-flow-col auto-cols-fr">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <li
                        key={tab.name}
                        className={`relative z-10 rounded-full text-base ${
                          tab.name === currentTab
                            ? "transition duration-300 text-black"
                            : "text-gray-400 hover:text-gray-500"
                        }`}
                      >
                        <button
                          type="button"
                          className="md:p-4 p-2 w-full inline-flex justify-center items-center text-center md:text-sm text-[.6rem] font-semibold"
                          onClick={() => setCurrentTab(tab.name)}
                        >
                          {width > 640 ? (
                            <Icon className="mr-1.5 w-5 h-5" />
                          ) : (
                            ""
                          )}
                          {tab.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              {/* ::Sliding Background */}
              <div className="absolute inset-0 mx-auto w-full h-full rounded-full">
                <div
                  className="relative h-full transition-all duration-300 ease-in"
                  style={{ transform: `translateX(${translateValue}%)` }}
                >
                  <div
                    className="h-full rounded-full bg-[var(--secondary-color)]"
                    style={{ width: `${(1 / tabs.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {tabs.map((tab) => {
          return (
            <div
              key={tab.name}
              className="md:mx-16 mx-6 my-10 text-[var(--primary-color)]"
            >
              {tab.name === currentTab ? tab.page : ""}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gameathon;
