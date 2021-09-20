import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, } from "@react-three/drei"
import Model from "./Model"
import Overlay from "./Overlay"
import Header from "../header/Header.js";
import Loader from "../loader.js"
import Text from "../buttonText.js"
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <>
    <Loader/>
    <Text/>
    <Header/>
      <Canvas
        shadows
        onCreated={(state) => state.events.connect(overlay.current)}
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
        <ambientLight intensity={1} />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />

        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  )
}
