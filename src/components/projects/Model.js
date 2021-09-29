/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useEffect, useRef } from "react"
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import Clapper from '../models/Clapper.js'
import Guitar from '../models/Guitar.js'
import Computer from '../models/Computer.js'

import Brain from '../models/Brain.js'



export default function Model({ scroll, ...props }) {
  const t = useRef(0)
  const group = useRef()
  const {animations } = useGLTF("/model.glb")
  const { actions, mixer } = useAnimations(animations, group)

   const { viewport } = useThree()
   const k = 3
   const sigmoidNum = 1 / (1 + Math.exp(-viewport.width/k))
  useEffect(() => void actions["CameraAction.005"].play())
 
  useFrame((state) => {
    mixer.setTime((t.current = THREE.MathUtils.lerp(t.current, actions["CameraAction.005"]._clip.duration * scroll.current, 0.05)))
    group.current.children[0].children.forEach((child) => {
      const et = state.clock.elapsedTime
      child.position.y = child.position.y + (Math.sin(et+child.index)/80)
      child.rotation.x = Math.sin((et + child.index * 2000) / 3) / 10
      child.rotation.y = Math.cos((et + child.index * 2000) / 2) / 10
      child.rotation.z = Math.sin((et + child.index * 2000) / 3) / 10
      //console.log(`${child.name}: index = ${index} position = ${child.position.x}, ${child.position.y}, ${child.position.z} `)
    })
  })
  const scaleArr= [0.55,0.55,0.55]
  return (
    <group ref={group} {...props} dispose={null} className = "newHome">
      <group
        position={[0.06, 4.04, 0.35]}
        scale={[0.25, 0.25, 0.25]}>
          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {1} position={[5,-10,30]}>
            <Computer name="Design-den"  scale={[30,30,30]} />
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {3} position={[32,0,13]}>
            <Guitar name="Fretboard"  scale={[1.45,1.45,1.45]} rotation={[Math.PI,-Math.PI/12,-Math.PI/2]} />
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {7} position={[28,7,-10]}>
            <Clapper name="TagFlix" scale={scaleArr}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {2}  position={[15,16,-25]}>
           {/*<MysBox name="Loom" scale={scaleArr}/>*/}
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {5}  position={[-10,20,-45]}>
          <Computer name="Portfolio"  scale={[30,30,30]} />
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {4}  position={[-30,30,-17]}>
           {/*<Brain name="RSA" scale={[200,200,200]}/>*/}
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {6} position={[-25,48, 20]}>
          {/*} <MysBox name="RPi" scale={scaleArr}/>*/}
          </mesh>

      </group>
      <group name="Camera" position={[-1.78, 2.04, 23.58]} rotation={[1.62, 0.01, 0.11]}>
        <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} rotation={[-Math.PI / 2, 0, 0]}>
          <directionalLight
            intensity={2}
          />
        </PerspectiveCamera>
      </group>
    </group>
  )
}

useGLTF.preload("/model.glb")
