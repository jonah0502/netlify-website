/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import MysBox from './Mystery.js'

const color = new THREE.Color()

export default function Model({ scroll, ...props }) {
  const t = useRef(0)
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/model.glb")
  const { actions, mixer } = useAnimations(animations, group)
  const [hovered, set] = useState()

   const { viewport } = useThree()
   const k = 3
   const sigmoidNum = 1 / (1 + Math.exp(-viewport.width/k))
    console.log(sigmoidNum)
   const extras = { receiveShadow: true, castShadow: true, "material-envMapIntensity": 0.2 }
  useEffect(() => void actions["CameraAction.005"].play(), [])
  useEffect(() => {
    if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])
  useFrame((state) => {
    mixer.setTime((t.current = THREE.MathUtils.lerp(t.current, actions["CameraAction.005"]._clip.duration * scroll.current, 0.05)))
    group.current.children[0].children.forEach((child, index) => {
      if(child.material){
        child.material.color.lerp(color.set(hovered === child.name ? "tomato" : "#202020").convertSRGBToLinear(), hovered ? 0.1 : 0.05)
      }
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
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
        onPointerOut={(e) => (e.stopPropagation(), set(null))}
        position={[0.06, 4.04, 0.35]}
        scale={[0.25, 0.25, 0.25]}>
          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {1}>
            <MysBox name="Box"  scale={scaleArr} position={[5,-13,30]}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {3}>
            <MysBox name="Box2"  scale={scaleArr} position={[32,-2,13]}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {7}>
            <MysBox name="Box3" scale={scaleArr} position={[28,7,-10]}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {2}>
           <MysBox name="Box4" scale={scaleArr} position={[15,16,-25]}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {5}>
            <MysBox name="Box5" scale={scaleArr} position={[-10,20,-45]}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {4}>
           <MysBox name="Box6" scale={scaleArr} position={[-30,30,-17]}/>
          </mesh>

          <mesh scale = {[sigmoidNum, sigmoidNum, sigmoidNum]} index = {6}>
           <MysBox name="Box7" scale={scaleArr} position={[-25,48, 20]}/>
          </mesh>

      </group>
      <group name="Camera" position={[-1.78, 2.04, 23.58]} rotation={[1.62, 0.01, 0.11]}>
        <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} rotation={[-Math.PI / 2, 0, 0]}>
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  )
}

useGLTF.preload("/model.glb")
