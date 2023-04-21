import React from "react";
import styled from "styled-components";
import * as stylevar from "../styles/variables";

const Section = styled.div`
  position: fixed;
  background-size: cover;
  background-blend-mode: darken;
  background-color: rgba(15, 15, 15, 0.5);
  color: #f5f5f5;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 1;
  @media (min-width: ${stylevar.style.tabletWidth}) {
    padding: 0 4rem;
  }
  overflow-y: auto;
  div{
    cursor: pointer;
    &:hover{
      
    }
  }
  `;

function NavBar() {
  
  const doClick = (to:string) => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section>
      <div onClick={()=>doClick("section-1")}>ABOUT</div>
      <div onClick={()=>doClick("section-2")}>PROJECTS</div>
      <div onClick={()=>doClick("section-3")}>CONTACT</div>
    </Section>
  );
}

export default NavBar;
