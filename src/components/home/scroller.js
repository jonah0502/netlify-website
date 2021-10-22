import * as THREE from "three"
import { Canvas, useFrame, useThree, useLoader} from "@react-three/fiber"
import React, { useEffect, useRef, Suspense} from "react"
import { useContextBridge,  Html } from "@react-three/drei"
import { A11y, useA11y, A11yAnnouncer, useUserPreferences, A11ySection, A11yUserPreferencesContext } from "@react-three/a11y"
import { proxy, useSnapshot } from "valtio"
import Header from "../header/Header.js";
import MysBox from '../models/Mystery.js'
import Bulb from '../models/Bulb.js'
import Briefcase from '../models/Briefcase.js'
import Computer from '../models/Computer.js'
import { AdaptiveDpr, AdaptiveEvents, Preload, Plane, Box, useTexture, ContactShadows } from "@react-three/drei";
import { ResizeObserver } from "@juggle/resize-observer"

import Loader from "../loader.js"
import Text from '../models/Text.js'
import "../../App.scss";

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


const state = proxy({ dark: true, motionDisabled: false, active: 0, rotation: 0 })


function ToggleButton(props) {
  const a11y = useA11y()
  const viewport = useThree((state) => state.viewport)
  const bulbRef = useRef()
  const k = 20
  const sigmoidNum = 1 / (1 + Math.exp(-viewport.width/k))

  useFrame((state) => {
    bulbRef.current.rotation.y += 0.01
    bulbRef.current.position.y = Math.sin(state.clock.elapsedTime) / 15   - 4
  })
  return (
    <mesh {...props} ref = {bulbRef} scale = {[sigmoidNum, sigmoidNum, sigmoidNum]}>
      <Bulb
        scale = {[0.6, 0.6, 0.6]}
        position = {[0 ,0,0]}
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

function Resume(){
  const texture = useLoader(THREE.TextureLoader, '/res.png')
return(
  <Box args={[8, 11, 0]} scale = {[0.25, 0.25, 0.25]}>
  <meshBasicMaterial attach="material" map={texture} />
  </Box>
  
  );

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

function Shape({ index, active, color, ...props }) {
  const vec = new THREE.Vector3()
  const ref = useRef()



  const snap =  useSnapshot(state)

  useFrame((state) => {
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
  //const [resumeTexture] = useTexture(['/res.png']);
  const texture = useLoader(THREE.TextureLoader, '/res.png')
  const URLs = ["/", "/projects", "/experience", "/about", ""]

  return (
    <>
    <mesh rotation-y={index * 2000} ref={ref} {...props}>
      
     <mesh scale= {[sigmoidNum, sigmoidNum, sigmoidNum]} onClick={active ? ()=>window.appHistory.push(URLs[index]): ()=>{} } >
          {color}
      </mesh>

        {index === 4 &&
        
     <mesh scale= {[sigmoidNum, sigmoidNum, sigmoidNum]} onClick={active ?() =>  {const win = window.open('/myRes.pdf', "_blank"); win.focus();}: ()=>{}}>
          {color}
        </mesh>
        }
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

  return (
    <group ref={group} position = {[0, 0, 0]}>
{[<Jumbo/>,<Computer scale = {[0.3,0.3,0.3]} position = {[0,-0.5,0]}/>, <Briefcase scale ={[0.15, 0.15, 0.15]} position = {[0,1,0]} rotation = {[-Math.PI/2,0,0]}/>, <MysBox scale = {[0.06, 0.06, 0.06]}/>, <Resume/>].map((name, i) => (          <Shape
            key = {i}
            index={i}
            position={[radius * Math.cos(i * ((Math.PI * 2) / 5)), -2, radius * Math.sin(i * ((Math.PI * 2) / 5))]}
            active={snap.active === i}
            color={name}
          />
        
      ))}
    </group>
  )
}

export default function App() {
  const snap =  useSnapshot(state)
  const { a11yPrefersState } = useUserPreferences()

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
    <>
    <Loader
    Homepage = {true}
    />

    <Suspense fallback={null}>
      
   <Header />

    <div id = "scroller">
    <main className={snap.dark ? "dark" : "bright"} >

      <Canvas resize={{ polyfill: ResizeObserver }} camera={{ position: [0, 0, 15], near: 4, far: 30 }} pixelRatio={[1, 1.5]}>
        <ContextBridge>
          <pointLight position={[100, 100, 100]} intensity={0.5}  />
          <pointLight position={[-100, -100, -100]} intensity={1.5} />
          <ambientLight intensity={0.8} />
          
          <group position-y={0.7}>
              

            <A11ySection
              label="Shape carousel"
              description="This carousel contains 5 shapes. Use the Previous and Next buttons to cycle through all the shapes.">
              <Nav left />
              <Carroussel />
              <Nav />
              <A11y
                role="togglebutton"
                description="Light intensity"
                actionCall={() => (state.dark = !snap.dark)}
                activationMsg="Lower light disabled"
                deactivationMsg="Lower light enabled"
                a11yElStyle={{ marginLeft: "-40px" }}>
                <ToggleButton position={[0, -3.5, 9]} />
              </A11y>
            </A11ySection>
          </group>
        </ContextBridge>
        
      </Canvas>
      <A11yAnnouncer />
    </main>
    </div>
    </Suspense>
    </>
  )
}
