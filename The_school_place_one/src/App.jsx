// import { useState } from 'react'
import { Routes, Route }  from "react-router-dom";

import Home from "./pages/Home/Home"
import AboutUs from "./pages/AboutUs/AboutUs"
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Courses from "./pages/Courses/Courses"

function App() {
  return(
    <Routes>
      <Route path="/"               element={<Home />}   />
      <Route path="/about-us"       element={<AboutUs />} />
      <Route path="/course-details" element={<CourseDetails />} />
      <Route path="/courses" element={<Courses />} />


    </Routes>
  )
}

export default App;