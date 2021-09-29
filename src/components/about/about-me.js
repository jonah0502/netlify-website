import React from "react";
import { useRef, useState} from 'react';
import * as THREE from 'three'
import { useThree} from "@react-three/fiber"

// R3F
import { Html, Box, Stars } from "@react-three/drei";
//Components
//Intersection Observer
import Skybox from "./Skybox.js"

export default function AbtMe ({domContent, position, children, starRef}) {
   // const ref = useRef();
    const boxRef = useRef();
    const viewport = useThree((state) => state.viewport)
    const [video] = useState(() => {
      const vid = document.createElement("video");
      vid.src = '/Strobe.mp4';
      vid.crossOrigin = "Anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.play();
      return vid;
    });


    const k = 80
    const sigmoidNum = 1 / (1 + Math.exp(-viewport.width/k))
    return (
      <>
        {/*<Skybox/>*/}
        <Html center prepend zIndexRange={[10, 0]}>
        <div className= "text">

          <div id="Home" className = "container home">
              <div className="title">{children}</div>
            </div>
            </div>
    </Html>
        <group position={[0, 0, 0]}>
        <mesh  ref={starRef}  position={[0, 0, 0]}>        
        <Stars radius={55} depth={50} count={5000} factor={4} saturation={0} fade />
        </mesh>
        <mesh>
  </mesh>



        <mesh  position={[0, 0, 0]} scale={[sigmoidNum, sigmoidNum, sigmoidNum]}>

        <Box ref={boxRef} args={[33, 33, 33]} radius={0} position={[0, 0, 0]} rotation={[0,0,0]}>
          <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
        </Box>
        </mesh>

        </group>
      </>
    );
  }