import React, { useEffect, useState, useRef, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import styled from "styled-components";
import face1 from "/assets/icons/1.jpg";
import face2 from "/assets/icons/2.png";
import face3 from "/assets/icons/3.png";
import face4 from "/assets/icons/4.png";
import face5 from "/assets/icons/5.png";
import face6 from "/assets/icons/6.png";
import * as stylevar from "../styles/variables";
import { BoxGeometry } from "three";

const Section = styled.div`
  height: 100vh;
  background-image: ${stylevar.style.gradient};
  background-size: 500%;
  scroll-snap-align: center;
  padding: 5rem 1rem 4rem;
  animation: bg-animation 10s infinite alternate;
  @keyframes bg-animation {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
  color: ${stylevar.style.primaryOne};
  display: grid;
  grid-template-areas:
    "top"
    "bottom";
  grid-template-rows: 1fr 2fr;
  @media (min-width: ${stylevar.style.tabletWidth}) {
    grid-template-rows: 1fr;
    padding: 4rem 4rem 0;
    grid-template-columns: 2fr 3fr;
  }
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  h1 {
    font-size: 3rem;
    font-weight: 800;
  }
  li {
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
    font-size: 1.2rem;
  }
  @media (min-width: ${stylevar.style.tabletWidth}) {
    h1 {
      font-size: 5.9vw;
      font-weight: 800;
    }
    li {
      list-style-type: none;
      font-size: 2vw;
    }
  }
`;
const Cube = styled.div`
  svg {
    fill: black;
  }
`;

function About() {
  const [size, setSize] = React.useState<any>([0.0, 0.0, 0.0]);
  const windowSize = useRef([window.innerWidth]);
  useEffect(() => {
    if (windowSize.current[0] < 768) {
      setSize([2.5, 2.5, 2.5]);
    } else if (windowSize.current[0] >= 768 && windowSize.current[0] < 1280) {
      setSize([2, 2, 2]);
    } else if (windowSize.current[0] >= 1280) {
      setSize([2.5, 2.5, 2.5]);
    }
  }, []);

  function Box() {
    const mesh = useRef<any>(null)
    const [map1, map2, map3, map4, map5, map6] = useLoader(TextureLoader, [face1, face2, face3, face4, face5, face6]);
    useFrame(() => {
      mesh.current!.rotation.x = mesh.current!.rotation.y += 0.005;
    });

    return (
      <mesh ref={mesh}>
        <boxGeometry args={size} />
        <meshStandardMaterial attach="material-0" map={map1} />
        <meshStandardMaterial attach="material-1" map={map6} />
        <meshStandardMaterial attach="material-2" map={map3} />
        <meshStandardMaterial attach="material-3" map={map2} />
        <meshStandardMaterial attach="material-4" map={map4} />
        <meshStandardMaterial attach="material-5" map={map5} />
      </mesh>
    );
  }

  return (
    <Section id="section-1">
      <Bio>
        <h1>KHÔI TRAN</h1>
        <ul>
          <li>Full Stack Developer</li>
          <li>Tech Enthusiast</li>
          <li>Solves Rubik's cube under 30 sec</li>
        </ul>
      </Bio>
      <Cube>
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={0.1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Suspense fallback={null} >
            <Box/>
          </Suspense>
        </Canvas>

      </Cube>
    </Section>
  );
}

export default About;
