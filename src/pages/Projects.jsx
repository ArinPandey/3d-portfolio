import React from 'react'

const Projects = () => {
	return (
		<section className="max-w-5xl mx-auto sm:px-16 px-8 py-6">
		  <div className="pt-[100px] pb-4">
		    <h1 className="head-text">
		      My
		      <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow">
		        {" "}
		        Projects
		      </span>{" "}
		    </h1>
		    <div className="mt-3 flex flex-col gap-2 text-slate-500">
		      <p>
		        I've embarked on numerous projects throughout the years, but these are
		        the ones I hold closest to my heart. Many of them are open-source, so if
		        you come across something that piques your interest, feel free to
		        explore the codebase and contribute your ideas for further enhancements.
		        Your collaboration is highly valued!
		      </p>
		    </div>

		    <div className="mt-8">
		      <h2 className="text-2xl font-bold mb-4">PROJECTS:</h2>
		      <ul className="space-y-6">
		        <li>
		          <div className="flex justify-between items-center mb-2">
		            <span className="font-medium text-lg"><span className="font-bold text-xl mr-2">•</span> Employee Management System</span>
		            <a 
		              href="https://employee-management-system-e9wn4yrta.vercel.app" 
		              target="_blank"
		              rel="noopener noreferrer"
		            >
		              <span className="bg-blue-500 text-white px-2 py-1 rounded">LINK -&gt;</span>
		            </a>
		          </div>
		          <p className="text-sm text-gray-600 pl-6">
		            Developed a responsive Employee Management System dashboard utilizing HTML, CSS, and JavaScript 
		            with the React library. This dashboard enables efficient tracking and management of employee tasks.
		          </p>
		        </li>
		        <li>
		          <div className="flex justify-between items-center mb-2">
		            <span className="font-medium text-lg"><span className="font-bold text-xl mr-2">•</span> Password Generator</span>
		            <a 
		              href="https://password-generator-oy2oamiet-arin-pandeys-projects-f2e110dc.vercel.app" 
		              target="_blank"
		              rel="noopener noreferrer"
		            >
		              <span className="bg-blue-500 text-white px-2 py-1 rounded">LINK -&gt;</span>
		            </a>
		          </div>
		          <p className="text-sm text-gray-600 pl-6">
		            Developed a web-based password generator using HTML, CSS, and JavaScript for secure password creation.
		          </p>
		        </li>
		        <li>
		          <div className="flex justify-between items-center mb-2">
		            <span className="font-medium text-lg"><span className="font-bold text-xl mr-2">•</span>3D Portfolio Website</span>
		            <span className="text-gray-600 italic">This project</span>
		          </div>
		          <p className="text-sm text-gray-600 pl-6">
		            Personal portfolio website built with THREE.js and React, showcasing my projects and skills.
		          </p>
		        </li>
		      </ul>
		    </div>
		  </div>
		</section>
	)
}

export default Projects