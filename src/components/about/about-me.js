import React from "react";
import { useRef, useState} from 'react';
import * as THREE from 'three'

import url from '../../assets/Strobe.mp4'
// R3F
import { Html, Box, Stars } from "@react-three/drei";
//Components
import { Section } from "./hSection";
//Intersection Observer


export default function AbtMe ({domContent, position, children, bgColor, starRef}) {
   // const ref = useRef();
    const boxRef = useRef();
    const sphereRef = useRef();
    const [video] = useState(() => {
      const vid = document.createElement("video");
      vid.src = url;
      vid.crossOrigin = "Anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.play();
      return vid;
    });




    return (
      <Section factor={1.5} offset={1} >
        
        <Html fullscreen portal={domContent} position={[0, position -30, 0]}>
        <div className= "text">

          <div id="Home" className = "container home">
              <div className="title">{children}</div>
            </div>
            </div>
          </Html>
        <group position={[0, position, 0]}>
        <mesh  ref={starRef}  position={[0, 5, 0]}>        
        <Stars radius={105} depth={50} count={5000} factor={4} saturation={0} fade />
        </mesh>
        <mesh>
  </mesh>



        <mesh  position={[0, 5, 0]}>

        <Box ref={boxRef} args={[28, 28, 28]} radius={0} position={[30, -8, 0]} rotation={[0,0,0]}>
          <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
        </Box>
        </mesh>

        </group>
      </Section>
    );
  }