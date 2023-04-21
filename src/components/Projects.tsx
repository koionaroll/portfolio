import React from "react";
import styled from "styled-components";
import * as stylevar from "../styles/variables";
import Widget from "./Widget";
import data from "../data/project.json";

const Section = styled.div`
  height: 100vh;
  padding-top: 4rem;
  background-color: ${stylevar.style.backgroundOne};
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  color: ${stylevar.style.primaryOne};
  h2 {
    padding: 2rem 1rem;
    font-size: 1.7rem;
    font-weight: 600;
    @media (min-width: ${stylevar.style.tabletWidth}) {
      padding: 2rem 4rem;
      font-size:2.5rem;
    }
    @media (min-width: ${stylevar.style.desktopWidth}) {
    font-size:3.5rem;
  }
  }
  @media (min-width: ${stylevar.style.desktopWidth}) {
    justify-content:center;
  }

`;

const Scroll = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  overflow-y: auto;
  gap: 1rem;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (min-width: ${stylevar.style.tabletWidth}) {
    padding: 1rem 4rem;
  }
  @media (min-width: ${stylevar.style.desktopWidth}) {
    overflow-y: hidden;
    overflow-x: scroll;
    flex-direction: row;
  }
  ::-webkit-scrollbar {
  width: 22px;
  @media (min-width: ${stylevar.style.desktopWidth}) {
  height: 25px;
  }
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background: ${stylevar.style.primaryTwo};
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #b3357e;
}
`;
function Projects() {
  return (
    <Section id="section-2">
      <h2>What I've worked on</h2>
      <Scroll>
    {data.map((e)=>{
      return(
        <Widget e={e} key={e.name}/>
      )
    })}
      </Scroll>
    </Section>
  );
}

export default Projects;
