import React from "react";


export default function ButtonText () {




    return (
        <div className="hidden">
        <div className="about" id="about-content">
          <h2 className = "typeC">{'>'}about-me:<span className="cursor">|</span></h2>
          <p>Hi! I am an Enthusiastic Computer Science graduate with a results-oriented mindset, specializing in software engineering and machine learning. Demonstrated ability to deliver innovative solutions and contribute to intricate projects. Proficient in a variety of programming languages and technologies. Effective communicator and collaborative team player, skilled in leadership and creative problem-solving. Seeking opportunities to apply technical expertise and ingenuity in a dynamic team environment.</p>
        </div>
    
               
        <div className = "about" id="TagFlix-About">
          <h2>About TagFlix <img src={'/fav.png'} style={{width:"2em", height:"2em", padding: "10px"}} /></h2>
          <p>Tagflix is an open source, movie cataloguing and review service that allow users to create, read, update and delete reviews for over 5000 movies. They can also filter the movies by Genre, IMDB Score, Year Range, and title. We also allow the users to filter by custom descriptors or "tags" as we call them. If the movie they are looking for does not exist in our database they have the ability to make a new movie entry. This website works well on both desktop and mobile.</p>
          <p>This is all done through my custom built API which uses mongoDB Atlas for the backend.  The API is hosted remotely on MongoDB Realm but you can still find the source code in the linked GitHub repo.</p>
        </div>

        <div className = "about" id="Design-Den-About">
          <h2>About Design-Den {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p>Design-Den is an ecommerce platform to buy and sell website designs.</p>
          <p>This project was made in collaboration with Jonathan Nichols for my CS340 (Databases) Final Project. It uses Next.js as its frontend. It also uses Flask and MYSQL for it's backend.</p>
        </div>

        <div className = "about" id="Fretboard-About">
          <h2>ASOSU Campaign Website {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p>In 2021 I was hired by Alexander Kerner and Isabella Griffiths to design and create their website as they ran for president of ASOSU (Associated Students of Oregon State University)</p>
          <p>The Website is written in Next.js and has a modern UI/UX.</p>
        </div>

        <div className = "about" id="Loom-About">
          <h2>About WeatherChimes<img src={"https://raw.githubusercontent.com/OPEnSLab-OSU/Loom/gh-pages/Aux/OPEnSLogo.png"} style={{width:"4rem", height:"4rem", marginLeft:"2rem", filter: "invert(100%)"}} /></h2>
          <p>WeatherChimes is an open-source weather monitoring and sonification system, low-cost hardware and software suite that enables near real-time access to in-situ environmental sensor data (including light, temperature, relative humidity, and soil moisture) anywhere with a WiFi internet connection.</p>
          <p>I led the first team of engineers to work on the project adding Database functionality using MongoDB and adafruitIO. We also added MaxMSP support for MongoDB for use in music composition.</p>
          <p>This project was done under the mentorship of Dr. Chet Udell in collaboration with Openly Published Environmental Sensing (OPEnS) Lab for the URSA Undergraduate Research Internship</p>
        </div>

        <div className = "about" id="Portfolio-About">
          <h2>About This Website {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p>This is my portfolio website. It is responsive, dynamic and most importantly 3D! It goes into detail about my past work experience and projects.</p>
          <p>This was written primarily using React and the <a className="btn btn-outline-light"  target="_blank" href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">React-Three-Fiber</a> Library</p>
          <p>All 3D models are either open source or my own. Any models that are not my own are cited in the source code on github!</p>
        </div>

        <div className = "about" id="RSA-About">
          <h2>About College Capstone Project {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p>The main purpose of this project was to build and train an AI-Annotation Tool using deep learning techniques like  <a className="btn btn-outline-light"  target="_blank" href="https://github.com/ultralytics/yolov5">YOLOv5</a> and <a className="btn btn-outline-light"  target="_blank" href="https://github.com/opencv/cvat">CVAT</a> such that it would be able to annotate and recognize welding anomalies. </p>
          <p>This model was then integrated into an easy to use android application with a sql backend to communicate with the intel servers. You can find the code for the android application by clicking the github link.</p>
          <p>This was done in collaboration with Intel under the supervision of <a className="btn btn-outline-light"  target="_blank" href="https://www.linkedin.com/in/rahul-khanna-ph-d-6a02712/">Rahul Khanna</a> and <a className="btn btn-outline-light"  target="_blank" href="https://www.linkedin.com/in/jaiberjohn/">Jaiber John</a>.  </p>
        </div>
        <div className = "about" id="RPi-About">
          <h2>About Self-Hosted Raspberry Pi Server {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p>I own a Raspberry Pi which I am running Raspbian Linux on and using to self-host my own instances of Nextcloud, Qbittorrent, Jellyfin, Pihole, Wireguard, Photoprism, Sonarr, Jackett, and FindMyDevice.</p>
          <p>These programs are containerized using Docker and Kubernetes and are hidden under a Wireguard VPN for protection.</p>
        </div>
      </div>
    );
  }