import { useState } from 'react'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import {Home,About,Projects,Contact} from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="bg-slate-300/20 h-[100vh]">
      {/* First Step : Creating Routes for different pages...*/}
      <Router>
        <Navbar />
        <Routes>
          {/*Different components and their routes*/}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
      </Router>
    </main>
  )
}

export default App
