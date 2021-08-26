import React from "react";
import tagFav from '../assets/fav.png'


export default function ButtonText () {




    return (
        <div className="hidden">
        <div id="about-content">
          <h2 className = "typeC">{'>'}about-me:<span className="cursor">|</span></h2>
          <p>My name is Jonah Biedermann and I am a third year computer science major at Oregon State University</p>
          <p>
            Some of the languages that I am fluent in include C++ / C, Python, C#, R, HTML, CSS, and Javascript 
          </p>
        </div>
    
               
        <div id="TagFlix-About">
          <h2>About TagFlix <img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} /></h2>
          <p>Tagflix is an open source, movie cataloguing and review service that allow users to create, read, update and delete reviews for over 5000 movies. They can also filter the movies by Genre, IMDB Score, Year Range, and title. We also allow the users to filter by custom descriptors or "tags" as we call them. If the movie they are looking for does not exist in our database they have the ability to make a new movie entry. This website works well on both desktop and mobile.</p>
          <p>This is all done through my custom built API which uses mongoDB Atlas for the backend.  The API is hosted remotely on MongoDB Realm but you can still find the source code in the linked GitHub repo.</p>
        </div>

        <div id="Design-Den-About">
          <h2>About Design-Den {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p>WIP</p>
          <p>Design-Den is an ecommerce platform to buy and sell website designs.</p>
          <p>This project was made in collaboration with Jonathan Nichols for my CS340 (Databases) Final Project. It uses Next.js as its frontend. It also uses Flask and MYSQL for it's backend.</p>
        </div>

        <div id="Fretboard-About">
          <h2>About Fretboard Alarm {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p>WIP</p>
          <p>Fretboard Alarm is an app that helps people learn the notes on the Fretboard by quizing them on it every morning. It is a fully funtional alarm but to turn it off you must correctly the note name of the prompted Fretboard position 3 times in a row.</p>
          <p>This project was made with kivy and python and is available on all platforms. (IOS, Android, Windows, Linuix)</p>
        </div>

        <div id="Loom-About">
          <h2>About Loom {/*<img src={tagFav} style={{width:"2em", height:"2em", padding: "10px"}} />*/}</h2>
          <p>I am tired and will write this tomorrow</p>
          <p>AAAAAAAAAAAAAAAAAAAA</p>
        </div>

      </div>
    );
  }