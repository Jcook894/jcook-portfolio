import './App.css'
import { NavigationBar } from './components/nav-bar/NavigationBar'
import { Footer } from './components/footer/Footer'
import { MyInfo } from './components/my-info/MyInfo'
import { Experience } from './components/experience/Experience'
import { Portfolio } from './components/portfolio/Portfolio'
import { AboutMe } from './components/about-me/AboutMe'

function App() {

  return (

    <div className='flex flex-col'>
      
      <NavigationBar />
      
      <main className='flex flex-row'>

        <div className='flex flex-col'>

          <MyInfo />

        </div>

        <div className='flex flex-col overflow-scroll'> 

          <AboutMe />

          <Experience />

          <Portfolio />

        </div>

      </main> 
      
      <Footer />
     
    </div>

  )

}

export default App
