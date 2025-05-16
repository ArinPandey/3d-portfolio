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
	      </div>
	      </section>

	)
}

export default Projects