import React from "react";
import styled from "styled-components";
import * as stylevar from"../styles/variables";

const Section = styled.div`
  height: 100vh;
  background-color: ${stylevar.style.backgroundOne};
  @media (min-width: ${stylevar.style.tabletWidth}){
  }
  @media (min-width: ${stylevar.style.desktopWidth}){
  }
`;

function About() {
  return (
    <Section>
      <div>About</div>
    </Section>
  );
}

export default About;
