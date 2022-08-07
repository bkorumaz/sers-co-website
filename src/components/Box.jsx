import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import texture from "../images/map.jpg"

 const Box = () => {

    const colorMap = useLoader(TextureLoader, texture)

    //geometry and material
     return(
        <mesh rotation={[90, 0, 20]}  scale={1.0}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]}/>
            <meshNormalMaterial map={colorMap}/>
        </mesh>
     )
 }

 export default Box; 