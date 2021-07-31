import React from "react";
import {useRef, useState} from 'react';

// R3F
import {useThree,useFrame} from "@react-three/fiber";
import { Html} from "@react-three/drei";
//Components
import Points from "./points.js";
import Ame from "./Astronome.js"
import { Section } from "./hSection";
import * as THREE from 'three'
import Skybox from './Skybox.js'



export default function Homepage ({domContent, position, children}) {
    const ref = useRef();
    const spaceMan = useRef();

    useFrame(() => (
      ref.current.rotation.y += 0.002,
      spaceMan.current.rotation.y += 0.005
            ));
    let amp = 0

    const [renderTarget] = useState(new THREE.WebGLCubeRenderTarget(1024, { format: THREE.RGBAFormat, generateMipmaps: true }))
    const cubeCamera = useRef()
  
    useFrame(({ gl, scene }) => {
      cubeCamera.current.update(gl, scene)
    })

    return (
      <Section factor={1.5} offset={1}>
        <Skybox/>
        
        <Html fullscreen portal={domContent} position={[0,position - 75,0]}>
        <div className= "text">
          <div id="Home" classname = "container home">
               <h1 className="title">{children}</h1>
            </div>
            </div>
          </Html>
        <group position={[0, position -10, 0]}>
        <mesh ref={ref} position={[0, -35, 0]}>
        <cubeCamera layers={[11]} name="cubeCamera" ref={cubeCamera} position={[0, 0, 0]} args={[0.1, 100, renderTarget]} />
        <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[10,10,10]}castShadow>
        <sphereGeometry attach="geometry" args={[2, 32, 32]} />
          <meshBasicMaterial attach="material" color="#b1b1b1" envMap={renderTarget.texture} metalness={1} roughness={0.1} />
        </mesh>

          <mesh ref={spaceMan}>
        {<Ame position={[0, 14, -17]} scale={[25,25,25]} rotation={[-0.7,Math.PI,-0.3]}/>}
          </mesh>
             <Points 
             aVar = {amp}
             dotColor = {'#FFFFFF'}
             />
          </mesh>
        </group>
      </Section>
    );
  }
