import React from 'react';
import skills from "../constants";
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-w-5xl mx-auto sm:px-16 px-8 py-6">
      <div className="pt-[100px] pb-4">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow">
            {" "}
            ARIN PANDEY
          </span>{" "}
          👋
        </h1>

        <div className="mt-3 flex flex-col gap-2 text-slate-500">
          <p>
            Aspiring MERN stack developer with hands-on experience in building responsive and interactive web
            applications using technologies like React.js, Node.js, Express.js, and MongoDB. Passionate about full-stack
            development and data structures. Proficient in both frontend and backend with a solid foundation in C++,
            Python, and database design
          </p>
        </div>
      </div>

      <div className="py-4 flex flex-col">
        <h3 className="font-semibold sm:text-2xl text-xl relative font-poppins">My Skills</h3>
        <div className="mt-4 flex flex-wrap gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="relative duration-200 perspective-500 w-16 h-16">
              <div 
                className="absolute inset-0 z-[-1] w-inherit h-inherit transition-all duration-250 preserve-3d
                origin-bottom-right rotate-z-15 will-change-transform shadow-custom"
              />
              <div 
                className="absolute inset-0 z-10 w-full h-full bg-white/20 backdrop-blur-sm transition-transform duration-300 ease-in-out 
                transform hover:scale-110 hover:rotate-3 rounded-xl shadow-md flex items-center justify-center"
              >
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pb-4">
        <hr className="border-slate-400 mb-4"/>
        <CTA/> 
      </div>
    </section>
  );
}

export default About;