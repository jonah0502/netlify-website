import React, { useRef, useEffect, useState, Suspense } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Header from "./components/header";
import Homepage from "./components/homepage/home.js"
import Loader from "./components/loader.js"
import { Switch, Route } from "react-router-dom"; 

// Page State
import hState from "./components/homepage/homeState";
import AboutMe from "./components/homepage/about-me.js"

// R3F
import { Canvas} from "@react-three/fiber";

//Intersection Observer

import Form from "./components/homepage/form.js"
import AbtButtons from "./components/homepage/AbtButton.js"
import ButtonText from "./components/buttonText.js"

import TagFlix from "./components/projects/tagFlix.js"
import TagButtons from "./components/projects/TagButton.js"

import { EffectComposer, Outline, SelectiveBloom } from '@react-three/postprocessing'

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
      pointsRef = {pointsRef}
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

      <EffectComposer>
        
        <SelectiveBloom
          lights = {[ambLight, dirLight, spotLight ]}
          selection={[pointsRef, starRef]}
          luminanceThreshold={1}
          luminanceSmoothing={1}
          intensity={1.0}
        />
      </EffectComposer>

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
  const onScroll = (e) => (hState.top.current = e.target.scrollTop);
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
          <div style={{ height: `${hState.sections * 100}vh` }} />
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


export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/page1" component={Form} />
        {/*<Route path="/experience" component={Experience} />*/}
      </Switch>
    </div>
  );
}
