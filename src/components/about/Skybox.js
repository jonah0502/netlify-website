
// R3F
import {useThree} from "@react-three/fiber";

import * as THREE from 'three'


// Loads the skybox texture and applies it to the scene.
export default function SkyBox() {
    const { scene } = useThree();
    const loader = new THREE.CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.load([
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg",
      "/5.jpg",
      "/6.jpg"
    ]);
  
    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null;
  }