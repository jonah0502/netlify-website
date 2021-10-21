import React from "react";


export default function ButtonText () {




    return (
        <div className="hidden">
        <div className="about" id="about-content">
          <h2 className = "typeC">{'>'}about-me:<span className="cursor">|</span></h2>
          <p>Jonah Biedermann is passionate about developing his career opportunities and hobbies. He is a computer science student with an applied option in mobile and web development. He has 2 years of computer science classes under his belt. Jonah is excited to keep learning all there is to know about the Software Engineering community. Jonah also loves to play piano, guitar, aswell as produce music using Digital Audio Work Stations (DAWs). He has a love for computers and a passion for making processes more efficient.</p>
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
          <h2>About Fretboard Alarm {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p>Fretboard Alarm is an app that helps people learn the notes on the Fretboard by quizing them on it every morning. It is a fully funtional alarm but to turn it off you must correctly guess the note name of the prompted Fretboard position 3 times in a row.</p>
          <p>This project was made with Flutter and will be available on all platforms. (IOS, Android, Windows, Linuix)</p>
        </div>

        <div className = "about" id="Loom-About">
          <h2>About Loom<img src={"https://raw.githubusercontent.com/OPEnSLab-OSU/Loom/gh-pages/Aux/OPEnSLogo.png"} style={{width:"4rem", height:"4rem", marginLeft:"2rem", filter: "invert(100%)"}} /></h2>
          <p>Loom is an Open Source Arduino library for Internet of Things Rapid Prototyping in environmental sensing.</p>
          <p>I contributed by adding Database functionality using MongoDB and adafruitIO. I also added MaxMSP support for MongoDB.</p>
          <p>This project was done under the mentorship of Dr. Chet Udell in collaboration with Openly Published Environmental Sensing (OPEnS) Lab for the URSA Undergraduate Research Internship</p>
        </div>

        <div className = "about" id="Portfolio-About">
          <h2>About This Website {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p>This is my portfolio website. It is responsive, dynamic and most importantly 3D! It goes into detail about my past work experience and projects.</p>
          <p>This was written primarily using React and the <a className="btn btn-outline-light"  target="_blank" href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">React-Three-Fiber</a> Library</p>
          <p>All 3D models are either open source or my own. Any models that are not my own are cited in the source code on github!</p>
        </div>

        <div className = "about" id="RSA-About">
          <h2>About Review Sentiment Analysis {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p><em>Work in Progress</em></p>
          <p>This project uses <a className="btn btn-outline-light"  target="_blank" href="https://docs.fast.ai/">fast.ai</a> to create a Reccurrent Neural Network (RNN) trained on IMDb reviews in order to predict the sentiment (positive or negative) of a review. </p>
        </div>
        <div className = "about" id="RPi-About">
          <h2>About Raspberry-Pi Guitar Pedal {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p><em>Work in Progress</em></p>
          <p>This project uses a Long Short Term Memory Neural Network (LSTM) and a Rasberry Pi to emulate any guitar pedal. </p>
          <p>Learn More:&ensp;<a className="btn btn-outline-light"  target="_blank" href="https://towardsdatascience.com/neural-networks-for-real-time-audio-raspberry-pi-guitar-pedal-bded4b6b7f31"> Here</a></p>
        </div>
      </div>
    );
  }