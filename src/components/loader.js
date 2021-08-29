import React from "react";
// R3F
import {useProgress} from "@react-three/drei";

// React Spring
import { a, useTransition } from "@react-spring/web";


export default function Loader({Homepage = false}) {
    const { active, progress } = useProgress();
    const transition = useTransition(active, {
      from: { opacity: 1, progress: 0 },
      leave: { opacity: 0 },
      update: { progress },
    });
    return transition(
      ({ progress, opacity }, active) =>
        active && (
          <div className = 'loader'>
          <a.div className='loading' style={{ }}>
            <h5 style={{ color: "white"}}>Loading...</h5>
            <div className='loading-bar-container'>
              <a.div className='loading-bar' style={{ width: progress }}></a.div>
            </div>
            {Homepage && <h5 style={{ color: "white"}}>(This may take a while)</h5>}
          </a.div>
          </div>
        )
    );
  }