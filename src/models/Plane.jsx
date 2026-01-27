import {useRef,useEffect} from 'react'
import {useAnimations,useGLTF} from "@react-three/drei"

import planeScene from "../assets/3d/plane.glb"

const Plane = ({isRotating,...props}) => {
	const ref = useRef()
	const {scene,animations} = useGLTF(planeScene)
	const {actions} = useAnimations(animations,ref)

	// this effect is rotation of wings when the island is rotating, "actions['Take 001']" is predefined action in react-three/drei 
	useEffect(() => {
		if(isRotating){
			actions['Take 001'].play();
		}
		else{
			actions['Take 001'].stop();
		}
	}, [actions,isRotating])

	return (
		<mesh {...props} ref={ref}>
			<primitive object={scene}/>
		</mesh>
	)
}

export default Plane