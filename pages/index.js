import AboutMe from "../components/Common/AboutMe"
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "../components/Layouts/Navbar"
import PersonalProjects from "../components/Common/PersonalProjects"
import Tech from "../components/Common/Tech"
import WorkProjects from "../components/Common/WorkProjects"
import Contact from "../components/Common/Contact"

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Tech />
      <PersonalProjects />
      {/* <WorkProjects /> */}
      <Contact />
    </div>
  ) 
}
