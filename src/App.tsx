import './App.css'
import { NavigationBar } from './components/nav-bar/NavigationBar'
import { Footer } from './components/footer/Footer'
import { ContactMe } from './components/contact/ContactMe'
import { AboutMe } from './components/about-me/AboutMe'
import { Experience } from './components/experience/Experience'
import { Portfolio } from './components/portfolio/Portfolio'

function App() {

  return (

    <div className='flex flex-col h-screen justify-between' style={{ width: "100%" }}>
      
      <NavigationBar />
      
      <main className='flex flex-col justify-between mb-auto'>

        <AboutMe />

        <Experience />

        <Portfolio />

        <ContactMe />

      </main> 
      
      <Footer />
     
    </div>

  )

}

export default App
