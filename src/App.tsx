import './App.css'
import { NavigationBar } from './components/nav-bar/NavigationBar'
import { MyInfo } from './components/my-info/MyInfo'
import { Experience } from './components/experience/Experience'
import { Portfolio } from './components/portfolio/Portfolio'
import { AboutMe } from './components/about-me/AboutMe'
import BackgroundCanvas from './components/background/BackgroundCanvas'
import useViewportSize from './utils/useViewportSize'

function App() {

  const layoutChangeWidth = 1000
  const getViewportSize = useViewportSize()

  return (
    <BackgroundCanvas>

      <div className={`flex flex-col h-screen w-screen overflow-hidden`}>

        <div className='flex '> 
        
          <NavigationBar />

        </div>
        
        <main className={`flex  ${ getViewportSize?.[0] > layoutChangeWidth ? "flex-row" : "flex-col overflow-auto" }`}>

          <div className={`container pt-20 flex flex-col ${ getViewportSize?.[0] < layoutChangeWidth ? "flex-col" : null }`}>

            <MyInfo />

          </div>

          <div className={`container flex flex-col ${ getViewportSize?.[0] > layoutChangeWidth ? "overflow-scroll pr-8" : "p-4" } h-screen pt-20 pb-14`}> 

            <AboutMe  />

            <Experience />

            <Portfolio />

          </div>

        </main> 
            
      </div>

    </BackgroundCanvas>
  )

}

export default App
