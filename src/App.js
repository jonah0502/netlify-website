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


//newHome components
import newHome from "./components/newHome/App.js"



// Page State
import hState from "./components/homepage/homeState.js";
import eState from "./components/experience/eState.js";


//Experience stuff

import ExPage from "./components/experience/page.js";

import Scroller from "./components/projects/scroller.js"

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
  const onScroll = (e) => (hState.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
    <Canvas
      concurrent
      colorManagement
      camera={{ position: [100, 10, 0], fov: 75 }}
      resize={{ polyfill: ResizeObserver }} 
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
          <div style={{ height: `${hState.sections * 100}vh` }} />
        </div>
      </>
  );
}

function Home() {
  return (

    <div className="anim">
      <Header />
        <HomeAnimationCanvas  />
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
      resize={{ polyfill: ResizeObserver }} 
    >
    <Lights />

      <Suspense fallback={null}>
        <ExPage 
      domContent={domContent}
      position = {65}
      bgColor="#F8B195">
<main >

<header>
        <h1>Jonah Biedermann</h1>
        <p>🚀 My Work Experience!</p>
      </header>
<section>
  <h2>📜 URSA Engage Research Internship</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

</section>
</main>
        </ExPage>

        <ExPage      
      domContent={domContent}
      position = {-275}
      bgColor=" #F67280">
<main >
<section className = "left">
  <h2>📜 TA Stuff</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

</section>
</main>

        </ExPage>
        <ExPage      
      domContent={domContent}
      position = {-550}
      bgColor=" #C06C84">
<main >
<section>
  <h2>📜 Frat Stuff</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

</section>
</main>

        </ExPage>
        <ExPage      
      domContent={domContent}
      position = {-800}
      bgColor=" #6C5B7B">
<main >
<section className = "left">
  <h2>📜 More Stuff 1</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

</section>
</main>

        </ExPage>
        <ExPage      
      domContent={domContent}
      position = {-1080}
      bgColor=" #355C7D">
<main >
<section>
  <h2>📜 More Stuff 2</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

</section>
</main>

        </ExPage>

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
      <Header />
        <ExperienceAnimationCanvas  />
    </div>
  );
}





export default function App() {
  return (
      <Switch>
        <Route path="/" exact component={Scroller} />
        <Route path="/projects" component={newHome} />
        <Route path="/page1" component={Form} />
        <Route path="/experience" component={Experience} />
        <Route path="/about" component={Home} />
      </Switch>
  );
}
