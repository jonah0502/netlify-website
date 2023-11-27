import React, { useRef, useEffect, useState, Suspense } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom"; 
import { Html} from "@react-three/drei";

// R3F
import { Canvas} from "@react-three/fiber";

//Home Components
import Header from "./components/header/Header.js";
import Loader from "./components/loader.js"
import AboutMe from "./components/about/about-me.js"
import Form from "./components/about/form.js"
import AbtButtons from "./components/about/AbtButton.js"
import ButtonText from "./components/buttonText.js"


//newHome components
import newHome from "./components/projects/App.js"



// Page State
import eState from "./components/experience/eState.js";


//Experience stuff

import ExPage from "./components/experience/page.js";

import Scroller from "./components/home/scroller.js"

import { AdaptiveDpr, AdaptiveEvents, Preload} from "@react-three/drei";

const isMobile = window.matchMedia("(max-width: 600px)").matches; // Check if the viewport is smaller than 600px (adjust as needed)


function Overlay() {
  return (
    <Html zIndexRange={[0,10]}>
    <div className="abtMe" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%'}}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 style={{ whiteSpace: "nowrap", margin: 0, padding: 0, fontWeight: 500, letterSpacing: '-0.05em' }}>About Me</h1>
      </div>
    </div>
    </Html>
  )
}


function Home() {

  return (
    <div className="anim">
    <Header />
    <Canvas
      camera={{ position: [0, 0, 1]}}
    >
      
    <AboutMe 
      position = {245}
      bgColor='#000000'>
      </AboutMe>
      <Overlay/>
      <Html position={[isMobile?-0.15:0, -0.25, 0]}>
        <div>
        <AbtButtons/>
        </div>
      </Html>
    </Canvas>
    <Loader />
    <ButtonText />
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
      camera={{ position: [100, 10, 0], fov: 75 }}
    >

      <Suspense fallback={null}>
      <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Preload all/>
        <ExPage 
      domContent={domContent}
      position = {0}
      bgColor="#6C5B7B">
<main >

<header>
        <h1>Jonah Biedermann</h1>
        <p>🚀 My Work Experience!</p>
      </header>
<header>
  <h2>Software Engineering Intern at Daimler Trucks</h2>
  <h3>Portland, OR</h3>
  <h4>(June 2023 – Present)</h4>
  <ul>
    <li>Developed comprehensive C# and .NET applications integrated with an SQL database for efficiently managing vehicle Service Repair Tickets (SRTs).</li>
    <li>Enabled seamless CRUD operations and facilitated diverse format exports.</li>
    <li>Leveraged tools like Visual Studio and SQL Server Management Studio to ensure efficient development and database management.</li>
  </ul>

</header>
</main>
        </ExPage>

        <ExPage      
      domContent={domContent}
      position = {-275}
      bgColor=" #F67280">
<main >
<header>
  <h2>Software Engineering Intern at Mosaic.Tech </h2>
  <h3>San Diego, CA</h3>
  <h4>March 2022 – September 2022</h4>
  <ul>
    <li>Managed asynchronous functions using C#, integrated Snowflake Data Warehouse with OAuth, and developed Angular-based front-end.</li>
    <li>Created UI automation frameworks and test scripts for in-house systems using Cypress, Cucumber, and Jenkins.</li>
  </ul>

</header>
</main>

        </ExPage>
        <ExPage      
      domContent={domContent}
      position = {-550}
      bgColor=" #C06C84"
      imgBool ={false}
>
<main >
<header>
  <h2>Data Structures / Algorithms Teaching Assistant at Oregon State University</h2>
  <h3>Corvallis, OR</h3>
  <h4>June 2021 - December 2021</h4>
  <ul>
    <li>Assisted in designing and leading weekly discussion sessions to reinforce key concepts in data structures and algorithms, demonstrating teaching and communication skills.</li>
    <li>Conducted one-on-one tutoring sessions, providing personalized guidance to help students grasp complex algorithms and data structures, showcasing a dedication to student success.</li>
    <li>Collaborated with professors to create challenging programming assignments that fostered critical thinking and problem-solving skills among students, showcasing involvement in curriculum development.</li>
    <li>Evaluated and provided constructive feedback on student assignments and projects, promoting continuous improvement in coding proficiency.</li>
  </ul>

</header>
 {/*} <img src="/Fraternity_1.jpg" style={{ width: "47vw", height: "40vh" }} className = "left" />*/}
</main>

        </ExPage>
        <ExPage      
      domContent={domContent}
      position = {-800}
      bgColor="#F8B195">
<main >
<header>
  <h2>Open-Sensing Lab Computer Science Lead at Oregon State University</h2>
  <h4>January 2021 - June 2021</h4>
  <ul>
    <li>Led a team in developing audio-visualization of MongoDB data using React, NodeJS, and Docker.</li>
    <li>Integrated Arduino-based sensor data via C programming, achieving seamless hardware-software interaction.</li>
  </ul>
</header>
</main>

        </ExPage>
        <ExPage      
      domContent={domContent}
      position = {-1000}
      bgColor=" #355C7D">
<main >
<header>
  <h2>Lifeguard</h2>
  <h4>June 2016 - August 2019</h4>
  <ul>
    <li>Explained and enforced facility regulations, policies, and procedures to patrons </li>
    <li>Rescued swimmers in need of assistance</li>
    <li>Demonstrate proper rescue techniques, including but not limited to, swimming rescues, First Aid, and CPR</li>
    <li>Kept accurate records of incident reports, maintenance, and chemical testing</li>
  </ul>

</header>
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
