import './App.css'
import { NavigationBar } from './components/nav-bar/NavigationBar'
import { MyInfo } from './components/my-info/MyInfo'
import { Experience } from './components/experience/Experience'
import { Portfolio } from './components/portfolio/Portfolio'
import { AboutMe } from './components/about-me/AboutMe'
import BackgroundCanvas from './components/background/BackgroundCanvas'
import useViewportSize from './utils/useViewportSize'

function App() {

  const getViewportSize = useViewportSize()

  return (
    <BackgroundCanvas>

      <div className={`flex flex-col ${ getViewportSize?.[0] > 800 ? "overflow-hidden" : "overflow-auto" }`}>

        <NavigationBar />
        
        <main className={`flex  ${ getViewportSize?.[0] > 800 ? "flex-row" : "flex-col" }`}>

          <div className={`container flex flex-col ${ getViewportSize?.[0] < 800 ? "flex-col" : "h-screen" }`}>

            <MyInfo />

          </div>

          <div className={`container flex flex-col ${ getViewportSize?.[0] > 800 ? "overflow-scroll" : null } h-screen pb-20`}> 

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
