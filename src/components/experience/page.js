import React from "react";
import { useEffect} from 'react';
import * as THREE from 'three'

// R3F
import { useLoader } from "@react-three/fiber";
import { Html} from "@react-three/drei";
//Components
import { Section } from "./eSection";

//Intersection Observer
import { useInView } from "react-intersection-observer";



export default function URSA ({domContent, position, children, bgColor, object}) {
    const [refItem, inView] = useInView({ threshold: 0.5});
    useEffect(() => {
      inView && (document.getElementsByClassName('anim')[0].style.background = bgColor )});
    return (
      <Section factor={1.5} offset={1} >
        <group position={[0, position, 0]}>
        <Html fullscreen portal={domContent}>
            <div className = "text">
          <div ref={refItem} className = "container experience">
               {children}
            </div>
            </div>
          </Html>
        </group>
      </Section>
    );
  }