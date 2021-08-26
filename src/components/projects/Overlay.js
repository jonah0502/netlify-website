import React, { forwardRef } from "react"
import NewButtons from './NewButtons.js'
import { Html } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"



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
        visit = "https://www.design-den.org/"
        hexcolor_1 = "#e1f081"
        hexcolor_2 = "#4895b7"
        />
      </div>
    </div>
    <div style={{ height: "200vh", zIndex:99 }}>
      <div className="dot">
        <h1>Fretboard Alarm</h1>
        <NewButtons
        tag = "#Fretboard-About"
        title = "Fretboard Alarm"
        github = "https://lh3.googleusercontent.com/proxy/3t6e67NH-20iYARYuxcBSFYgxVNrCa7Ct_y3dBWLLhVFJa-FyiwkJFZRZk6L3RhGDsr03trN7OdrCKHqp1mUJ6ZMSmnchptm_Ycrp0WNc1Rc289hH7IrGQ4"
        visit = "https://lh3.googleusercontent.com/proxy/3t6e67NH-20iYARYuxcBSFYgxVNrCa7Ct_y3dBWLLhVFJa-FyiwkJFZRZk6L3RhGDsr03trN7OdrCKHqp1mUJ6ZMSmnchptm_Ycrp0WNc1Rc289hH7IrGQ4"
        hexcolor_1 = "#c29161"
        hexcolor_2 = "#e9e630"
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
        visit = "https://tagflix1.herokuapp.com/"
        hexcolor_1 = "#275c12"
        hexcolor_2 = "#758548"
        />
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Loom</h1>
        <NewButtons
        tag = "#Loom-About"
        title = "Loom"
        github = "https://github.com/OPEnSLab-OSU/Loom/"
        visitBool = {false}
        hexcolor_1 = "#8ba168"
        hexcolor_2 = "#b90708"
        />
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Porfolio Website</h1>
        <NewButtons
        tag = "#Portfolio-About"
        title = "This Website"
        github = "https://github.com/jonah0502/netlify-website"
        visit = "https://jonahportfolio.com/"
        hexcolor_1 = "#35cd43"
        hexcolor_2 = "#09ef56"
        />
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Review Sentiment Analysis</h1>
        <NewButtons
        tag = "#RSA-About"
        title = "Review Sentiment Analysis"
        github = "https://lh3.googleusercontent.com/proxy/3t6e67NH-20iYARYuxcBSFYgxVNrCa7Ct_y3dBWLLhVFJa-FyiwkJFZRZk6L3RhGDsr03trN7OdrCKHqp1mUJ6ZMSmnchptm_Ycrp0WNc1Rc289hH7IrGQ4"
        visitBool = {false}
        hexcolor_1 = "#9a455a"
        hexcolor_2 = "#ee325d"
        />
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Rasberry Pi Guitar Pedal</h1>
        <NewButtons
        tag = "#RPi-About"
        title = "Rasberry Pi Guitar Pedal"
        github = "https://lh3.googleusercontent.com/proxy/3t6e67NH-20iYARYuxcBSFYgxVNrCa7Ct_y3dBWLLhVFJa-FyiwkJFZRZk6L3RhGDsr03trN7OdrCKHqp1mUJ6ZMSmnchptm_Ycrp0WNc1Rc289hH7IrGQ4"
        visitBool = {false}
        hexcolor_1 = "#a8f2cc"
        hexcolor_2 = "#1eebd9"
        />
      </div>
    </div>
    
    {/*<span class="caption" ref={caption}>
      0.00
    </span>*/}
        </div>
))

export default Overlay
