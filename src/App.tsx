import './App.css'
import { Canvas } from '@react-three/fiber'
import { Background } from './animations/Background'
import { NavigationBar } from './components/nav-bar/NavigationBar'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <div className='flex flex-col h-screen justify-between' style={{ width: "100%" }}>
      
      <NavigationBar />
      
      <main className='mb-auto'>

      </main>
      
      <Footer />
     
    </div>
  )
}

export default App
