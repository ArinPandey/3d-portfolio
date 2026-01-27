// Now the second step will be to create Home Page...

import {useState,Suspense,useEffect,useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundon, soundoff } from "../assets/icons";

// We used "Sketchfab" website to download all required 3d models and downloaded "React Three Fiber" package to 
// use the model files which we get in ".glb" format,then "gltf" application converts them in the form of "React components"

const Home = () => {

	const audioRef = useRef(new Audio(sakura));
	audioRef.current.volume = 0.6
	audioRef.current.loop = true
	const [isPlayingMusic,setIsPlayingMusic] = useState(false)
	useEffect(() => {
		if(isPlayingMusic){
			audioRef.current.play();
		}
		return () => {
			audioRef.current.pause();
		}
	},[isPlayingMusic])

	const [isRotating,setIsRotating] = useState(false)
	const[currentStage,setCurrentStage] = useState(1)

	// Function for adjustment of position of island on the screen such that it looks good, and then using the variables as props in the "island" component below...
	const adjustIslandForScreenSize = () => {
		let screenScale = null;
		let screenPosition = [0,-6.5,-43];
		let rotation = [0.1,4.7,0];

		if(window.innerWidth < 786){
			screenScale = [0.9,0.9,0.9];
		}
		else{
			screenScale = [1,1,1];
		}
		return [screenScale,screenPosition,rotation]
	}

	const adjustPlaneForScreenSize = () => {
		let screenScale,screenPosition,rotation;

		if(window.innerWidth < 786){
			screenScale = [1.5,1.5,1.5];
			screenPosition = [0,-1.5,0];
		}
		else{
			screenScale = [3,3,3];
			screenPosition = [0,-4,-4];
		}
		return [screenScale,screenPosition,rotation]
	}

	const [islandScale,islandPosition,islandRotation] = adjustIslandForScreenSize()
	const [planeScale,planePosition] = adjustPlaneForScreenSize()

	return (
		<section className="w-full h-screen relative">

			{/*This is the "Popups/HomeInfo.jsx" which appear 4 times in a single complete rotation of our canvas...*/}
			<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
				{currentStage && <HomeInfo currentStage={currentStage}/>}
			</div>

			{/*"Canvas" is a DOM react renderer for three.js that takes three.js element as children */}
			<Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
				camera={{near:0.1,far:1000}}
			>
				{/*"Suspense" is just a wrapper and "Loader/Loader.jsx" is a component to show loader while the 3d comp is loading...*/}
				<Suspense fallback={<Loader/>}>

					<directionalLight position={[1,10,1]} intensity={1}/>
					<ambientLight intensity={0.5}/>
					{/*	<pointLight/>
					<spotLight/>*/}
					<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

					<Bird/>

					<Sky isRotating={isRotating}/>

					<Island
						position={islandPosition}
						scale={islandScale}
						rotation={islandRotation}
						isRotating={isRotating}
						setIsRotating={setIsRotating}
						setCurrentStage={setCurrentStage}
					/>

					<Plane 
					isRotating={isRotating}
					planeScale={planeScale}
					planePosition={planePosition}
					rotation={[0,20,0]}/>

					</Suspense>
			</Canvas>
				<div className="absolute bottom-2 left-2">
					<img 
					src={!isPlayingMusic ? soundoff : soundon} 
					alt="sound" 
					className="w-10 h-10 cursor-pointer object-contain"
					onClick = {() => setIsPlayingMusic(!isPlayingMusic)}
					/>
					<span className="text-black-500 text-sm">
					   Tap to {isPlayingMusic ? 'pause' : 'play'}
					</span>
				</div>

		</section>	
		)
}

export default Home