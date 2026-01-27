import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"

export {Home,Projects,Contact,About}

// why did the teacher first created an index.js file, imported and exported the components and then imported them into App.jsx...

// -> It might seem redundant at first—importing just to export again—but the teacher is using a very common industry design pattern known as a Barrel File.
// -> 1. Cleaner Imports (The Main Reason)
// Without the index.js file, your App.jsx would look cluttered because you would have to import each component from its specific file path.

// Without index.js (The "Messy" Way):

// // App.jsx
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

// This takes up 4 lines and repeats './pages/' over and over.

// With index.js (The "Clean" Way):

// // App.jsx
// import { Home, About, Projects, Contact } from './pages';
// This takes 1 line. It looks much sharper.