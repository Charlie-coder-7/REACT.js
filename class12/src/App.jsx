import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About';
import Courses from './Pages/Courses';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Kodr from './Pages/Kodr';
import Kodex from './Pages/Kodex';
import AllCourses from './Pages/AllCourses';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses" element={<AllCourses/>}/>
          <Route path='/courses/kodr' element={<Kodr />} />
          <Route path='/courses/kodex' element={<Kodex/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App