import {useGLTF} from "@react-three/drei"
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

const Sky = ({isRotating}) => {

	const sky = useGLTF(skyScene)

	const skyRef = useRef()

	useFrame((_,delta) => {
		if(isRotating){
			skyRef.current.rotation.y += 0.25 * delta
		}
	})

	return (
		<mesh ref = {skyRef}>
			<primitive object={sky.scene}/>
		</mesh>
	)
}

export default Sky

// 1. Why no gltfjsx code? (The "Whole vs. Parts" Logic)
// The teacher used this method because the Sky is being treated as a single, static background object.

// No Internal Control Needed: For the Island/Fox, you might need to click specifically on the ground, or change 
// the color of the fox's fur. To do that, you need the code gltfjsx generates (which lists every node and material separately).

// Just One Action: For the Sky, you are only rotating the entire thing at once. You don't need to move individual clouds or change the sun's position inside the model.

// Simplicity: It keeps the code clean. Why write 50 lines of code to define every cloud mesh when you can just say "Render the whole scene" in 1 line?

// 2. What is <primitive>?
// Think of <primitive> as a "Connector" or a "Stand" for things that weren't created inside React.

// The Definition: It is a special R3F component that renders an existing Three.js object into your React scene.

// How it works here:

// useGLTF loads the file and creates a standard Three.js object structure (sky.scene).

// This object lives in memory but isn't on the screen yet.

// <primitive object={sky.scene} /> grabs that existing object and physically puts it into the React Canvas.

// The Analogy: If standard R3F components (like <mesh>, <boxGeometry>) are like building a Lego set from scratch, 
// using <primitive> is like taking a pre-built Lego castle and just placing it on the table.