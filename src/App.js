import React, { useRef, useEffect, useState, Suspense } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Header from "./components/header";
import Homepage from "./components/home.js"
import Loader from "./components/loader.js"
import { Switch, Route } from "react-router-dom"; 

// Page State
import state from "./components/state";
import AboutMe from "./components/about-me.js"

// R3F
import { Canvas} from "@react-three/fiber";

//Intersection Observer

import Form from "./components/form.js"
import AbtButtons from "./components/AbtButton.js"
import ButtonText from "./components/buttonText.js"

import TagFlix from "./components/tagFlix.js"
import TagButtons from "./components/TagButton.js"

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
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
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  );
};




function HomeAnimationCanvas() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
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

      <Homepage 
      domContent={domContent}
      position = {265}
      >
        
        <p>Portfolio Page</p>
        <h4>By Jonah Biedermann</h4>
        </Homepage>
        <AboutMe 
      domContent={domContent}
      position = {0}
      bgColor='#000000'>
      <h1 className = "abtMe"><span>About Me</span></h1>
      <AbtButtons />
      </AboutMe>
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
          <div style={{ height: `${state.sections * 100}vh` }} />
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
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
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
          <div style={{ height: `${state.sections * 100}vh` }} />
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
      </Switch>
    </div>
  );
}
