import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js'

export default function Text({ children, vAlign = 'center', hAlign = 'center', size = 1.5, color = '#000000', ...props }) {
  const font = useLoader(FontLoader, '/bold.blob')
  const config = useMemo(
    () => ({ font, size: 40, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    [font]
  )
  const mesh = useRef()
  useLayoutEffect(() => {
    const size = new THREE.Vector3()
    mesh.current.geometry.computeBoundingBox()
    mesh.current.geometry.boundingBox.getSize(size)
    mesh.current.position.x = (hAlign === 'center') ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    mesh.current.position.y = (vAlign === 'center') ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  }, [children])


  return (
    <mesh scale = {0.09} rotation = {[0, Math.PI /2, 0]} position={[0,1,0.5]}>
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        {children}
      </mesh>
    </group>
    </mesh>
  )
}
