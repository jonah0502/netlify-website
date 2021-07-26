import React, { useRef, useEffect, useState, Suspense } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom"; 

// R3F
import { Canvas} from "@react-three/fiber";
//import { EffectComposer, Outline, SelectiveBloom } from '@react-three/postprocessing'
import { ResizeObserver } from "@juggle/resize-observer"

//Home Components
import Header from "./components/header";
import Homepage from "./components/homepage/home.js"
import Loader from "./components/loader.js"
import AboutMe from "./components/homepage/about-me.js"
import Form from "./components/homepage/form.js"
import AbtButtons from "./components/homepage/AbtButton.js"
import ButtonText from "./components/buttonText.js"

// Page State
import hState from "./components/homepage/homeState.js";
import pState from "./components/projects/pState.js";
import eState from "./components/experience/eState.js";
import mState from "./components/misc/mState.js";


//Experience stuff

import URSA from "./components/experience/ursa.js";


//Projects Page Stuff

import TagFlix from "./components/projects/tagFlix.js"
import TagButtons from "./components/projects/TagButton.js"



//Misc page stuff

import Page from "./components/misc/Page.js";



//import Experience from "./components/experience/experiencePage.js"

const Lights = ({spotLight, dirLight, ambLight}) => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight ref={ambLight} intensity={0.3} />
      {/* Diretion light */}
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        ref={dirLight}
      />
      {/* Spotlight Large overhead light */}
      <spotLight ref={spotLight} intensity={1} position={[1000, 0, 0]} castShadow  />
    </>
  );
};




function HomeAnimationCanvas() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const pointsRef = useRef()
  const ambLight = useRef()
  const dirLight = useRef()
  const spotLight = useRef()
  const starRef = useRef()

  const onScroll = (e) => (hState.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
    <Canvas
      concurrent
      colorManagement
      camera={{ position: [100, 10, 0], fov: 75 }}
      gl={{
        powerPreference: "high-performance",
        alpha: false,
        antialias: false,
        stencil: false,
        depth: false
      }}
      resize={{ polyfill: ResizeObserver }}
    >
    <Lights 
    ambLight = {ambLight}
    dirLight = {dirLight}
    spotLight = {spotLight}
    />

      <Suspense fallback={null}>

      <Homepage 
      domContent={domContent}
      position = {265}
     // pointsRef = {pointsRef}
      >
        
        <p>Portfolio Page</p>
        <h4>By Jonah Biedermann</h4>
        </Homepage>
        <AboutMe 
      domContent={domContent}
      position = {0}
      bgColor='#000000'
      starRef = {starRef}>
      <h1 className = "abtMe"><span>About Me</span></h1>
      <AbtButtons />
      </AboutMe>
      {/*<EffectComposer>
        
        <SelectiveBloom
          lights = {[ambLight, dirLight, spotLight ]}
          selection={pointsRef}
          selectionLayer={10} 
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        />
      </EffectComposer>*/}
      </Suspense>
      
      
    </Canvas>
    <Loader />
    <ButtonText />

          <div
          className='scrollArea'
          ref={scrollArea}
          onScroll={onScroll}
          {...events}>
          <div style={{ position: "sticky", top: 0 }} ref={domContent} />
          <div style={{ height: `${hState.sections * 100}vh` }} />
        </div>
      </>
  );
}

function Home() {
  return (

    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
      <Header />
        <HomeAnimationCanvas  />
      </Suspense>
    </div>
  );
}


function ProjectAnimationCanvas() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (pState.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
    <Canvas
      concurrent
      colorManagement
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
    <Lights />

      <Suspense fallback={null}>
        <TagFlix 
      domContent={domContent}
      position = {240}
      bgColor='#f8f8ff'>
      <h1 className = "title" style = {{color:"black"}}><span>TagFlix</span></h1>
      <TagButtons />
        </TagFlix>
      </Suspense>
    </Canvas>
    <Loader />
    <ButtonText />
    
          <div
          className='scrollArea'
          ref={scrollArea}
          onScroll={onScroll}
          {...events}>
          <div style={{ position: "sticky", top: 0 }} ref={domContent} />
          <div style={{ height: `${pState.sections * 100}vh` }} />
        </div>
      </>
  );
}

function Projects() {
  return (

    <div className="anim">
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
      <Header />
        <ProjectAnimationCanvas  />
      </Suspense>
    </div>
  );
}



function ExperienceAnimationCanvas() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (eState.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
    <Canvas
      concurrent
      colorManagement
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
    <Lights />

      <Suspense fallback={null}>
        <URSA 
      domContent={domContent}
      position = {240}
      bgColor='#f8f8ff'>
      <h1 className = "title" style = {{color:"black"}}><span>Something</span></h1>
        </URSA>
      </Suspense>
    </Canvas>
    <Loader />
    <ButtonText />
    
          <div
          className='scrollArea'
          ref={scrollArea}
          onScroll={onScroll}
          {...events}>
          <div style={{ position: "sticky", top: 0 }} ref={domContent} />
          <div style={{ height: `${eState.sections * 100}vh` }} />
        </div>
      </>
  );
}

function Experience() {
  return (

    <div className="anim">
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
      <Header />
        <ExperienceAnimationCanvas  />
      </Suspense>
    </div>
  );
}


function MiscAnimationCanvas() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (mState.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
    <Canvas
      concurrent
      colorManagement
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
    <Lights />

      <Suspense fallback={null}>
        <Page 
      domContent={domContent}
      position = {240}
      bgColor='#f8f8ff'>
      <h1 className = "title" style = {{color:"black"}}><span>Something</span></h1>
        </Page>
      </Suspense>
    </Canvas>
    <Loader />
    <ButtonText />
    
          <div
          className='scrollArea'
          ref={scrollArea}
          onScroll={onScroll}
          {...events}>
          <div style={{ position: "sticky", top: 0 }} ref={domContent} />
          <div style={{ height: `${mState.sections * 100}vh` }} />
        </div>
      </>
  );
}

function Misc() {
  return (

    <div className="anim">
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
      <Header />
        <MiscAnimationCanvas  />
      </Suspense>
    </div>
  );
}



export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/page1" component={Form} />
        <Route path="/experience" component={Experience} />
        <Route path="/misc" component={Misc} />
      </Switch>
    </div>
  );
}
