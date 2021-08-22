import React, { forwardRef } from "react"
import TagButton from './TagButtons.js'
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
        <TagButton/>
      </div>
    </div>
    <div style={{ height: "200vh", zIndex:99 }}>
      <div className="dot">
        <h1>Fretboard Alarm App</h1>
          <TagButton/>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        
        <h1>TagFlix</h1>
        <TagButton/>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>CNN Classifier</h1>
        <TagButton/>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Loom</h1>
        <TagButton/>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>This Website</h1>
        <TagButton/>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Rasberry Pi Project</h1>
        <TagButton/>
      </div>
    </div>
    
    {/*<span class="caption" ref={caption}>
      0.00
    </span>*/}
        </div>
))

export default Overlay
