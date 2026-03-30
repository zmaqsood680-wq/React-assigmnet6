import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Awards from "./components/Awards";

import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import img2 from "./Images/img2.jpeg";
import MoreInformation from "./components/MoreInformation";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={
          <>
           <Header />
           <img src={img2} alt="img" width="200" />
            <Summary />
            <Education />
            <WorkExperience />
            <Skills />
            <Awards />
             <MoreInformation/>
            <ul>
              <li><Link to="/hobbies">My Hobbies</Link></li>
              <li><Link to="/contact">Contact Me</Link></li>
            </ul>
            <Footer/>
            <form>
              <label>FEEDBACK:</label>
              <input type="text" placeholder="feedback"/>
            </form>
            
          </>
        } />

        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}