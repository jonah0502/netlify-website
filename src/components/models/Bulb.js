/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

//Source: https://www.cgtrader.com/free-3d-models/interior/other/lightbulb-49bd5dc7-bf88-44ba-a64a-e3942a367b2e

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bulb.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cylinder_Cylinder001_1.geometry} ref= {props.meshRef} onHover={props.onHover}>
            <meshStandardMaterial
            attach="material" // How the element should attach itself to its parent
            //color="grey"
            color= {props.a11y.focus ? "#8B8000" : props.a11y.hover ? "#8B8000" : "#808080"}
            transparent // Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects. When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
            opacity = {0.5}
            roughness={0.1} // The roughness of the material - Defaults to 1
            metalness={0.1} // The metalness of the material - Defaults to 0
          />
          </mesh>
        <mesh geometry={nodes.Cylinder_Cylinder001_2.geometry} material={materials.METAL_2} />
      </group>
      <mesh
        geometry={nodes.Torus004_Torus005.geometry}
        material={nodes.Torus004_Torus005.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder005_Cylinder008.geometry}
        material={nodes.Cylinder005_Cylinder008.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/bulb.glb')
