/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/guitar.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.3, -0.63]} scale={0.01}>
        <mesh
          geometry={nodes.body2_low.geometry}
          position={[0, 25.43, -8.82]}
          rotation={[-1.69, 0, Math.PI]}
        >

            <meshStandardMaterial 
              attach = "material"
              metalness={0.2}
              color = "#2b1d0e"
              />
        </mesh>
        <mesh
          geometry={nodes.inside1_low.geometry}
          material={nodes.inside1_low.material}
          position={[0, -3.7, -6.34]}
          rotation={[-1.69, 0, Math.PI]}
          scale={[0.95, 1, 0.63]}
        />
        <mesh
          geometry={nodes.inside2_low.geometry}
          material={nodes.inside2_low.material}
          position={[0, -3.7, -6.34]}
          rotation={[-1.69, 0, Math.PI]}
          scale={[0.95, 1, 0.63]}
        />
        <mesh
          geometry={nodes.inside3_low.geometry}
          material={nodes.inside3_low.material}
          position={[0, 25.33, -8.8]}
          rotation={[-1.69, 0, Math.PI]}
        />
      </group>
      <group position={[0, 0.56, -0.64]} scale={0.01}>
        <mesh
          geometry={nodes.body1_low.geometry}
          material={nodes.body1_low.material}
          position={[0, -0.26, -7.56]}
          rotation={[-1.69, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.bridge_low.geometry}
          material={nodes.bridge_low.material}
          position={[0, -29.91, 7.52]}
          rotation={[-1.69, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.bridgePin1_low.geometry}
          material={nodes.bridgePin1_low.material}
          position={[2.9, -30.24, 8.71]}
          rotation={[-1.69, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.bridgePin2_low.geometry}
          material={nodes.bridgePin2_low.material}
          position={[2.9, -30.24, 8.71]}
          rotation={[-1.69, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.bridgePin3_low.geometry}
          material={nodes.bridgePin3_low.material}
          position={[2.9, -30.24, 8.71]}
          rotation={[-1.69, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.bridgePin4_low.geometry}
          material={nodes.bridgePin4_low.material}
          position={[2.9, -30.24, 8.71]}
          rotation={[-1.69, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.bridgePin5_low.geometry}
          material={nodes.bridgePin5_low.material}
          position={[2.9, -30.24, 8.71]}
          rotation={[-1.69, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.bridgePin6_low.geometry}
          material={nodes.bridgePin6_low.material}
          position={[2.9, -30.24, 8.71]}
          rotation={[-1.69, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.capstan2_low.geometry}
          material={nodes.capstan2_low.material}
          position={[2.06, 39.78, -3.28]}
          rotation={[-1.98, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.capstan_low.geometry}
          material={nodes.capstan_low.material}
          position={[2.06, 39.78, -3.28]}
          rotation={[-1.98, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.fretboard_low.geometry}
          position={[0, 17.95, -1.42]}
          rotation={[1.46, 1.57, 0]}
        >

          <meshStandardMaterial 
              attach = "material"
              metalness={0.2}
              color = "#52361b"
              />
              </mesh>

        <mesh
          geometry={nodes.frets_low.geometry}
          material={nodes.frets_low.material}
          position={[0.06, 32.22, -0.62]}
          rotation={[-1.71, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.saddle_low.geometry}
          material={nodes.saddle_low.material}
          position={[0, -29.03, 8.29]}
          rotation={[-1.69, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.tuningPeg1_low.geometry}
          material={nodes.tuningPeg1_low.material}
          position={[5.21, 39.38, -5.69]}
          rotation={[-1.97, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.tuningPeg2_low.geometry}
          material={nodes.tuningPeg2_low.material}
          position={[5.21, 39.38, -5.69]}
          rotation={[-1.97, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.tuningPeg3_low.geometry}
          material={nodes.tuningPeg3_low.material}
          position={[5.21, 39.38, -5.69]}
          rotation={[-1.97, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.tuningPeg4_low.geometry}
          material={nodes.tuningPeg4_low.material}
          position={[5.21, 39.38, -5.69]}
          rotation={[-1.97, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.tuningPeg5_low.geometry}
          material={nodes.tuningPeg5_low.material}
          position={[5.21, 39.38, -5.69]}
          rotation={[-1.97, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.tuningPeg6_low.geometry}
          material={nodes.tuningPeg6_low.material}
          position={[5.21, 39.38, -5.69]}
          rotation={[-1.97, 0, Math.PI]}
        />
      </group>
      <mesh
        geometry={nodes.stand_low.geometry}
        material={materials['Material #178']}
        position={[-0.15, 0.01, -0.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.strings_low.geometry}
        material={materials['Material #241']}
        position={[0.03, 0.59, -0.59]}
        rotation={[-1.69, 0, Math.PI]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/guitar.glb')