import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas camera = {{
          position: [0,0,7],
          fov:30,

        }}>
          <color attach="background" args={["#ececec"]}/>
          <OrbitControls/> 
          <mesh rotation ={[Math.PI / 10,10,10]}>
            <torusGeometry /> 
            <meshNormalMaterial/>
          </mesh>
        </Canvas>
    </>
  )
}

export default App
