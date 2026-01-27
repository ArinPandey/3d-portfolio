
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
		1vmin_0.65vmin_#0092db] py-4 px-8 text-white mx-5">
			Hi, I am <span className="font-semibold">Arin Pandey</span>👋
			<br/>
			A software developer.
			
			{/* Added instruction here with smaller text */}
			<br/><br/>
			<span className="text-sm font-normal italic text-blue-100">
				(Use left or right keys to rotate the island 🏝️)
			</span>
		</h1>
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

export default HomeInfo;

// Segment A: The InfoBox (The Reusable Card)
// Instead of writing the same HTML code three times for stages 2, 3, and 4, the teacher created this reusable component.
// Purpose: It acts as a template. You just pass in the text and the link destination, and it generates the UI box with the blue styling and the white button.

// Segment B: renderContent (The Lookup Table)
// This is a Javascript Object (dictionary) acting as a "Switch Statement". It maps a number (the stage) to a specific piece of JSX code.
// Stage 1: Is unique. It is the "Hello" message, so it is hardcoded separately with an <h1> tag.
// Stage 2, 3, 4: These are similar "Call to Action" cards, so they use the <InfoBox /> component we defined earlier to keep the code clean.

// Segment C: HomeInfo (The Gatekeeper)
// This is the only thing actually exported to the rest of the app.
// Logic: It looks at the currentStage prop passed from the parent.
// Lookup: It tries to find that number in the renderContent object.
// If currentStage is 1, it renders the greeting.
// If currentStage is 2, it renders the "About" box.
// The Safety Net (|| null): If currentStage is null (which happens when you are spinning the island between stops), 
// this code returns null. In React, returning null means "render nothing on the screen."