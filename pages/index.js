import AboutMe from '../components/Common/AboutMe'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/Layouts/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutMe />
    </div>
  ) 
}
