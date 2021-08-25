import * as THREE from "three"
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber"
import React, { useEffect, useRef, Suspense, useState } from "react"
import { ContactShadows, useContextBridge, Sphere, MeshWobbleMaterial, Html } from "@react-three/drei"
import { A11y, useA11y, A11yAnnouncer, useUserPreferences, A11ySection, A11yUserPreferencesContext } from "@react-three/a11y"
import { ResizeObserver } from "@juggle/resize-observer"
import { proxy, useSnapshot } from "valtio"
import Header from "../header/Header.js";
import tag from '../../assets/tagSphere.png';
import MysBox from './Mystery.js'
import Bulb from './Bulb.js'
import Briefcase from './Briefcase.js'
import Computer from './Computer.js'
import Resume from './Resume.js'
import pdf from '../../assets/myRes.pdf'

import Loader from "../loader.js"
import Text from './Text'
import "../../App.scss";
import { useHistory, BrowserRouter as Router, Link } from "react-router-dom";

  //React.Children.toArray(arrayOfComponents)
  
  function Jumbo() {
    const ref = useRef()
    useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))
    return (
      <group ref={ref}>
        <Text hAlign="right" position={[-12, 6.5, 0]} children="JONAHS" />
        <Text hAlign="right" position={[-12, 0, 0]} children="PORFOLIO" />
        <Text hAlign="right" position={[-12, -6.5, 0]} children="PAGE" />
      </group>
    )
  }


const state = proxy({ dark: false, motionDisabled: false, active: 0, rotation: 0 })
const geometries = [
  new THREE.SphereBufferGeometry(1, 32, 32),
  new THREE.TetrahedronBufferGeometry(1.5),
  new THREE.TorusBufferGeometry(1, 0.35, 16, 32),
  new THREE.OctahedronGeometry(1.5),
  new THREE.IcosahedronBufferGeometry(1.5),
]

function ToggleButton(props) {
  const a11y = useA11y()
  const viewport = useThree((state) => state.viewport)
  const bulbRef = useRef()
  useFrame((state, delta) => {
    bulbRef.current.position.y = Math.sin(state.clock.elapsedTime) / 3 - 3.5
  })
  return (
    <mesh {...props} ref = {bulbRef}>
      <Bulb
        scale = {[0.75, 0.75, 0.75]}
        position = {[viewport.width/5,viewport.height/4,-3]}
        a11y={a11y}
      />
    </mesh>
  )
}

function Nav({ left }) {
  const snap = useSnapshot(state)
  const viewport = useThree((state) => state.viewport)
  const radius = Math.min(12, viewport.width / 2.5)
  return (
    <A11y
      role="button"
      description={`Spin ${left ? "left" : "right"}`}
      actionCall={() => {
        state.rotation = snap.rotation + ((Math.PI * 2) / 5) * (left ? -1 : 1)
        state.active = left ? (snap.active === 0 ? 4 : snap.active - 1) : snap.active === 4 ? 0 : snap.active + 1
      }}>
      <Diamond position={[left ? -radius : radius, 0, 0]} rotation={[0, 0, -Math.PI / 4]} scale={[1, 1, 1]}>
        <meshBasicMaterial color="aqua" />
      </Diamond>
    </A11y>
  )
}

function Diamond({ position, rotation }) {
  const a11y = useA11y()
  const viewport = useThree((state) => state.viewport)
  //The larger the k, the larger the useful domain.
  const k = 15
  const sigmoidNum = 1 / (1 + Math.exp(-viewport.width/k))

  return (
    <mesh position={position} rotation={rotation} scale={[sigmoidNum, sigmoidNum, sigmoidNum]}>
      <tetrahedronBufferGeometry />
      <meshStandardMaterial
        metalness={1}
        roughness={0.8}
        color={a11y.focus || a11y.hover ? "#cc66dd" : "#ffffff"}
        emissive={a11y.focus ? "#cc4444" : a11y.hover ? "#339922" : "#003399"}
      />
    </mesh>
  )
}

function Shape({ index, active, ...props }) {
  const vec = new THREE.Vector3()
  const ref = useRef()



  const snap =  useSnapshot(state)

  useFrame((state, delta) => {
    const s = active ? 2 : 1
    ref.current.scale.lerp(vec.set(s, s, s), snap.motionDisabled ? 1 : 0.1)
    if (snap.motionDisabled && index !== 0) {
      ref.current.rotation.y = ref.current.rotation.x = active ? 1.5 : 4
     // ref.current.position.y = 0
    } else if(index !== 0) {
      ref.current.rotation.y += 0.01
      ref.current.position.y = active ? Math.sin(state.clock.elapsedTime) / 2 - 1.5 : -1.5
    }
  })
  const { a11yPrefersState } = useUserPreferences()
  //note to self: page crashes on refresh and IDK why???
  const viewport = useThree((state) => state.viewport)
  //The larger the k, the larger the useful domain.
  const k = 15

  const sigmoidNum = 1 / (1 + Math.exp(-viewport.width/k))

  //wrap models in mesh and use sigmoid function to acurately scale
  const RenderHTML = () => {
    const titles = ["", "Projects", "Experience", "About", "Resume"]
      return (
      <Html center position={[0,8,0]}>
      <div className = "container" >
           {active && <h1 style = {state.dark? {color:"white"}:{color:"black"}}>{titles[index]}</h1>}
        </div>
      </Html>);
  }
  return (
    <>
    <mesh rotation-y={index * 2000} ref={ref} {...props}>
      {index === 0 &&
      <>
     <A11y role="link" href="/"  actionCall={() =>  window.appHistory.push("/") } >
       <mesh scale= {[sigmoidNum, sigmoidNum, sigmoidNum]}>
        <Jumbo />
        </mesh>
        </A11y>
        </>}
        {index === 1 &&
        <>
     <A11y role="link" href="/projects"  actionCall={() =>  window.appHistory.push("/projects") } >
     <mesh scale= {[sigmoidNum, sigmoidNum, sigmoidNum]}>
        <Computer scale = {[7,7,7]} position = {[0,-0.5,0]}/>
        </mesh>
        </A11y>
        </>
        }
        
        {index === 2 &&
        <>
     <A11y role="link" href="/experience"   actionCall={() =>  window.appHistory.push("/experience") } >
     <mesh scale= {[sigmoidNum, sigmoidNum, sigmoidNum]}>
        <Briefcase scale ={[0.045, 0.045, 0.045]} position = {[0,1,0]}/>
        </mesh>
        </A11y>
        </>
        }
        
        {index === 3 &&
        <>
     <A11y role="link" href="/about"  actionCall={() =>  window.appHistory.push("/about") } >
     <mesh scale= {[sigmoidNum, sigmoidNum, sigmoidNum]}>
        <MysBox
         scale = {[0.06, 0.06, 0.06]}
         emissive={a11yPrefersState.prefersDarkScheme ? "#001166" : "#009999"}
         />
           </mesh>

        </A11y>
        </>}
        {index === 4 &&
        <>
     <A11y role="link" href={pdf} actionCall={() =>  {const win = window.open(pdf, "_blank"); win.focus();}}>
     <mesh scale= {[sigmoidNum, sigmoidNum, sigmoidNum]}>
        <Resume scale={[8,8,8]} position={[0,0.5,0]}/>
        </mesh>
        </A11y>
        </>}
    </mesh>
    <RenderHTML/>
    </>
  )
}

function Carroussel() {
  const viewport = useThree((state) => state.viewport)
  const snap =  useSnapshot(state)
  const group = useRef()
  const radius = Math.min(6, viewport.width / 5)
  useFrame(
    () =>
      (group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        snap.rotation - Math.PI / 2,
        snap.motionDisabled ? 1 : 0.1,
      )),
  )
  const renderHTML = (i) => {
    if (i) {
      return (
      <Html position={[ -1,6.75,0]}>
      <div className = "container" >
           <h1>TagFlix</h1>
        </div>
      </Html>);
    }
  }
  return (
    <group ref={group} position = {[0, 0, 0]}>
      {["Home", "Projects", "Experience", "About", "Resume"].map((name, i) => (
        <A11y key={name} role="content" description={`a ${name}`} tabIndex={-1} hidden={snap.active !== i}>
          <Shape
            index={i}
            position={[radius * Math.cos(i * ((Math.PI * 2) / 5)), -2, radius * Math.sin(i * ((Math.PI * 2) / 5))]}
            active={snap.active === i}
            color={name}
          />
        </A11y>
        
      ))}
    </group>
  )
}

export default function App() {
  const snap =  useSnapshot(state)
  const { a11yPrefersState } = useUserPreferences()
  const lightRef = useRef()
  const lightRef2 = useRef()
  const lightRef3 = useRef()
  useEffect(() => {
    state.dark = a11yPrefersState.prefersDarkScheme
    return () => {}
  }, [a11yPrefersState.prefersDarkScheme])
  useEffect(() => {
    state.motionDisabled = a11yPrefersState.prefersReducedMotion
    return () => {}
  }, [a11yPrefersState.prefersReducedMotion])

  const ContextBridge = useContextBridge(A11yUserPreferencesContext)
  if(!state.dark && document.getElementsByClassName('inner-header')[0]){
    document.getElementsByClassName('inner-header')[0].style.color = "black";
  }
  else if(state.dark && document.getElementsByClassName('inner-header')[0]){
    document.getElementsByClassName('inner-header')[0].style.color = "white";
  }
  return (
    <Suspense fallback={null}>
      
    <Header />
    <Loader/>

    <div id = "scroller">
    <main className={snap.dark ? "dark" : "bright"} >

      <Canvas resize={{ polyfill: ResizeObserver }} camera={{ position: [0, 0, 15], near: 4, far: 30 }} pixelRatio={[1, 1.5]}>
        <ContextBridge>
          <pointLight position={[100, 100, 100]} intensity={0.5} ref={lightRef} />
          <pointLight position={[-100, -100, -100]} intensity={1.5} ref={lightRef2} color={snap.dark ? "#ccffcc" : "#00ffff"} />
          <ambientLight intensity={0.8} ref={lightRef3} />
          
          <group position-y={0.7}>
            <A11ySection
              label="Shape carousel"
              description="This carousel contains 5 shapes. Use the Previous and Next buttons to cycle through all the shapes.">
              <Nav left />
              <Carroussel />
              <ContactShadows rotation-x={Math.PI / 2} position={[0, -5, 0]} opacity={0.4} width={30} height={30} blur={1} far={15} />
              <Nav />
              <A11y
                role="togglebutton"
                description="Light intensity"
                actionCall={() => (state.dark = !snap.dark)}
                activationMsg="Lower light disabled"
                deactivationMsg="Lower light enabled"
                a11yElStyle={{ marginLeft: "-40px" }}>
                <ToggleButton position={[0, -3.5, 9]} lightRef = {lightRef} lightRef2 ={lightRef2} lightRef3 ={lightRef3}/>
              </A11y>
            </A11ySection>
          </group>
        </ContextBridge>
      </Canvas>
      <A11yAnnouncer />
    </main>
    </div>
    </Suspense>
  )
}
