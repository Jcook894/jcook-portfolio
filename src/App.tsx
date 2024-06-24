import './App.css'
import { Canvas } from '@react-three/fiber'
import { Background } from './animations/Background'
import { NavigationBar } from './components/nav-bar/NavigationBar'

function App() {

  return (
    <div>
        <NavigationBar />
        <Canvas>
         <Background />
      </Canvas>
    </div>
  )
}

export default App
