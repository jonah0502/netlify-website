import React from "react";
// R3F
import {useProgress} from "@react-three/drei";

// React Spring
import { a, useTransition } from "@react-spring/web";


export default function Loader() {
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
          <a.div className='loading' style={{ opacity }}>
            <h5 style={{ color: "white"}}>Loading...</h5>
            <div className='loading-bar-container'>
              <a.div className='loading-bar' style={{ width: progress }}></a.div>
            </div>
          </a.div>
          </div>
        )
    );
  }