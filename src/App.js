import React, { useRef, useEffect, useState, Suspense } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom"; 

// R3F
import { Canvas} from "@react-three/fiber";
//import { EffectComposer, Outline, SelectiveBloom } from '@react-three/postprocessing'
import { ResizeObserver } from "@juggle/resize-observer"

//Home Components
import Header from "./components/header/Header.js";
import Homepage from "./components/about/home.js"
import Loader from "./components/loader.js"
import AboutMe from "./components/about/about-me.js"
import Form from "./components/about/form.js"
import AbtButtons from "./components/about/AbtButton.js"
import ButtonText from "./components/buttonText.js"


//newHome components
import newHome from "./components/projects/App.js"



// Page State
import hState from "./components/about/homeState.js";
import eState from "./components/experience/eState.js";


//Experience stuff

import ExPage from "./components/experience/page.js";

import Scroller from "./components/home/scroller.js"

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
        </Homepage>
        <AboutMe 
      domContent={domContent}
      position = {0}
      bgColor='#000000'>
      <p style={{color: "black"}}>About Me</p>
      <br/>
      <br/>
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
  <h2>🔬 URSA Engage Research Internship</h2>
  <h4>February 2021 - June 2021</h4>
  <p>
     During this internship, I studied under Dr. Chet Udell. I set up a web server using React, NodeJS, and Docker. Maintained a MongoDB Database to collect data from Arduino sensors using C/C+. We later migrated the database from MongoDB to AdafuitIO in order to create an Internet of Things (IoT) system for recording and storing data from Dr. Udell’s environmental sensors. I managed a team of volunteer engineers and used MaxMSP and NodeJS to make an Audio-visualization of MongoDB data.
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
  <h2>👨‍🏫 Data Structures Teaching Assistant</h2>
  <h4>June 2021 - August 2021</h4>
  <p>
    During my time as a teaching assistant I...
  </p>
  <ul>
    <li>Held weekly office hours assisting students in debugging programs and answering course-related questions</li>
    <li>Mastered the CS261 (Data Structures) material set in order to help students to the fullest</li>
    <li>Graded 200+ students on programming assignments and gave feedback to esure their success with future programming</li>
    <li>Directed after school weekly study sessions to help student understand and learn difficult data structures and algorithms. </li>
  </ul>

</section>
</main>

        </ExPage>
        <ExPage      
      domContent={domContent}
      position = {-550}
      bgColor=" #C06C84">
<main >
<section>
  <h2>✡️ Alpha Epsilon Pi Fraternity</h2>
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
  <h2>🤓 STEMbassadors</h2>
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
  <h2>🏊‍♂️ Lifeguard</h2>
  <p>
    During my time as a lifeguard, I enforced pool rules, taught lessons, rescued drowning swimmers, and cleaned the pool decks and bathrooms. 
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
