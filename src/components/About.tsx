import React from "react";
import styled from "styled-components";
import * as stylevar from "../styles/variables";

/* @media (min-width: ${stylevar.style.tabletWidth}) {
}
@media (min-width: ${stylevar.style.desktopWidth}) {
} */

const Section = styled.div`
  height: 100vh;
  background-image: ${stylevar.style.gradient};
  background-size: 500%;
  scroll-snap-align: center;
  padding: 4rem 1rem 0;
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
flex-direction:column;
align-items:center;
justify-content:center;
h1{
    font-size: 8vw;
    font-weight:800;
}
li{
    display:flex;
    justify-content:flex-start;
    list-style-type:none;
    font-size:3vw;
}
align-items:flex-start;
margin: 0 auto;
@media (min-width: ${stylevar.style.tabletWidth}) {
    h1{
        font-size: 5.9vw;
        font-weight:800;
    }
    li{
        list-style-type:none;
        font-size:2.5vw;
    }
}
`;

const Cube = styled.div``;

function About() {
  return (
    <Section id="section-1">
      <Bio>
        <h1>KHÔI TRAN</h1>
        <ul>
            <li>Full Stack Developer</li>
            <li>Tech Enthusiast</li>
            <li>Gamer</li>
        </ul>
      </Bio>
      <Cube>cube</Cube>
    </Section>
  );
}

export default About;
