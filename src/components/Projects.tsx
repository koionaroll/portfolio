import React from 'react'
import styled from "styled-components";
import * as stylevar from"../styles/variables";

const Section = styled.div`
  height: 100vh;
  padding-top:4rem;
  background-color: ${stylevar.style.backgroundOne};
  scroll-snap-align:center;
  @media (min-width: ${stylevar.style.desktopWidth}){
}
color: ${stylevar.style.primaryOne};
display: flex;
justify-content:center;
@media (min-width: ${stylevar.style.tabletWidth}){
    align-items:center
}
`;

const Scroll = styled.div`
 padding:0 1rem;
 @media (min-width: ${stylevar.style.tabletWidth}){
    padding:0 4rem;
  }
`

function Projects() {
  return (
    <Section id = "section-2">
        <Scroll>project</Scroll>
    </Section>
  )
}

export default Projects