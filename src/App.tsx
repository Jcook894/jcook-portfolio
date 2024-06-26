import './App.css'
import { NavigationBar } from './components/nav-bar/NavigationBar'
import { MyInfo } from './components/my-info/MyInfo'
import { Experience } from './components/experience/Experience'
import { Portfolio } from './components/portfolio/Portfolio'
import { AboutMe } from './components/about-me/AboutMe'
import BackgroundCanvas from './components/background/BackgroundCanvas'

function App() {

  return (
    <BackgroundCanvas>
      <div className='flex flex-col overflow-hidden'>

        <NavigationBar />
        
        <main className='flex flex-row'>
          {/* <canvas className='absolute w-full h-full' style={{ background: "#232323" }} /> */}

          <div className='container flex flex-col h-screen'>

            <MyInfo />

          </div>

          <div className='container flex flex-col overflow-scroll h-screen pb-20'> 

            <AboutMe />

            <Experience />

            <Portfolio />

          </div>

        </main> 
            
      </div>
      </BackgroundCanvas>
  )

}

export default App
