import React from "react";


export default function ButtonText () {




    return (
        <div className="hidden">
        <div className="about" id="about-content">
          <h2 className = "typeC">{'>'}about-me:<span className="cursor">|</span></h2>
          <p> I am a Software Developer with experience in enterprise size companies (Daimler Trucks), the Public Sector (United States Air Force) and small startups alike (Mosaic.tech). Contributing to performing, accessible and scalable applications, specifically focusing on backend development, is a passion of mine. I enjoy public speaking and helping others learn new technologies as well.</p>
        </div>
    
               
        <div className="about" id="TagFlix-About">
          <h2>About TagFlix <img src={'/fav.png'} style={{width:"2em", height:"2em", padding: "10px"}} alt="TagFlix Favicon"/></h2>
          {/* TagFlix Project Description */}
          <p>Engineered TagFlix, an open-source, full-stack movie cataloging and review platform. This service empowers users with full CRUD (Create, Read, Update, Delete) functionality for movie reviews across a database of over 5,000 titles. Key features include multi-faceted filtering by Genre, IMDb Score, Year Range, Title, and unique user-generated 'Tags'. Users can also contribute new movie entries.</p>
          <p>Developed a custom RESTful API leveraging MongoDB Atlas for robust data persistence, hosted via MongoDB Realm serverless functions. Ensured a fully responsive UI/UX for seamless operation on both desktop and mobile platforms. The source code for both the frontend and the API implementation is available via the linked GitHub repository.</p>
        </div>

        <div className="about" id="Design-Den-About">
          <h2>About Design-Den {/* <img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} /> */}</h2>
          {/* Design-Den Project Description */}
          <p>Co-developed Design-Den, an e-commerce platform enabling users to buy and sell website designs. This application served as the final project for the CS340 Databases course.</p>
          <p>Collaborated with Jonathan Nichols to architect the system using Next.js for the frontend framework, while engineering the backend infrastructure with Python (Flask) and MySQL for efficient data management and transactions.</p>
        </div>

        <div className="about" id="Fretboard-About">
           {/* Renamed Section to reflect project content */}
          <h2>ASOSU Campaign Website Development {/* <img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} /> */}</h2>
           {/* ASOSU Campaign Website Project Description */}
          <p>Commissioned in 2021 by Alexander Kerner and Isabella Griffiths to design and develop the official campaign website for their successful run for President and Vice President of ASOSU (Associated Students of Oregon State University).</p>
          <p>Delivered a dynamic, responsive website built with Next.js, featuring a modern UI/UX tailored for effective campaign communication and engagement.</p>
        </div>

        <div className="about" id="Loom-About">
           {/* Renamed Section Title for Clarity */}
          <h2>WeatherChimes: Environmental Monitoring & Sonification <img src={"https://raw.githubusercontent.com/OPEnSLab-OSU/Loom/gh-pages/Aux/OPEnSLogo.png"} style={{width:"4rem", height:"4rem", marginLeft:"2rem", filter: "invert(100%)"}} alt="OPEnS Lab Logo"/></h2>
           {/* WeatherChimes Project Description */}
          <p>Led the inaugural student engineering team for the WeatherChimes project, an open-source, low-cost environmental monitoring and data sonification system developed in collaboration with the Openly Published Environmental Sensing (OPEnS) Lab at OSU. The system provides near real-time access to sensor data (light, temperature, humidity, soil moisture) via WiFi.</p>
          <p>Key contributions include architecting and implementing database integration using MongoDB and Adafruit IO for robust, near real-time sensor data storage. Additionally, developed Max/MSP integration with MongoDB to facilitate the use of environmental data in real-time algorithmic music composition.</p>
          <p>This research and development effort was conducted as part of the URSA (Undergraduate Research, Scholarship & the Arts) Internship under the mentorship of Dr. Chet Udell.</p>
        </div>

        <div className="about" id="Portfolio-About">
          <h2>About This Portfolio Website {/* <img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} /> */}</h2>
           {/* Portfolio Website Project Description */}
          <p>Developed this personal portfolio website as an interactive platform to showcase professional experience and projects. Engineered with React and the React-Three-Fiber library to deliver a dynamic, responsive, and engaging 3D user experience across both desktop and mobile devices.</p>
          <p>Incorporated a combination of original and open-source 3D models, with full attribution provided within the publicly available source code on GitHub. Focused on creating a modern UI/UX demonstrating proficiency in frontend technologies.</p>
           {/* Retained link as it points to specific library documentation */}
          <p>Built primarily using React and the <a className="btn btn-outline-light" target="_blank" rel="noopener noreferrer" href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">React-Three-Fiber</a> library.</p>
        </div>

        <div className="about" id="RSA-About">
           {/* Renamed Section Title for Clarity */}
          <h2>AI-Powered Welding Anomaly Detection (Capstone Project) {/* <img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} /> */}</h2>
           {/* Capstone Project Description */}
          <p>Engineered an AI-powered Annotation Tool for a senior capstone project in direct collaboration with Intel. Focused on leveraging deep learning (specifically YOLOv5 object detection) and annotation platforms (CVAT - Computer Vision Annotation Tool) to train a model capable of automatically identifying and annotating welding anomalies in images.</p>
          <p>Subsequently, integrated this trained model into a user-friendly Android application. The application features a SQL backend designed for data synchronization and communication with Intel's server infrastructure. Source code for the Android application is available via the linked GitHub repository.</p>
           {/* Retained links as they point to specific tools/people */}
          <p>This project was conducted under the supervision of Intel mentors <a className="btn btn-outline-light" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rahul-khanna-ph-d-6a02712/">Rahul Khanna, Ph.D.</a> and <a className="btn btn-outline-light" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jaiberjohn/">Jaiber John</a>.</p>
        </div>

        <div className="about" id="RPi-About">
          <h2>Self-Hosted Services on Raspberry Pi {/* <img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} /> */}</h2>
           {/* Raspberry Pi Server Project Description */}
          <p>Architected and actively maintain a personal home server environment utilizing a Raspberry Pi running Raspberry Pi OS (formerly Raspbian). Deployed and manage a suite of self-hosted services including Nextcloud (file hosting), qBittorrent (file sharing), Jellyfin (media streaming), Pi-hole (network-wide ad blocking), WireGuard (VPN), Photoprism (photo management), Sonarr (media management), Jackett (indexer proxy), and FindMyDevice (device tracking).</p>
          <p>Leveraged containerization technologies (Docker, Kubernetes) for efficient deployment, scaling, service isolation, and simplified management. Implemented network security and controlled remote access via a WireGuard VPN tunnel, ensuring secure operation.</p>
        </div>
      </div>
    );
  }