import React from "react";
import { useRef, useState} from 'react';
import * as THREE from 'three'
import { useThree, useFrame} from "@react-three/fiber"
import { Canvas } from "@react-three/fiber"

// R3F
import { Html, Box, Points, PointMaterial } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm'

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props} className="abtMe">
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}


//Components
//Intersection Observer

export default function AbtMe ({domContent, position, children, starRef}) {


    const k = 80
   // const sigmoidNum = 1 / (1 + Math.exp(-viewport.width/k))
    return (
      <>
      <Stars/>
    </>
    );
  }