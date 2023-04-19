import React from 'react'
import styled from "styled-components";
import * as stylevar from"../styles/variables";

const Section = styled.div`
  height: 100vh;
  background-color: ${stylevar.style.backgroundTwo};
  scroll-snap-align:center;
  padding: 4rem 1rem 0;
  @media (min-width: ${stylevar.style.tabletWidth}){
    padding: 4rem 4rem 0;
  }
  @media (min-width: ${stylevar.style.desktopWidth}){
  }
  color: ${stylevar.style.primaryOne};
  display: grid;
  grid-template-areas:
    "top"
    "bottom";
    grid-template-rows: 3fr 1fr;
   @media (min-width: ${stylevar.style.tabletWidth}) {
    grid-template-areas:"left right";
    padding: 4rem 4rem 0;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 1fr
}
`

const Email = styled.div`

` 

const Socials = styled.div`

`

function Contact() {
  return (
    <Section id = "section-3">
        <Email>
            <form onSubmit={handleSubmit}></form>
        </Email>
        <Socials>SOCIALS</Socials>
    </Section>
  )
}

export default Contact