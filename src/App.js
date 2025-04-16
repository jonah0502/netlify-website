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
import ButtonText from "./components/projects/buttonText.js"


//newHome components
import newHome from "./components/projects/App.js"



// Page State
import eState from "./components/experience/eState.js";


//Experience stuff

import ExPage from "./components/experience/page.js";

import Scroller from "./components/home/scroller.js"

import { AdaptiveDpr, AdaptiveEvents, Preload} from "@react-three/drei";

const isMobile = window.matchMedia("(max-width: 600px)").matches; // Check if the viewport is smaller than 600px (adjust as needed)

const pageLen = 300;

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
<h2>Software Engineer at The United States Air Force</h2>
<h3>Portland, OR</h3>
  <h4>(June 2023 – Dec 2023)</h4>
  <ul>
    <li><h4>Led development of mission-critical flight software for E-3 AWACS systems using Python, C++ and Java, ensuring optimal weapon system performance.</h4></li>
  </ul>

</header>
</main>

        </ExPage>

        <ExPage
      domContent={domContent}
      position = {-(pageLen)}
      bgColor=" #F67280">
<main >
<header>
  <h2>Software Engineer at The Oregon Country Fair</h2>
  <h3>Portland, OR</h3>
  <h4>(June 2023 – Dec 2023)</h4>
  <ul>
    <li><h4>Developed and maintained a membership database application using Django framework, creating a new MariaDB database using Docker and Kubernetes to manage memberships.</h4></li>
    <li><h4>Integrated third-party APIs (e.g., Twilio) into internal applications (Uptime-Pro) to enhance notification functionality.</h4></li>
    <li><h4>Designed and tested a RESTful API using Postman, achieving 100% endpoint reliability for 500+ monthly users.</h4></li>
  </ul>

</header>
</main>

        </ExPage>


        <ExPage
      domContent={domContent}
      position = {-(pageLen * 2)}
      bgColor=" #F67280">
<main >
<header>
  <h2>Software Engineering Intern at Daimler Trucks</h2>
  <h3>Portland, OR</h3>
  <h4>(June 2023 – Dec 2023)</h4>
  <ul>
    <li><h4>Developed a full-stack CRUD application (Visual Studio, SQL) to streamline management of service repair data, improving diagnostic support efficiency as well as gaining exposure to vehicle ECU architecture.</h4></li>
    <li><h4>Mitigated data loss risks through the development of an application for automated database backups using Powershell and SQL Server.</h4></li>
    <li><h4>Integrated third-party APIs (e.g., Twilio) into internal applications (Uptime-Pro) to enhance notification functionality.</h4></li>
    <li><h4>Utilized Git for version control and collaborated within the firmware development team, gaining exposure to team coordination practices using tools like Jira and Confluence.</h4></li>
  </ul>

</header>
</main>

        </ExPage>



        <ExPage
      domContent={domContent}
      position = {-(pageLen * 3)}
      bgColor=" #F67280">
<main >
<header>
  <h2>Software Engineering Intern at Mosaic.Tech </h2>
  <h3>San Diego, CA</h3>
  <h4>March 2022 – September 2022</h4>
  <ul>
    <li><h4>Designed and deployed scalable microservices within an AWS distributed system handling high-volume data streams relevant to large asset metadata, achieving sub-second latency under load.</h4></li>
    <li><h4>Integrated Snowflake Data Warehouse (handling over 50TB) with OAuth using Angular/TypeScript, enabling secure, high-performance data analysis critical for platform insights.</h4></li>
    <li><h4>Implemented CI/CD pipelines (Jenkins) and automated testing, increasing deployment frequency by 3x and improving overall code quality metrics.</h4></li>
  </ul>

</header>
</main>

        </ExPage>


        <ExPage
      domContent={domContent}
      position = {-(pageLen * 4)}
      bgColor=" #C06C84"
      imgBool ={false}
>
<main >
<header>
  <h2>Data Structures / Algorithms Teaching Assistant at Oregon State University</h2>
  <h3>Corvallis, OR</h3>
  <h4>June 2021 - December 2021</h4>
  <ul>
    <li><h4>Assisted in designing and leading weekly discussion sessions to reinforce key concepts in data structures and algorithms, demonstrating teaching and communication skills.</h4></li>
    <li><h4>Conducted one-on-one tutoring sessions, providing personalized guidance to help students grasp complex algorithms and data structures, showcasing a dedication to student success.</h4></li>
    <li><h4>Collaborated with professors to create challenging programming assignments that fostered critical thinking and problem-solving skills among students, showcasing involvement in curriculum development.</h4></li>
    <li><h4>Evaluated and provided constructive feedback on student assignments and projects, promoting continuous improvement in coding proficiency.</h4></li>
  </ul>

</header>
 {/*} <img src="/Fraternity_1.jpg" style={{ width: "47vw", height: "40vh" }} className = "left" />*/}
</main>

        </ExPage>
        <ExPage
      domContent={domContent}
      position = {-(pageLen * 5)}
      bgColor="#F8B195">
<main >
<header>
  <h2>Embedded Software Engineer at Open Source Environmental Sensing Lab at Oregon State University</h2>
  <h4>January 2021 - June 2021</h4>
  <ul>
    <li><h4>Led project coordination and developed C++ firmware for embedded systems (Arduino Feather M0), handling real-time sensor data acquisition/processing and designing low-level communication protocols (SPI, I2C).</h4></li>
    <li><h4>Integrated Arduino-based sensor data via C programming, achieving seamless hardware-software interaction.</h4></li>
  </ul>
</header>
</main>

        </ExPage>
        <ExPage
      domContent={domContent}
      position = {-(pageLen * 6)}
      bgColor=" #355C7D">
<main >
<header>
  <h2>Lifeguard</h2>
  <h4>June 2016 - August 2019</h4>
  <ul>
    <li><h4>Explained and enforced facility regulations, policies, and procedures to patrons </h4></li>
    <li><h4>Rescued swimmers in need of assistance</h4></li>
    <li><h4>Demonstrate proper rescue techniques, including but not limited to, swimming rescues, First Aid, and CPR</h4></li>
    <li><h4>Kept accurate records of incident reports, maintenance, and chemical testing</h4></li>
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
