import React from "react";
import { useRef, useEffect, useState, Suspense} from 'react';
import jonah from '../../assets/jonah.jpg';
import * as THREE from 'three'
import moon from '../../assets/moon.jpg';
import normal from '../../assets/normal.jpg';

import url from '../../assets/Strobe.mp4'
// R3F
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Html, Box, Stars, Sphere } from "@react-three/drei";
//Components
//Intersection Observer
import Skybox from './Skybox.js'


export default function AbtMe ({position, children}) {
   // const ref = useRef();
    const boxRef = useRef();
    const moonTexture = useLoader(THREE.TextureLoader, moon)
    const normals = useLoader(THREE.TextureLoader, normal);
    const { viewport } = useThree()
    const scaleVal = viewport.width / 205
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
      <group>
        <Skybox/>
        <Html fullscreen position={[0, position, 0]}>
        <div className= "text">

          <div style={{zIndex: "0"}} id="Home" className = "container home">
              <div className="title">{children}</div>
            </div>
            </div>
          </Html>
        <group position={[0, position, 0]}>
        <mesh  position={[0, 5, 0]}>        
        <Stars radius={55} depth={50} count={5000} factor={4} saturation={0} fade />
        </mesh>
        <mesh>
  </mesh>



        <mesh  position={[0, 5, 0]}>

        <Box ref={boxRef} args={[28, 28, 28]} radius={0} position={[30,27, 0]} rotation={[0,0,0]}>
          <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
        </Box>
        </mesh>

        </group>
        </group>
        
    );
  }