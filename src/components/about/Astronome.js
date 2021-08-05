/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
//import url from '../assets/Strobe.mp4'
import {useThree,useFrame} from "@react-three/fiber";
import * as THREE from 'three'
import url from '../../assets/Strobe.mp4'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/astronome.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    //Armature|COSMONAUT(0)_TempMotion|COSMONAUT(0)_TempMotion: (...)
    actions['Armature|COSMONAUT(0)_TempMotion|COSMONAUT(0)_TempMotion'].play().setEffectiveTimeScale(2.5)
  })
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });
/*
  const [renderTarget] = useState(new THREE.WebGLCubeRenderTarget(1024, { format: THREE.RGBAFormat, generateMipmaps: true }))
  const cubeCamera = useRef()
  
  useFrame(({ gl, scene }) => {
    cubeCamera.current.update(gl, scene)
  })
*/
  return (
    <group ref={group} {...props} dispose={null}>
      {/*<cubeCamera layers={[11]} name="cubeCamera" ref={cubeCamera} position={[0, 0, 0]} args={[0.1, 100, renderTarget]} />*/}

      <group name="RL_ExtendedRoot" scale={0.01}>
        <group name="valvebiped_j_latiss_le" position={[12.18, 0.1, -1.16]} rotation={[-3.05, -1.24, -0.07]} />
        <group name="valvebiped_j_latiss_ri" position={[-12.18, 0.11, -1.17]} rotation={[0.09, -1.24, 3.07]} />
      </group>
      <group name="Armature" scale={0.01}>
        <primitive object={nodes.BoneRoot} />
        <skinnedMesh
          geometry={nodes.Object001_1.geometry}
          material={materials.Material__35}
          skeleton={nodes.Object001_1.skeleton}
        />        <skinnedMesh
        geometry={nodes.Object001_2.geometry}
        skeleton={nodes.Object001_2.skeleton}
      >
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Object001_3.geometry}
          material={materials.Material__37}
          skeleton={nodes.Object001_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001_4.geometry}
          material={materials.Material__38}
          skeleton={nodes.Object001_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001_5.geometry}
          material={materials.Material__39}
          skeleton={nodes.Object001_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001_6.geometry}
          material={materials.Material__40}
          skeleton={nodes.Object001_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001_7.geometry}
          material={materials.Material__41}
          skeleton={nodes.Object001_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object001_8.geometry}
          material={materials.Material__42}
          skeleton={nodes.Object001_8.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/astronome.glb')