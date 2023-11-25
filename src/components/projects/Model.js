/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useEffect, useRef } from "react"
import { useGLTF, useAnimations, PerspectiveCamera , Bounds, Edges } from "@react-three/drei"
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { useControls } from 'leva'
import { useFrame, useThree } from "@react-three/fiber"
import Clapper from '../models/Clapper.js'
import Guitar from '../models/Guitar.js'
import Gavel from '../models/Gavel.js'
import Computer from '../models/Computer.js'
import MysBox from '../models/Mystery.js'
import Brain from '../models/Brain.js'
//import Cursor from '../models/Cursor.js'

function Cursor(props) {
  const ref = useRef()
  const { nodes } = useGLTF('/cursor.glb')
  const  gradient = 0.65

  // Animate gradient
  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 2)
    const cos = Math.cos(state.clock.elapsedTime / 2)
    ref.current.layers[0].origin.set(cos / 2, 0, 0)
    ref.current.layers[1].origin.set(cos, sin, cos)
    ref.current.layers[2].origin.set(sin, cos, sin)
    ref.current.layers[3].origin.set(cos, sin, cos)
  })

  return (
    <mesh {...props} geometry={nodes.Cube.geometry}>
      <LayerMaterial ref={ref} toneMapped={false}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * gradient} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * gradient} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * gradient} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * gradient} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial>
      <Edges color="white" />
    </mesh>
  )
}

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
  const n = 7
  return (
    <group ref={group} {...props} dispose={null} className = "newHome">
      <group
        position={[0.06, 4.04, 0.35]}
        scale={[0.25, 0.25, 0.25]}>
          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {1} position={[5,-5,30]}>
            <Cursor name="Design-den" rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]} scale={[0.5 * n, 1 *n, 0.5 *n]} />
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {3} position={[32,0,13]}>
            <Gavel name="Campaign" scale={[5, 5, 5]}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {7} position={[28,7,-10]}>
            <Clapper name="TagFlix" scale={scaleArr}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {2}  position={[15,23,-25]}>
           <Guitar name="Loom" scale={[1.5, 1.5, 1.5]}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {5}  position={[-10,23,-45]}>
          <Computer name="Portfolio"  scale={[1.5,1.5,1.5]}  rotation={[0,Math.PI,0]}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {4}  position={[-30,30,-17]}>
           <Brain name="RSA" scale={[200,200,200]}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {6} position={[-25,48, 20]}>
           <MysBox name="RPi" scale={scaleArr}/>
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
