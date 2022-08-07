import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

import Background from "./components/Background";
import TextSection from "./components/TextSection";

import "./styles.css";
import Electron from "./components/Electron";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />

      {/* <TitleWithoutMargin>3D Cube</TitleWithoutMargin>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense fallback={null}>
          <Box/>
        </Suspense>
      </Canvas>
      
      <Title>Bubble</Title>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense fallback={null}>
          <Sphere/>
        </Suspense>
      </Canvas> */}

      <Title>3D Earth Model</Title>
      <Canvas className="canvas">
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={3}
        />
        <Suspense fallback={null}>
          <Electron />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  position: relative;
  display: grid;
  text-align: center;
  margin: 0 auto;
  margin-top: 70px;
`;

const TitleWithoutMargin = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  position: relative;
  display: grid;
  text-align: center;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 400px;

    position: relative;
  }
`;
