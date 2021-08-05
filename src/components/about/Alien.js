/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/alien.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions['Armature|mixamo.com|Layer0'].play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorig1Hips} />
        <skinnedMesh geometry={nodes.Mesh.geometry} material={materials.Ch50_body1} skeleton={nodes.Mesh.skeleton} />
        <skinnedMesh geometry={nodes.Mesh_1.geometry} material={materials.Ch50_body} skeleton={nodes.Mesh_1.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/alien.glb')