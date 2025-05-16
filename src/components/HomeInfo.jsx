import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from "../assets/icons"

const InfoBox = ({text,link,btnText}) => {
	return(
	<div className="mx-5 relative flex text-white flex-col gap-3 max-w-2xl bg-[#2b77e7] rounded-lg border-[#2b77e7] 
		shadow-[0.6vmin_0.6vmin_#336cc1,1vmin_1vmin_#0092db,1vmin_1vmin_#0092db,0.65vmin_1vmin_#0092db,1vmin_0.65vmin_#0092db] pt-4 pb-12 px-8">
		{text}
		<Link to={link} className="bg-white border-white shadow-[0.6vmin_0.6vmin_#fff,1vmin_1vmin_#d2e4ff,1vmin_1vmin_#d2e4ff,0.65vmin_1vmin_#d2e4ff,1vmin_0.65vmin_#d2e4ff] 
		py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3">
			{btnText}
			<img src={arrow} className="w-4 h-4 object-contain"/>
		</Link>
	</div>
	);
}

const renderContent = {
	1:(
		<h1 className="sm:text-xl sm:leading-snug text-center bg-[#2b77e7] relative rounded-lg border-[#2b77e7] 
		shadow-[0.6vmin_0.6vmin_#336cc1,1vmin_1vmin_#0092db,1vmin_1vmin_#0092db,0.65vmin_1vmin_#0092db,
		1vmin_0.65vmin_#0092db] py-4 px-8 text-white mx-5">Hi, I am <span>Arin Pandey</span>👋<br/>A software developer. </h1>
		),
	2:(
		<InfoBox 
		text="Worked on myself and picked up different skills."
		link="/about"
		btnText="Learn More"
		/>
		),
	3:(
		<InfoBox 
		text="Worked on different project and picked up different skills."
		link="/projects"
		btnText="Visit my portfolio"
		/>
		),
	4:(
		<InfoBox 
		text="Need a project done or looking for a dev? I'm just a few keystrokes away"
		link="/contact"
		btnText="Lets talk"
		/>
		),
}

const HomeInfo = ({currentStage}) => {
	return renderContent[currentStage] || null;
}

export default HomeInfo