import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women";
import RandomAbout from "./pages/RandomAbout";
import Courses from "./pages/Courses";
import Cohort2 from "./pages/Cohort2";
import AnyCourse from "./pages/AnyCourse";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

        {/* Nested Routes */}
        <Route path="/product/mens" element={<Men />} />
        <Route path="/product/womens" element={<Women />} />

        {/* Dynamic Route */}
        <Route path="/about/:id" element={<RandomAbout />} />

        <Route path="courses" element={<Courses />} />

        {/* Nested Dynamic Routes */}
        <Route path="courses/:CourseId" element={<AnyCourse />} />
        <Route path="courses/:CourseId/details" element={<CourseDetails />} />

        {/* Not Found Page */}
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;
