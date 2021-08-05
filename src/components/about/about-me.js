import React from "react";
import { useRef, useEffect, useState, Suspense} from 'react';
import jonah from '../../assets/jonah.jpg';
import * as THREE from 'three'
import moon from '../../assets/moon.jpg';
import normal from '../../assets/normal.jpg';
import Alien from "./Alien.js"

import url from '../../assets/Strobe.mp4'
// R3F
import { useFrame, useLoader } from "@react-three/fiber";
import { Html, Box, Stars, Sphere } from "@react-three/drei";
//Components
import { Section } from "./hSection";
//Intersection Observer
import { useInView } from "react-intersection-observer";


export default function AbtMe ({domContent, position, children, bgColor, starRef}) {
   // const ref = useRef();
    const boxRef = useRef();
    const sphereRef = useRef();
    const moonTexture = useLoader(THREE.TextureLoader, moon)
    const normals = useLoader(THREE.TextureLoader, normal);

    const [video] = useState(() => {
      const vid = document.createElement("video");
      vid.src = url;
      vid.crossOrigin = "Anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.play();
      return vid;
    });




    useFrame(() => (
      sphereRef.current.rotation.y += 0.002
    ));
    const texture = useLoader(THREE.TextureLoader, jonah)
    return (
      <Section factor={1.5} offset={1} >
        
        <Html fullscreen portal={domContent} position={[0, position -30, 0]}>
          <div id="AbtMe" className = "container">
               {children}
            </div>
          </Html>
        <group position={[0, position, 0]}>
        <mesh  ref={starRef}  position={[0, 5, 0]}>        
        <Stars radius={105} depth={50} count={5000} factor={4} saturation={0} fade />
        </mesh>
        <mesh>
        <Suspense fallback={null}>
        {/*<Alien scale={30,30,30} position={[0, 100, -70]}/>*/}
        </Suspense>
      <Sphere ref={sphereRef} visible position={[25, 125, 75]} args={[4, 16, 16]} scale={4,4,4}>
          <meshStandardMaterial
      attach="material"
      color="#FFFFFF"
      factor={0.05} // Strength, 0 disables the effect (default=1)
      speed={2} // Speed (default=1)
      roughness={0}
      normalMap={normals}
      map={moonTexture}
      />
      </Sphere>
  </mesh>



        <mesh  position={[0, 5, 0]}>

        <Box ref={boxRef} args={[17, 17, 17]} radius={0} position={[55, 10, 32]} rotation={[0,0,0]}>
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