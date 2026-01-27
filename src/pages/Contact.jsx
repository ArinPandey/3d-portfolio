import React,{useState,useRef,Suspense} from 'react'
import emailjs from '@emailjs/browser'
import {Canvas} from "@react-three/fiber"
import Loader from '../components/Loader'
import Alert from '../components/Alert'
import useAlert from '../hooks/useAlert'


import Fox from '../models/Fox'

const Contact = () => {
	const formRef = useRef(null)
	const [form,setForm] = useState({name:'',email:'',message:''})
	const [loading, setLoading] = useState(false);
	const {alert,showAlert,hideAlert} = useAlert();

	const[currentAnimation,setCurrentAnimation] = useState("idle")

	const handleChange = (e) => {
		setForm({...form,[e.target.name]:e.target.value})
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	setLoading(true)
	// 	setCurrentAnimation('hit')

	// 	emailjs.send(
	// 		import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
	// 		import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
	// 		{
	// 			from_name:form.name,
	// 			to_name:"Arin",
	// 			from_email:form.email,
	// 			to_email:'www.arinpandey@gmail.com',
	// 			message:form.message,
	// 		},
	// 		import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
			
	// 		).then(() => {
	// 			setLoading(false);
	// 			showAlert({
	// 	            show: true,
	// 	            text: "Thank you for your message 😃",
	// 	            type: "success",
	// 	          });

	// 			setTimeout(() => {
	// 				setCurrentAnimation('idle')
	// 				setForm({name:"",email:"",message:""});
	// 			},3000)
	// 		}).catch((error) => {
	// 			setLoading(false);
	// 			setCurrentAnimation('idle')
	// 			console.log(error);
	// 			showAlert({
	// 	            show: true,
	// 	            text: "I didn't receive your message 😢",
	// 	            type: "danger",
	// 	          });
	// 		})
	// }

	const handleSubmit = (e) => {
	    e.preventDefault();
	    setLoading(true); // ✅ Fixed: Matches your state definition
	    setCurrentAnimation('hit');

	    emailjs.send(
	        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
	        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
	        {
	            from_name: form.name,
	            to_name: "Arin",
	            from_email: form.email,
	            to_email: 'www.arinpandey@gmail.com',
	            message: form.message,
	        },
	        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
	    ).then(() => {
	        setLoading(false); // ✅ Fixed
	        showAlert({
	            show: true,
	            text: "Thank you for your message 😃",
	            type: "success",
	        });

	        setTimeout(() => {
	            setCurrentAnimation('idle');
	            setForm({ name: "", email: "", message: "" });
	        }, 3000); // ✅ Fixed: Removed the [] brackets

	    }).catch((error) => {
	        setLoading(false); // ✅ Fixed
	        setCurrentAnimation('idle');
	        console.log(error);
	        showAlert({
	            show: true,
	            text: "I didn't receive your message 😢",
	            type: "danger",
	        });
	    })
	}

	const handleFocus = () => setCurrentAnimation('walk'); //It is a function, that runs when someone is writing...

	const handleBlur = () => setCurrentAnimation('idle'); //It is a function too, that runs when someone is stopped writing...

	return (
		<section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)">
			{alert.show && <Alert {...alert} />}
			<div className="flex-1 min-w-[50%] flex flex-col">
				<h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">Get in Touch</h1>
				<form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit} ref={formRef}>
					<label 
					className="text-black-500 font-semibold"
					>
						Name 
						<input 
						type="text"
						name="name"
						className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
						block w-full p-2.5 mt-2.5 font-normal shadow-card"
						placeholder="Example:Arin"
						required
						value={form.name}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold" htmlFor="">
						Email 
						<input 
						type="email"
						name="email"
						className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
						block w-full p-2.5 mt-2.5 font-normal shadow-card"
						placeholder="Example:arin@gmail.com"
						required
						value={form.email}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold" htmlFor="">
						Your Message 
						<textarea
						name="message"
						rows={4}
						className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 
						focus:border-blue-500 mt-2.5 font-normal shadow-card"
						placeholder="Let me know how can i help you"
						required
						value={form.message}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						/>
					</label>
					<button
						type="submit"
						className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 
						font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
						disabled={loading}
						onFocus={handleFocus}
						onBlur={handleBlur}
						>
						{loading ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</div>

			{/*For large devices, show the fox/canvas*/}
			<div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
				<Canvas
					camera={{
						position:[0,0,5],
						fov:75,
						near:0.1,
						far:1000
					}}
				>
				<directionalLight intensity={2.5} position={[0,0,1]}/>
				<ambientLight intensity={0.5}/>
				<Suspense fallback={<Loader/>}>
					<Fox
						currentAnimation={currentAnimation}
						position={[0.5,0.35,0]}
						rotation={[12.6,-0.6,0]}
						scale={[0.5,0.5,0.5]}
					/>
				</Suspense>
					
				</Canvas>
			</div>

		</section>
	)
}

export default Contact