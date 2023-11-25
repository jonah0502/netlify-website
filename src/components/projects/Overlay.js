import React, { forwardRef } from "react"
import NewButtons from './NewButtons.js'



const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
    //  caption.current.innerText = scroll.current.toFixed(2)
    }}
    className="scroll">
    <div style={{ height: "400vh", zIndex:99 }}>
      <div className="dot">
        <h1>Design-Den</h1>
        <NewButtons
        tag = "#Design-Den-About"
        title = "Design-Den"
        github = "https://github.com/jonah0502/DesignDen"
        visitBool = {false}
        hexcolor_1 = "#3C50B1"
        hexcolor_2 = "#0095EF"
        />
      </div>
    </div>
    <div style={{ height: "200vh", zIndex:99 }}>
      <div className="dot">
        <h1>ASOSU Campaign Website</h1>
        <NewButtons
        tag = "#Fretboard-About"
        title = "ASOSU Campaign Website"
        github = "https://github.com/jonah0502/ker-camp"
        visit = "https://main--naughty-poitras-4bb779.netlify.app/"
        hexcolor_1 = "#6713d2"
        hexcolor_2 = "#cc208e"
        />
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        
        <h1>TagFlix</h1>
        <NewButtons
        tag = "#TagFlix-About"
        title = "TagFlix"
        github = "https://github.com/jonah0502/tagFlix"
        visitBool = {false}
        hexcolor_1 = "#C85250"
        hexcolor_2 = "#F7BEC0"
        />
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Weather Chimes</h1>
        <NewButtons
        tag = "#Loom-About"
        title = "Weather Chimes"
        github = "https://github.com/OPEnSLab-OSU/OPEnS-Lab-Home/wiki/WeatherChimes"
        visitBool = {false}
        hexcolor_1 = "#5b9aa0"
        hexcolor_2 = "#C7C7C7"
        />
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Portfolio Website</h1>
        <NewButtons
        tag = "#Portfolio-About"
        title = "This Website"
        github = "https://github.com/jonah0502/netlify-website"
        visit = "https://jonahportfolio.com/"
        hexcolor_1 = "#000075"
        hexcolor_2 = "#5C5CFF"
        />
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Anomaly Detection Android Application</h1>
        <NewButtons
        tag = "#RSA-About"
        title = "Anomaly Detection Android Application"
        github = "https://github.com/axelwp/applications.iot.augmented-reality.intelligent-augmentation.dynamic-camera-capture"
        visitBool = {false}
        hexcolor_1 = "#ff2079"
        hexcolor_2 = "#e92efb"
        />
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Self Hosted Server on Raspberry Pi</h1>
        <NewButtons
        tag = "#RPi-About"
        title = "Self Hosted Server on Raspberry Pi"
        github = "https://lh3.googleusercontent.com/proxy/3t6e67NH-20iYARYuxcBSFYgxVNrCa7Ct_y3dBWLLhVFJa-FyiwkJFZRZk6L3RhGDsr03trN7OdrCKHqp1mUJ6ZMSmnchptm_Ycrp0WNc1Rc289hH7IrGQ4"
        visitBool = {false}
        hexcolor_1 = "#b537f2"
        hexcolor_2 = "#3cb9fc"
        />
      </div>
    </div>
    
    {/*<span class="caption" ref={caption}>
      0.00
    </span>*/}
        </div>
))

export default Overlay
